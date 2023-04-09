import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store/store';

const Cart = () => {

    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    console.log(state.cart);

    return (
        <div>
            {state.user}
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                {
                    state.cart.map((a, i) => { 
                        return <tr key={i}>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            <td>안녕</td>
                            <td><button onClick={() => {
                                dispatch(changeName())
                            }} type='button'>+</button></td>
                        </tr>
                    })
                }
                </tbody>
            </Table> 
        </div>
    );
}

export default Cart;
