import React,{useState,useEffect} from 'react';
import './App.css';

import axios from 'axios';
import TableComponent from './components/TableComponent';




function App() {
  const [data,setData]=useState([]);
  const [count,setCount]=useState('');
  const [sortBy, setSortBy]=useState<string|null>(null);
  const [sortOrder, setSortOrder] = useState('asc');
  
  

 useEffect(()=>{
  axios.get(`https://fakerapi.it/api/v1/persons?_quantity=${count}`).then((res)=>(setData(res.data.data)));
 },[count]);



const handleChange=(event: { target: { value: React.SetStateAction<string>; }; })=>{
  setCount(event.target.value);
}







let sortedData = [...data];
const sortData = (kota:string) => {
 
  if (sortBy === kota) {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  } else {
    setSortBy(kota);
    setSortOrder('asc');
  }
  sortedData.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[kota] > b[kota] ? 1 : -1;
    } else {
      return a[kota] < b[kota] ? 1 : -1;
    }
  });
  setData(sortedData);
};





  return (
    <div className="App">
     <table>
         <thead>
           <tr>
            <th colSpan={6}>Number of Rows</th>
            <th>
              <select onChange={handleChange} >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select>
            </th>
          </tr>
          <tr className='secondHead'>
            <th>Id
             <button onClick={()=>sortData('id')}>sort</button>       
            </th>
            <th>Avatar</th>
            <th>First Name
             <button onClick={()=>sortData('firstname')}>sort</button>
            </th>
            <th>Last Name
             <button onClick={()=>sortData('lastname')}>sort</button>
            </th>
            <th>Gender
             <button onClick={()=>sortData('gender')}>sort</button>
            </th>
            <th>Age
             <button onClick={()=>sortData('age')}>sort</button>
            </th>
            <th>Contact</th>
          </tr>
         </thead>
         <tbody>
            <TableComponent data={data}   />
         </tbody>
     </table>
    </div>
  );
}

export default App;



