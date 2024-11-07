/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import type { TableProps } from 'antd'
import { Table } from 'antd'
import React from 'react'
import IPagination from '../pagination/ipagination'

interface ITableProps extends TableProps<any> {
  columns: any[]
  dataSource: any[]
  titleTable: string
  totalTable: number
  pageSize: number
  handleChangePage: (page: number, pageSize: number) => void
}

const ITable: React.FC<ITableProps> = (props) => {
  const {
    columns,
    dataSource,
    titleTable,
    totalTable,
    pageSize,
    handleChangePage,
  } = props

  const generateTitle = () => {
    return (
      <div>
        <h1 className="font-semibold text-lg">
          {titleTable ? titleTable : 'Quản lý'}
        </h1>
      </div>
    )
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        title={generateTitle}
        pagination={false}
        className="relative mb-5"
      />
      <IPagination
        total={totalTable}
        pageSize={pageSize}
        onChange={handleChangePage}
      />
    </div>
  )
}

export default ITable
