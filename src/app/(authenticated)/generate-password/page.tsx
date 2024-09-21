'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { LockOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Space, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text } = Typography

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
    const leetMap: { [key: string]: string[] } = {
      A: ['4', '@', '/\\', '^', 'ä', 'Д', 'Λ', 'α', 'ª', '∂', 'λ'],
      B: ['8', '|3', 'ß', '13', '|}', '|:', 'I3', 'l3', 'β', '฿'],
      C: ['(', '<', '[', '©', '¢'],
      D: ['|)', '|}', '|]', 'I>', '|>', 'cl', 'c|'],
      E: ['3', '&', '£', '€', 'ë', '[-'],
      F: ['|=', 'ph', '|#', 'ƒ'],
      G: ['6', '9', '&', '(_+', 'gee', 'C-'],
      H: ['#', '/-/', '[-]', ']-[', ')-(', '(-)', ':-:', '|-|', '}{', '}-{'],
      I: ['!', '1', '|', 'eye', '3y3', ']['],
      J: ['_|', '_/', '¿', '</', '_)', '_]'],
      K: ['|<', '|{', ']{', '|X', '|c'],
      L: ['1', '|_', '|', '£'],
      M: ['|\\/|', '/\\/\\', 'em', 'AA', '|V|', '[V]'],
      N: ['|\\|', '/\\/', '(\\)', '11', 'r'],
      O: ['0', '()', 'oh', '[]', 'p'],
      P: ['|D', '|*', '|o', '|º', '|>'],
      Q: ['(,)', '0_', 'O_', '9', 'kw'],
      R: ['|2', '12', '.-', '|^', 'I2'],
      S: ['5', '$', 'z', '§', 'ehs'],
      T: ['7', '+', '-|-', ''][''],
      U: ['|_|', '(_)', 'Y3W', 'M'],
      V: ['\\/', '|/', '\\|', '1/'],
      W: ['\\^/', '//', '\\\\//', 'VV'],
      X: ['><', '}{', 'ecks', '×'],
      Y: ['`/', '¥', 'j', '7'],
      Z: ['2', '7_', '>_', 's'],
    }

    const encrypted = passphrase
      .toUpperCase()
      .split('')
      .map(
        char =>
          leetMap[char][Math.floor(Math.random() * leetMap[char].length)] ||
          char,
      )
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
