import React from 'react';
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import data from '../data.js';
import GoodsList from '../component/goodsList.js';

const Main = () => {

    let [shoes, setShoes] = useState(data);

    return (
        <div>
            <div className='main-bg'>
                
            </div>
            <Container>
                <Row>
                    {
                    shoes.map((a, i) => {
                            return (
                                <Col key={shoes[i].id} sm={4}>
                                    <GoodsList shoes={shoes[i]} i={i}></GoodsList>
                                </Col> 
                            )
                        })  
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Main;
