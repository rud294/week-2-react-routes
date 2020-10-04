import React from 'react'
import { Link } from 'react-router-dom'

import Header from './header'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">
            Dashboard
            <Link to="/dashboard/main">   Go To Main</Link>
            <Link to="/dashboard/profile/47843c32-d666-4487-ab6c-139b9cbfbbc2">   Go To Profile</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
