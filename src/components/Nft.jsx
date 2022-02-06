import React, { useState, useEffect} from 'react';
import { Typography, Card, Row, Col, Input } from 'antd'
import millify from 'millify'
import Loader from './Loader'
import { useGetTopNftApiQuery }  from '../services/nftApi'

const { Text } = Typography

const Nft = () => {
    const { data: nftList, isFetching } = useGetTopNftApiQuery()
    const [nft, setNft] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const filteredData = nftList?.list?.filter((nft) => nft.name.toLowerCase().includes(searchTerm.toLowerCase())) 
        setNft(filteredData);

    }, [nftList, searchTerm])

    if (isFetching) return <Loader />

    return (
        <>
            <div className="search-crypto">
                <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value) }/>
            </div>
            <Row gutter={[32,32]} className="crypto-card-container">
                {nft?.map((item) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={item.id}>
                        <Card
                            title={item.symbol}
                            extra={<img className="crypto-image" alt="cryptoIcon" src={item.pic} />}
                            style={{backgroundImage: `${item.cover}`}}
                            hoverable
                            
                        >
                            <p>Name: <Text strong>{item?.name}</Text></p>
                            <p>Count: <Text strong>{item?.count}</Text></p>
                            <p>Summary price: <Text strong>{`${millify(item?.sum)} $`}</Text></p>
                            <a className="nftLink" rel="noopener noreferrer" target="_blank" href={`${item.url}`}><p>Link <Text strong></Text></p></a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Nft
