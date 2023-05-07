import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const data=[
  {
    name: 'India',
    value: 'IND',
    cities: ['Delhi','Mumbai']
  },
  {
    name: 'Pakistan',
    value: 'PAK',
    cities: ['Lahore','Karachi']
  },
  {
    name: 'Bangladesh',
    value: 'BNG',
    cities: ['Dhaka','Chittagong']
  }
];

// let setCountry=()=>{
//   let country=document.getElementsByClassName('country')[0].value;
//   return (
//     <select >
//       {
//         data[country].cities.map((element) => {   
//           return (<option >{element}</option>);

//         })
//       }
//     </select>
//   );
// };

function App() {
  let [country,setCountry]=useState(0);
  
  return (
    <div>
    <select  id='country' onChange={(ele)=>{
      console.log(data[ele.target.value].cities);
      setCountry(ele.target.value);

      }} >
      {
        data.map((element,index) => {   
          return (<option value={index}>{element.name}</option>);

        })
      }
    </select>

    <select >
      {
        data[country].cities.map((city,index)=>{return (<option value={index}>{city}</option>);})

      }
    </select>
    </div>
  );
}

export default App;
