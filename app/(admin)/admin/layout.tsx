import Header from '@/app/components/layouts/header'
import React from 'react'

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default AdminLayout
