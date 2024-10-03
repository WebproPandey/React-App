import React from 'react'
import Header from './Header'
import Project  from './Project'



const Profile = () => {
  return (
    <>
      <div className="bg-[#f8f4ee] flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-white rounded-2xl p-6">
            <Header/>
            <Project/>
        </div>
      </div>
    </>
  )
}

export default Profile