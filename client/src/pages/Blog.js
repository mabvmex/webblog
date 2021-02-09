import React from 'react';
import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';

export default function Blog(props) {
    const { url } = useParams();
    

    return (
        <div>
            {url ? <h1 >=== DENTRO DEL POST === </h1> : <h1 >=== LISTA DE POSTS === </h1>}
        </div>
    )
}
