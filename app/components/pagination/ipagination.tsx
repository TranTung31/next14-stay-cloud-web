/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Pagination } from 'antd'

type IPaginationProps = {
  total: number
  pageSize: number
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  locale?: {
    jump_to: string
    page: string
    items_per_page: string
  }
  onChange: (page: number, pageSize: number) => void
}

const IPagination: React.FC<IPaginationProps> = (props) => {
  const {
    total,
    pageSize = 10,
    showSizeChanger = true,
    showQuickJumper = true,
    locale,
    onChange,
  } = props

  return (
    <Pagination
      total={total}
      pageSize={pageSize}
      showSizeChanger={showSizeChanger}
      showQuickJumper={showQuickJumper}
      showTotal={(total) => `Tổng cộng ${total} dòng`}
      locale={
        locale
          ? locale
          : { jump_to: 'Đến', page: 'Trang', items_per_page: '/ trang' }
      }
      onChange={onChange}
      className="float-right"
    />
  )
}

export default IPagination
