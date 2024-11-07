/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import ITable from '@/app/components/table/itable'
import { DeleteOutlined, EditOutlined, HomeOutlined } from '@ant-design/icons'
import type { TableProps } from 'antd'
import { Breadcrumb, Space, Tag } from 'antd'
import { useEffect, useState } from 'react'
import { getKhachSans } from './_services/_services'
import { useRouter } from 'next/navigation'

const KhachSanPage = () => {
  const router = useRouter()

  //#region State
  const [meta, setMeta] = useState({
    page: 1,
    pageSize: 10,
  })
  const [lstKhachSans, setLstKhachSans] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  //#endregion

  useEffect(() => {
    const fetchKhachSans = async () => {
      const data = await getKhachSans(meta)
      setLstKhachSans(data.data.results)
      setTotalCount(data.data.totalCount)
    }

    fetchKhachSans()
  }, [meta])

  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id',
      render: (id: number, record: any, index: number) =>
        index + 1 + (meta.page - 1) * meta.pageSize,
    },
    {
      title: 'Tên khách sạn',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Thành phố',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'Đánh giá',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Phòng còn trống',
      dataIndex: 'roomCount',
      key: 'roomCount',
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (id: number, record: any) => (
        <div className="flex gap-3 text-lg">
          <EditOutlined
            className="cursor-pointer"
            onClick={() => router.push(`/admin/khach-san/${record.id}`)}
          />
          <DeleteOutlined className="cursor-pointer" />
        </div>
      ),
    },
  ]

  const handleChangePage = (page: number, pageSize: number) => {
    setMeta((prev) => ({ ...prev, page, pageSize }))
  }

  return (
    <div>
      <div className="mb-10">
        <Breadcrumb
          items={[
            {
              href: '',
              title: <HomeOutlined />,
            },
            {
              title: 'Quản lý khách sạn',
            },
          ]}
        />
      </div>
      <ITable
        columns={columns}
        dataSource={lstKhachSans}
        titleTable="Quản lý khách sạn"
        handleChangePage={handleChangePage}
        totalTable={totalCount}
        pageSize={meta.pageSize}
      />
    </div>
  )
}

export default KhachSanPage
