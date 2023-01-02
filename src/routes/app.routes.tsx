import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Layout from '../components/Layout'

// Pages
import Dashboard from '../pages/Dashboard'
import List from '../pages/List'

const AppRoutes: React.FC = () => {
    return(
        <Layout>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/list/:type" element={<List />}/> 
            </Routes>
        </Layout>
    )
}

export default AppRoutes