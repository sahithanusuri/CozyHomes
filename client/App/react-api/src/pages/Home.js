import { useState, useEffect} from 'react';
import React from 'react';
// import { useCallback } from 'react';
// import {RiHeart3Line} from 'react-icons/ri';
// import * as Icon from 'react-bootstrap-icons';
// import { Heart } from 'react-bootstrap-icons';
// import $ from 'jquery';
// import { Link, BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Calendar from 'react-calendar';
import moment from 'moment';

import { Col, Card, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-calendar/dist/Calendar.css';
import './Home.css';
// import Reservation from "./Components/Reservation.js"



// var clickedOnCard =0;
// var jsonProduct;


const Heading = "h" + 5;


function FilterableProductTable({state,setState}) {

    return (
      <div>
        <SearchBar
          searchText={state.searchText}
          setSearchText={(value) => setState({index:-1,searchText:value})} />
        <Container>
        <Row>
        <ProductTable
          state={state} setState = { (index) => setState({index:index, searchText:''}) }/>
          </Row>
        </Container>
      </div>
    );
}



function SearchBar({
    searchText,setSearchText
  }) {
    console.log(searchText)
    return (
      <form style = {{ padding: '15px'}} >
        <input
          style = {{ width : '935px'}}
          type="text"
          value={searchText} placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)} />
          <br></br>
      </form>
    );
  }

