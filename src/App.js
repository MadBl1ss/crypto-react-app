import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Cryptocurrencies, News, CryptoDetails, Nft } from './components';
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Navbar />
            <div className="main">
                <Layout>
                    <div className="routes"> 
                        <Routes>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/nft" element={<Nft />} />
                            {/* После миграции coinranks API до версии 2, 
                            доступ к информации по обмену стал доступен только в премиум подписке 
                            <Route path='/exchanges' element={<Exchanges/>} /> */}
                            <Route path='/cryptocurrencies' element={<Cryptocurrencies/>} />
                            <Route exact path='/crypto/:uuid' element={<CryptoDetails/>} />
                            <Route path='/news' element={<News />} />  
                        </Routes>
                    </div>
                </Layout>
            <div className="footer">
                <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                    Orion Crypto<br />
                    2022 
                    </Typography.Title>
                    <Space>
                        <Link to="">Home</Link>
                        {/* <Link to="/exchanges">Exchanges</Link> */}
                        <Link to="/news">News</Link>
                    </Space>
                    </div>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App
