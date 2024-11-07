'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const KhachSanByIdPage = () => {
  const params = useParams()

  return <div>{`KhachSanByIdPage ${params.id}`}</div>
}

export default KhachSanByIdPage