function ShowDetails(product1){
  const product = product1.product.product[0]
  // const  [toggleHeart, setToggleHeart] = useState(false);
  // var changeColor = useCallback(() =>{ setToggleHeart(!toggleHeart)  },[]);
  const [date, setDate] = useState(new Date())
  const onDateChange = (newDate) => {
    setDate(newDate);
    // console.log(newDate);
    // console.log(newDate[0].toJSON());
    // console.log(newDate[1].toJSON());
  }
  function reservation(){
    const unavailable = date;
    // ISO format
    // var strtdt = unavailable[0].toISOString()
    // var enddt = unavailable[1].toISOString()
    var strtdt = unavailable[0];
    var enddt = unavailable[1];
    var currentDate = moment(strtdt);
    var stopDate = moment(enddt);
    console.log(unavailable)
    var arr = [];
    while (currentDate <= stopDate){
      arr.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    console.log(arr)
    product.occupied = arr;
    console.log(product.occupied)
    return arr;

  }

  return(
    <div>
      <img src={product.path}  width="250" height="250"></img>
      <h4> <strong> { product.title } </strong>
      {/* <Heart/> */}
      {/* <Heart className={ toggleHeart ? 'bi bi-heart' : 'bi bi-heart-fill' } onClick={changeColor}/> */}
      {/* <Heart className = 'bi bi-heart' />
      <Heart className = 'bi bi-heart-fill' /> */}
      {/* <span id = "heart">      </span>       */}
      </h4>
      <p>
        <b>Description: </b>{product.description}<br></br>
        <b>Price per night: </b>{product.nightlyfee}<br></br>
        <b>Property type: </b>{product.propertytype}<br></br>
        <b>City: </b>{product.city}<br></br>
        <b>Amenities: </b>{product.amenities}<br></br>
        <b>Address: </b>{product.location}<br></br>
        <b>Additional Charges:</b>
        Cleaning & Service fee: ${product.cleaningfee} |  ${product.servicefee}<br></br>
      </p>
      <Calendar
          onChange={onDateChange}
          value={date}
          locale={"en-US"}
          selectRange={true}
        />
      <button id='reserveButton' onClick={() => reservation()}> Reserve the Property </button>

    </div>
  );
}
// function Bookingpage(dates){
//   console.log(dates);

//   return(
//     // <div>

//     //   <img src={product.path}  width="250" height="250"></img>
//     //   <h4> <strong> { product.title } </strong></h4>
//     //   <p>
//     //     <b>Price per night: </b>{product.nightlyfee}<br></br>
//     //     <b>Property type: </b>{product.propertytype}<br></br>
//     //     <b>City: </b>{product.city}<br></br>

//     //   </p>


//     // </div>
//     // <Routes>
//     //   <Route path='Resrvation' element={ <Reservation product = {product}/> }/>
//     // </Routes>

//     // <Reservation product = {product}/>
//   );


// }



function PropertyDisplay(product){
  return(
    <ShowDetails product = {product}/>
  );

};

// function Heart(){
//   // return(
//   //   <Icon.Heart />
//   // );
//   const  [toggleHeart, setToggleHeart] = useState(false);

//   var changeColor = useCallback(() =>{ setToggleHeart(!toggleHeart)  },[]);

//     return(
//       <RiHeart3Line className={ toggleHeart ? 'fill' : 'heart' } onClick={changeColor}/>

//     );

// };

function ProductTable({ state,setState}) {
  const products = [...state.products]
  if (state.index != -1){
    console.log(state)
    return(
      <PropertyDisplay product = {products.filter((product,ind) => ind == state.index )}/>
    );
  }
  else if(state.searchText != ''){
    return products.filter(product => product.propertytype.toLowerCase().includes(state.searchText.toLowerCase())
    || product.city.toLowerCase().includes(state.searchText.toLowerCase())).map((product,index) =>  (<Col key = {index} onClick = { () => setState({index:-1, searchText:state.searchText})}>
              <img src={product.path}  width="200" height="200"></img>
              <h5> <strong> { product.title } </strong> </h5>
              <p>
              <b>Description: </b>{product.description}<br></br>
              <b>Price per night: </b>{product.nightlyfee}<br></br>
              <b>Property type: </b>{product.propertytype}<br></br>
              <b>City: </b>{product.city}<br></br>
              </p>
              </Col>
           ));
  }else{


    return products.map((product,index) => (<Col key = {index} onClick = { () => setState({index:index})}>
              <img src={product.path} class="card-img-top" width="100" height="150"></img>
              <h5> <strong> { product.title } </strong> </h5>
              <p  style = {{fontSize: "14px" }}>
              <b>Description: </b><span className ="text-muted text-sm-start">{product.description}</span><br></br>
              <b>Price per night: </b><span className ="text-muted text-sm-start">{product.nightlyfee}</span><br></br>
              <b>Property type: </b><span className ="text-muted text-sm-start">{product.propertytype}</span><br></br>
              <b>City: </b><span className ="text-muted text-sm-start">{product.city}</span><br></br></p>
              </Col>
           ));

  }

};
// var randomvariable = {}
// const setData = (data)=>{
//   randomvariable = data
// }



// async function getproperties() {
//  return fetch('http://localhost:4000/api/property/', {
//    method: 'GET',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    // body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
// }
// const prop = getproperties();
// const prop1 = prop.PromiseResult;
// console.log("test1");
// console.log(prop1);
// console.log("test2");

// getproperties();


function Home() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('http://localhost:4000/api/property/', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  }

    useEffect(() => {
      getData()
    }, [])
  // console.log(typeof(prop));
  console.log('test1');
  console.log(data[0]);
  console.log('test2x');
  const [state, setState] = useState({index:-1, searchText:'', products:
  [
      {
          "id": 1,
          "title": "Westinn",
          "nightlyfee": "$780",
          "propertytype": "Cabin",
          "cleaningfee": 150,
          "description": "A high-spec modern Beach House with sea views on your well-deserved break. Enjoy the beaches, the sandy shores in the cool evenings and candle-light dinner under the moonlight",
          "amenities": "wifi, pool, fitness center, complimentary breakfast, breakfast bar, parking, laundry",
          "servicefee": 80,
          "bedrooms": 4,
          "city": "Dallas",
          "location": "9588 Co Rd 2422 Royse",
          "restaurant": true,
          "click":false,
          "path": "001.jpeg",
          "occupied":[]
      },
      {
          "id": 2,
          "title": "The Lyla",
          "nightlyfee": "$350",
          "propertytype": "Studio",
          "cleaningfee": 45,
          "description": "A secluded escape in the green mountains to relax and unwind.Rock climbin, kayaking, fishing, mountain biking, skiing, and snowboarding. Explore the waterfalls, flora and fauna",
          "amenities": "wifi, pool, fitness center, breakfast bar, multi-tier parking, laundry, club room",
          "servicefee": 40,
          "bedrooms": 2,
          "city": "San Antonio",
          "location": "958 Coit Rd",
          "restaurant": true,
          "click":false,
          "path": "002.jpeg"
      },
      {
          "id": 3,
          "title": "Victoria Residence",
          "nightlyfee": "$1500",
          "propertytype": "beach house",
          "cleaningfee": 120,
          "description": "Comfortable spot thats close to downtown with Minutes away from the United Arena, Wicker Park, Fulton Market, Capital Building, Rotating Tower and Asian Restaurants. ",
          "amenities": "wifi, pool, fitness center, breakfast bar, Garage, laundry, Burglar Alarm",
          "servicefee": 80,
          "bedrooms": 6,
          "city": "New Orleans",
          "location": "8000 Bonjour Blvd",
          "restaurant": false,
          "click":false,
          "path": "003.jpeg"
      },
      {
          "id": 4,
          "title": "Casa de Aloravita",
          "nightlyfee": "$700",
          "propertytype": "cottage",
          "cleaningfee": 0,
          "description": "This is the perfect place for a couple or for a family of 4 without breaking the bank with a large living room, a private bathroom, garage and a private entrance.",
          "amenities": "wifi, recreational, pool, Garage, laundry, Burglar Alarm, safety locker",
          "servicefee": 30,
          "bedrooms": 4,
          "city": "Miami",
          "location": "235 Gracias Avenue",
          "restaurant": false,
          "click":false,
          "path": "004.jpeg"
      },
      {
          "id": 5,
          "title": "Malati Nilayam",
          "nightlyfee": "$450",
          "propertytype": "studio",
          "cleaningfee": 50,
          "description": "Located in the heart of Deep Ellum and connected to Downtown, New Jersey. Enjoy brunch, trails or nice night of bar hopping with plenty of restaurants at your doorstep.",
          "amenities": "wifi, pool, Garage, laundry, safety locker",
          "servicefee": 120,
          "city": "New Jersey",
          "location": "1502 Cityline",
          "restaurant": true,
          "click":false,
          "path": "005.jpeg"
      },
      {
          "id": 6,
          "title": "Wilshire Inn",
          "nightlyfee": "$120",
          "propertytype": "bungalow",
          "cleaningfee": 15,
          "description": "ESCAPE to the privacy of a beautiful home with backyard garden and pool to relax and unwind! Lovely outdoor seating space, grilling station and covered lanai with heated pool.",
          "amenities": "wifi, pool, parking, laundry, complimentary breakfast",
          "servicefee": 10,
          "bedrooms": 1,
          "city": "Montreal",
          "location": "444 Wayward drive",
          "restaurant": true,
          "click":false,
          "path": "006.jpeg"
      }
  ]
});

const updateState = (data) => {
  if(data.index != -1){
    console.log(data)
      setState( state  => ({index:data.index.index, products:state.products,searchText:''}))
  }else if(data.searchText != ''){
    console.log(data)
      setState(state => ({index:-1,products:state.products,searchText:data.searchText}))
  }else {
      setState(state => ({index:-1,products:state.products,searchText:''}))
  }
}

console.log(state)
  return (
    <FilterableProductTable state={state}
    setState={ (data) => updateState(data)}/>);
}



export default Home;
