import React, { useState, useEffect} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Typography, Card, Row, Col, Input } from 'antd'
import { useGetCryptoQuery } from '../services/cryptoApi'
import Loader from './Loader'

const { Text } = Typography

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptoQuery(count);
    const [cryptos, setCryptos] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        // const filteredSymbol = cryptosList?.data?.coins.filter((coin) => coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()))
        
        setCryptos(filteredData);
        // setCryptos(filteredSymbol);

    }, [cryptosList, searchTerm])

    if (isFetching) return <Loader />

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value) }/>
                </div>
            )}
            <Row gutter={[32,32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
                        <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name} (${currency.symbol.slice(-1) === "*" ? currency.symbol.substring(0, currency.symbol.length - 1) : currency.symbol})`}
                                // Using slices and this whole [if's] construction just to fix API's bug, cuz some of the tickets have '*' at the end
                                extra={<img className="crypto-image" alt="cryptoIcon" src={currency.iconUrl} />}
                                hoverable
                            >
                                {/* Some coins prices are too low, so millify simply outputs 0 instead of number, that's why there is a comparison */}
                                <p>Price: <Text strong>{currency.price < 0.0001 ? currency.price : millify(currency.price, {precision: 3})} $</Text></p>
                                <p>Market Cap: <Text strong>{millify(currency.marketCap, {
                                    precision: 3,
                                })}</Text></p>
                                <p>Daily Change: <Text strong type={millify(currency.change).charAt(0) === "-" ? "danger" : "success"}>{millify(currency.change)}%</Text></p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies
