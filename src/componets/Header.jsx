import React from 'react'

const Header = () => {
  return (
    <div>
          <header className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <img
                src="profile-pic.png"
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Sourav Suman
                </h2>
                <p className="text-sm text-gray-500">App Developer</p>
              </div>
            </div>
            <button className="text-gray-500 text-2xl">
              <i className="fas fa-cog"></i>
            </button>
          </header>
    </div>
  )
}

export default Header