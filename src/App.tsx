import React from 'react';
import logo from './logo.svg';
//import './App.css';
import './item.css';
import {Pricing} from './component/pricing'

function Container(props :any) {
  return    <div className="item">
      <div className="item-icon"><i className={props.icon}></i></div>
      <div className="item-right">
          <div className="item-bold-text">{props.number}</div>
          <div className="item-text">{props.text}</div>
      </div>
      
  </div>
 
}



// function Hello(props : any) {
//   console.log(props);
//   console.log(props.tempArray);
//   console.log(props);
//   return <h1 style = {props.style} >Hello, {props.name}</h1>
// }

function App() {
  let list = [{
    icon: "fa fa-microphone",
    number: "36+",
    text: "Unique Session"
  },
  {
    icon: "fa fa-user",
    number: "12",
    text: "Amazing Speaker"
  },
  {
    icon: "fa fa-coffee",
    number: "45",
    text: "Food Stalls"
  },
  {
    icon: "fa fa-book",
    number: "2350+",
    text: "Books Available"
  }
 ]
  return (
    <div>
          <div id="container">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.

        </p> */}
        {/* <Hello style={{color: 'red'}} name ="Nash Teach" tempArray={[1,2,3]} tempFnc={() => { alert('Heloo')}}></Hello> */}
        {list.map((item)=> (
          <Container icon={item.icon} number = {item.number} text= {item.text}></Container>
        ))}
      
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
         
         </div>
         <div>
           <Pricing></Pricing>
         </div>
    </div>

   
  );
}

export default App;
