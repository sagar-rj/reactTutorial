import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userId}= useParams()
  return (
    <div className='bg-green-900 text-white text-3xl p-3 flex justify-center'>
      User:{userId}
    </div>
  )
}

export default User
