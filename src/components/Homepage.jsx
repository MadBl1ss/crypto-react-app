import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic, Divider } from 'antd'
import { Link } from 'react-router-dom'
import Loader from './Loader'

import { useGetCryptoQuery } from '../services/cryptoApi'
import { Cryptocurrencies, News } from '../components'

const { Title } = Typography

const Homepage = () => {
    const { data, isFetching } = useGetCryptoQuery(10);
    const globalStats = data?.data?.stats;
    if (isFetching) return <Loader />

    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row gutter={[16, 24]} className="globalStats">
                <Col className="colStyle"span={12}><Statistic valueStyle={{ color: "#fff" }} title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col className="colStyle"span={12}><Statistic valueStyle={{ color: "#fff" }} title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col className="colStyle"span={12}><Statistic valueStyle={{ color: "#fff" }} title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                <Col className="colStyle"span={12}><Statistic valueStyle={{ color: "#fff" }} title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
                <Col className="colStyle"span={12}><Statistic valueStyle={{ color: "#fff" }} title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <Divider />
            <div>
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified />
            <Divider/>
            <div>
                <Title level={2} className="home-title">Lates Crypto News </Title>
                <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
            </div>
            <News simplified/>
        </>
    )
}

export default Homepage
