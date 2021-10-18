import React,{useState,useEffect} from 'react';
import {  Row } from 'react-bootstrap';
import Box from '../Box/Box';


const Service = () => {
    const[name,setName]=useState([])
    useEffect(()=>{
      fetch('./doctor.json')
      .then(res=>res.json())
      .then(data=>setName(data))

    },[])
    return (
        <div>
            <h1>Consouling Doctor </h1>
       <Row xs={1} md={3} className="g-4">
    { 
    name.map(data=><Box 
    person={data}
    ></Box>)
    }
  </Row>
        </div>
    );
};

export default Service;