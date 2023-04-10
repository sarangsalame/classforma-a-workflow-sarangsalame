import React from 'react';
import './Home.css';
import Header from '../header/Header';
import Table from '../table/Table';

const Home = () => {
  return (
    <div className='home'>
      <Header title={"Workflows"} />
      <Table />
    </div>
  )
}

export default Home