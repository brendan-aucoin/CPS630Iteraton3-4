import React,{useState,useEffect} from "react";
import axios from 'axios';
function ItemPage () {
    
    let [data, setData] = React.useState({}) 
    React.useEffect(() => {                           
        // call API with props.greeting parameter
        axios.get('/api/item/123').then(res=>{
            console.log(res);
            //setData(res.data)
          
        });  
       
    }, [setData])
    return (
    <div> Item Page
        <h1></h1>
    </div>)
}

export default ItemPage;