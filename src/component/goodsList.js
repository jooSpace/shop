import React from 'react';

const GoodsList = (props) => {

    return (
        <>              
            {/* <img src={process.env.PUBLIC_URL + '/img.jpg'} width={300}></img> */}
            <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width={300} alt=""></img>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>
        </>   
    );

}

export default GoodsList;
