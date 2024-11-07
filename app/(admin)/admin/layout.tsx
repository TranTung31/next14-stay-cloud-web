'use client'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import React, { useState } from 'react'
import { FaBed, FaHotel } from 'react-icons/fa6'

const { Header, Sider, Content } = Layout

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [collapsed, setCollapsed] = useState(false)

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        {/* <div className="demo-logo-vertical p-5 text-base font-semibold text-center">
            StayCloud Admin
          </div> */}
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Quản lý người dùng',
            },
            {
              key: '2',
              icon: <FaHotel />,
              label: 'Quản lý khách sạn',
            },
            {
              key: '3',
              icon: <FaBed />,
              label: 'Quản lý phòng',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
