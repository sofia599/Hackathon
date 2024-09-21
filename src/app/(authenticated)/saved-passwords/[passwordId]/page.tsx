'use client'

import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { Card, Space, Spin, Typography } from 'antd'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
const { Title, Text } = Typography

export default function PasswordDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewName] = useState('')

  const {
    data: credential,
    isLoading,
    refetch,
  } = Api.credential.findUnique.useQuery({
    where: { id: params.passwordId },
    include: { user: true },
  })

  const { mutateAsync: updateCredential } = Api.credential.update.useMutation()

  useEffect(() => {
    if (credential) {
      setNewName(credential.passphrase)
    }
  }, [credential])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    try {
      await updateCredential({
        where: { id: params.passwordId },
        data: { password: credential.password },
      })
      setIsEditing(false)
      refetch()
      enqueueSnackbar('Password name updated successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to update password name', { variant: 'error' })
    }
  }

  const handleCopy = () => {
    if (credential) {
      navigator.clipboard.writeText(credential.passphrase)
      enqueueSnackbar('Password copied to clipboard', { variant: 'success' })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!credential) {
    return (
      <PageLayout layout="full-width">
        <Title level={3}>Password not found</Title>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Card style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title level={2}>Password Details</Title>
        <Text>View and manage your saved password</Text>

        <Space
          direction="vertical"
          size="large"
          style={{ width: '100%', marginTop: 24 }}
        >
          {/* <div>
            <Text strong>Name:</Text>
            {isEditing ? (
              <Input
                value={newName}
                onChange={e => setNewName(e.target.value)}
                style={{ marginLeft: 8 }}
              />
            ) : (
              <Text style={{ marginLeft: 8 }}>{credential.password}</Text>
            )}
            {isEditing ? (
              <Button
                icon={<SaveOutlined />}
                onClick={handleSave}
                type="primary"
                style={{ marginLeft: 8 }}
              >
                Save
              </Button>
            ) : (
              <Button
                icon={<EditOutlined />}
                onClick={handleEdit}
                style={{ marginLeft: 8 }}
              >
                Edit
              </Button>
            )}
          </div>

          <div>
            <Text strong>Encrypted Password:</Text>
            <Text style={{ marginLeft: 8 }}>{credential.passphrase}</Text>
            <Button
              icon={<CopyOutlined />}
              onClick={handleCopy}
              style={{ marginLeft: 8 }}
            >
              Copy
            </Button>
          </div> */}

          <div>
            <Text strong>Created:</Text>
            <Text style={{ marginLeft: 8 }}>
              {new Date(credential.dateCreated).toLocaleString()}
            </Text>
          </div>

          <div>
            <Text strong>Last Updated:</Text>
            <Text style={{ marginLeft: 8 }}>
              {new Date(credential.dateUpdated).toLocaleString()}
            </Text>
          </div>
        </Space>
      </Card>
    </PageLayout>
  )
}
