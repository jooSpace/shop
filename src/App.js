import './App.css';
import Header from './component/Header';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Error from './pages/Error';
import One from './component/One';
import Two from './component/Two';
import { Route, Routes, Outlet } from 'react-router-dom';
import data from './data';
import { useState } from 'react';

function App() {

  let [shoes, setShoes] = useState(data);
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='detail/:id' element={<Detail shoes={shoes}/>}></Route>
        <Route path='event' element={<div><h1>오늘의 이벤트</h1><Outlet></Outlet></div>}>
          <Route path='one' element={<One></One>}></Route>
          <Route path='two' element={<Two></Two>}></Route>
        </Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
