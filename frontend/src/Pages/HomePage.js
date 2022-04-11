import { isDocument } from "@testing-library/user-event/dist/utils";
import React, {Component} from "react";
import { Link } from "react-router-dom";
import data from '../data';
import axios from 'axios';
class HomePage extends Component{
  state = {
    items: []
  }

  componentDidMount(){
    axios.get('/api/items').then(res=>{
      this.setState ({
          items: res.data,
      });
    
  });  
  }

  render(){

    // i made a variable that is the html for each item.
    //if you wanna loop over a list and display html you do:
    //the list.map and that function returns a div with ur html code which it will display for each element in that list
    //make sure u return something from the function
    //this works for any time you want to loop over a list in any component
    const itemListElements = this.state.items.map(item=>{
      return (
        <li key = {item._id}>
          <div className="item">
          <Link to={'/item/' + item._id}>
                    <img
                      src={`/pictures/${item.path}`}
                      alt="item"
                      width="200" height="200"
                    />
          </Link>
               <div className="item-name"> 
                   <Link to={'/item/' + item._id}>{item.name}</Link>
               </div>
               <div className="item-team"> {item.team} </div>
               <div className="item-price"> ${item.price} </div>
          </div>
      </li>)
      
    })


    return (
      <div>
        <ul className="items">
          {itemListElements}
        </ul>

      </div>

    );
  }
}

export default HomePage;

{/* <div>
<ul className="items">
{
  data.items.map(item =>
<li>
    <div className="item">
    <Link to={'/item/' + item.slug}>
              <img
                src={item.pic}
                alt="item"
                width="200" height="200"
              />
    </Link>
         {/* <img src={item.pic} alt="item" width="200" height="200"></img> */}
//          <div className="item-name"> 
//              <Link to={'/item/' + item.slug}>{item.name}</Link>
//              {/* <a href="item.html"> {item.name} </a>  */}
//          </div>
//          <div className="item-team"> {item.team} </div>
//          <div className="item-price"> ${item.price} </div>
//     </div>
// </li>)
// } 

// </ul>
// </div> */}