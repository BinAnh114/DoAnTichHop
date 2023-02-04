import React, { useEffect, useState } from "react";
import {Banner} from '../../Components/banner/banner'
import './Home.scss'

import { SuggestionProduct } from "../../Components/suggertionProduct/suggertionProduct";
import { commerce } from "../../lib/commerce";

export const Home = () => {

  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = () => {
    commerce.products.list().then((product) => {
      console.log(product);
    });
  };
  return (
    <div className="container">
      <div className="Home_content">
        <div className="banner">
          <Banner />
        </div>
        
        <div className="Content Content_2">
          <SuggestionProduct />
        </div>
        
      </div>
    </div>
  )

};
export default Home;