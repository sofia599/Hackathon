'use client'

import { Typography, Button, List, Card, Space } from 'antd'
import { LockOutlined, PlusOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: credentials,
    isLoading,
    refetch,
  } = Api.credential.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { dateCreated: 'desc' },
  })

  const handleGeneratePassword = () => {
    router.push('/generate-password')
  }

  const handleViewPassword = (passwordId: string) => {
    router.push(`/saved-passwords/${passwordId}`)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={2}>Password Dashboard</Title>
            <Text>
              Welcome to your password management dashboard. Here you can view
              your saved passwords and generate new ones.
            </Text>
          </div>

          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleGeneratePassword}
            size="large"
          >
            Generate New Password
          </Button>

          <Card>
            <Title level={3}>Your Saved Passwords</Title>
            {isLoading ? (
              <Text>Loading your passwords...</Text>
            ) : (
              <List
                dataSource={credentials}
                renderItem={item => (
                  <List.Item
                    key={item.id}
                    actions={[
                      <Button
                        key="view"
                        onClick={() => handleViewPassword(item.id)}
                        icon={<LockOutlined />}
                      >
                        View
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      title={`Password ID: ${item.id}`}
                      description={`Created on: ${dayjs(item.dateCreated).format('MMMM D, YYYY')}`}
                    />
                  </List.Item>
                )}
              />
            )}
          </Card>
        </Space>
      </div>
    </PageLayout>
  )
}
