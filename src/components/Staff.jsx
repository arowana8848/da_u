import React from 'react'
import AdminNav from './AdminNav'

function Staff() {
  return (
    <>
    <AdminNav/>
    <div className="h-[800px] bg-orange-500 flex items-center justify-center">
        <h1 className='text-5xl font-bold text-white'>All Staffs</h1>
    </div>
    </>
  )
}

export default Staff