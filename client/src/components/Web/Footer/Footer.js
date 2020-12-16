import React from 'react';
import { Layout, Row, Col } from 'antd'
import MyInfo from './MyInfo';
import './Footer.scss';

export default function Footer() {
    const { Footer } = Layout;

    return (
        <Footer className='footer' >
            <Row>
                <Col md={4} />
                <Col md={16}>
                    <Row>
                    <Col md={8}> <MyInfo /> </Col>
                    <Col md={8}> NAVEGACION </Col>
                    <Col md={8}> NEWS LETTER </Col>
                    </Row>
                    <Row className='footer__copyright' >
                        <Col md={12}> © 2020 - All rights reserved </Col>
                        <Col md={12}> © Miguel Barrera - Desarrollador web y móvil </Col>
                    </Row>
                </Col>
                <Col md={4} />
            </Row>
        </Footer>
    )
}
