import React from 'react'
import { Menu, Typography, Avatar, PageHeader } from 'antd'
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, BlockOutlined } from '@ant-design/icons'
import icon from '../images/logo.png'

const Navbar = () => {
    return (
        <PageHeader className="ant-page-header-content ant-page-header">
            <div className="logo-container">
                <Avatar src={icon} size={55} />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Orion Crypto</Link>
                </Typography.Title>
            </div>
            <Menu theme="dark" mode="horizontal" className="header-menu" style={{fontSize: '18px'}}>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<BlockOutlined />}>
                    <Link to="/nft">NFT</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news">News</Link>
                </Menu.Item>
            </Menu>
            </PageHeader>
    )
}

export default Navbar
