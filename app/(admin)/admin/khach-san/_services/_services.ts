import { API_ROOT } from '@/app/libs/app-settings'

export const getKhachSans = async ({
  page,
  pageSize,
}: {
  page: number
  pageSize: number
}) => {
  const response = await fetch(
    `${API_ROOT}/api/v1/hotel?page=${page}&pageSize=${pageSize}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return await response.json()
}
