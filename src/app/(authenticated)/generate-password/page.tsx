'use client'

import { useState } from 'react'
import { Typography, Input, Button, Space, Form, Card } from 'antd'
import { LockOutlined, SaveOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function GeneratePasswordPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [passphrase, setPassphrase] = useState('')
  const [encryptedPassword, setEncryptedPassword] = useState('')
  const [saveName, setSaveName] = useState('')

  const { mutateAsync: createCredential } = Api.credential.create.useMutation()

  const generatePassword = () => {
    if (!passphrase) {
      enqueueSnackbar('Please enter a passphrase', { variant: 'error' })
      return
    }

    // Simple leet code cypher implementation
    const leetMap: { [key: string]: string } = {
      a: '4',
      e: '3',
      i: '1',
      o: '0',
      s: '5',
      t: '7',
    }

    const encrypted = passphrase
      .toLowerCase()
      .split('')
      .map(char => leetMap[char] || char)
      .join('')

    setEncryptedPassword(encrypted)
  }

  const savePassword = async () => {
    if (!user) {
      enqueueSnackbar('You must be logged in to save passwords', {
        variant: 'error',
      })
      return
    }

    if (!encryptedPassword || !saveName) {
      enqueueSnackbar(
        'Please generate a password and provide a name to save it',
        { variant: 'error' },
      )
      return
    }

    try {
      await createCredential({
        data: {
          password: encryptedPassword,
          passphrase: passphrase,
          userId: user.id,
        },
      })
      enqueueSnackbar('Password saved successfully', { variant: 'success' })
      setSaveName('')
    } catch (error) {
      enqueueSnackbar('Failed to save password', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Generate Encrypted Password</Title>
        <Text>
          Enter a passphrase to generate an encrypted password using leet code
          cypher.
        </Text>

        <Card style={{ marginTop: 20 }}>
          <Form layout="vertical">
            <Form.Item label="Passphrase">
              <Input
                prefix={<LockOutlined />}
                value={passphrase}
                onChange={e => setPassphrase(e.target.value)}
                placeholder="Enter your passphrase"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" onClick={generatePassword}>
                Generate Password
              </Button>
            </Form.Item>

            {encryptedPassword && (
              <>
                <Form.Item label="Generated Password">
                  <Input.Password value={encryptedPassword} readOnly />
                </Form.Item>

                <Form.Item label="Save Password">
                  <Space>
                    <Input
                      value={saveName}
                      onChange={e => setSaveName(e.target.value)}
                      placeholder="Enter a name for this password"
                    />
                    <Button icon={<SaveOutlined />} onClick={savePassword}>
                      Save
                    </Button>
                  </Space>
                </Form.Item>
              </>
            )}
          </Form>
        </Card>
      </div>
    </PageLayout>
  )
}
