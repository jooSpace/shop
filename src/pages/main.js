import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import data from '../data.js';
import GoodsList from '../component/GoodsList.js';
import Detail from './Detail.js';
import { Route } from 'react-router-dom';
import axios from 'axios';

const Main = () => {

    useEffect(() => {
        localStorage.setItem('watched',JSON.stringify([]))
    },[])

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
            {/* <Route path='/detail' element={<Detail shoes={shoes}/>}></Route> */}
            <button type='button' onClick={() =>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((res) => {
                    // console.log(res.data);
                    let copy = [...shoes, ...res.data];
                    setShoes(copy);
                })
                .catch(() => {
                    console.log('실패');
                })

                // post
                // axios.post('/postUrl', {name : 'park'})

                // 동시GET 요청
                // Promise.all([axios.get('/url1'), axios.get('/url2')])
                // .then(() => {
                //     console.log('성공');
                // })
                
            }}>
            버튼
            </button>
            
        </div>
        
    );
}

export default Main;
