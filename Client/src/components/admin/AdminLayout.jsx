import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'
const AdminLayout = () => {
  return (
    <div>AdminLayout
        <div>
            <AdminSidebar/>
        </div>
        <div>
            <AdminHeader/>
        </div>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminLayout