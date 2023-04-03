import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding 10px;
`

const Detail = (props) => {

    let {id} = useParams();
    let [alert, setAlert] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setAlert(false)},2000)
    })

    return (
        <div className="container">
            
            <div className="row">
                {
                    alert == true 
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
               
            </div> 
        </div>
    );
}

export default Detail;
