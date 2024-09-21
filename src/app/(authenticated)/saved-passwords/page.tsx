'use client'

import { useState } from 'react'
import { Typography, Input, List, Button, Modal, Space } from 'antd'
import { SearchOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SavedPasswordsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [searchTerm, setSearchTerm] = useState('')

  const {
    data: credentials,
    isLoading,
    refetch,
  } = Api.credential.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { dateCreated: 'desc' },
  })

  const { mutateAsync: deleteCredential } = Api.credential.delete.useMutation()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredCredentials = credentials?.filter(cred =>
    cred.passphrase.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this password?',
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          await deleteCredential({ where: { id } })
          refetch()
          enqueueSnackbar('Password deleted successfully', {
            variant: 'success',
          })
        } catch (error) {
          enqueueSnackbar('Failed to delete password', { variant: 'error' })
        }
      },
    })
  }

  const handleViewDetails = (id: string) => {
    router.push(`/saved-passwords/${id}`)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Saved Passwords</Title>
        <Text>Manage your stored passwords securely.</Text>

        <Input
          placeholder="Search passwords"
          prefix={<SearchOutlined />}
          onChange={handleSearch}
          style={{ marginTop: '20px', marginBottom: '20px' }}
        />

        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <List
            dataSource={filteredCredentials}
            renderItem={item => (
              <List.Item
                key={item.id}
                actions={[
                  <Button
                    key="view"
                    icon={<EyeOutlined />}
                    onClick={() => handleViewDetails(item.id)}
                  >
                    View
                  </Button>,
                  <Button
                    key="delete"
                    icon={<DeleteOutlined />}
                    danger
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={item.passphrase}
                  description={`Created: ${new Date(item.dateCreated).toLocaleDateString()}`}
                />
              </List.Item>
            )}
          />
        )}

        {filteredCredentials?.length === 0 && <Text>No passwords found.</Text>}
      </div>
    </PageLayout>
  )
}
