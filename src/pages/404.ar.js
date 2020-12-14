import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
            <h1>الصفحة مفقودة</h1>
            <p><Link to="/ar">اذهب للرئيسية</Link></p>
        </Layout>
    )
}

export default NotFound