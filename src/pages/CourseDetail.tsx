import React from 'react'
import { useParams } from 'react-router-dom'

const CustomerDetail: React.FC = () => {
  const params = useParams()
  return <h2>Chi tiết khóa học: {params.courseId}</h2>
}
export default CustomerDetail
