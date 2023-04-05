import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap'

let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding 10px;
`

const Detail = (props) => {

    let {id} = useParams();
    let [alert, setAlert] = useState(true)
    let [tab, setTab] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setAlert(false)},2000)
    })

    return (
        <div className="container">
            
            <div className="row">
                {
                    alert === true 
                    ? <div className='alert alert-warning'>
                        2초이내 구매시 할인
                    </div>
                    : null
                }
            
            {/* <YellowBtn>버튼</YellowBtn> */}
                {
                    props.shoes[id] != null ?
                    <>
                        <div className="col-md-6">
                            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                        </div>
                        <div className="col-md-6 mt-4">
                            <h4 className="pt-5">{props.shoes[id].title}</h4>
                            <p>{props.shoes[id].content}</p>
                            <p>{props.shoes[id].price}원</p>
                            <button className="btn btn-danger">주문하기</button>
                        </div> 
                    </>
                        :
                        <div>
                            값이 없습니다
                        </div>
                    
                }
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link onClick={() => {setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={() => {setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={() => {setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab ={tab}></TabContent> 
            </div>
        </div>
    );
}

function TabContent(props){
    if (props.tab === 0){
      return <div>내용0</div>
    }
    if (props.tab === 1){
      return <div>내용1</div>
    }
    if (props.tab === 2){
      return <div>내용2</div>
    }
}

export default Detail;
