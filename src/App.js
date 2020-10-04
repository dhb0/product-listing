import React, {useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Product from "./Components/Product";
import AddProduct from "./Components/AddProduct";
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').
    then(result=>{
      setData(result.data);
      setLoading(false);
    });
  },[]);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={()=><Product data={data} loading={loading} />} />
        <Route path="/addproduct" component={()=><AddProduct data={data} setData={setData}/>} />
      </div>
    </BrowserRouter>
  );
};

export default App;
