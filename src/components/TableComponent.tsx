import React,{useState} from 'react';
import './TableComponent.css';
//import { Link} from "react-router-dom";

type TableProps={
   data:{
    id:number
    image:string
    firstname:string
    lastname:string
    gender:string
    birthday:number
    phone:number
    address:{
      buildingNumber:number
      city:string
      country:string
      street:string
      streetName:string
      zipcode:number
    }
   }[] 
}


const TableComponent = (props:TableProps) => {

  const [selectedRow, setSelectedRow] = useState({});


  const handlerowClick=(el: React.SetStateAction<{}>)=>{
    setSelectedRow(el);
    console.log(el);
    
  }

  return (
    <>
     
       {props.data.map((el)=>(
              <tr key={el.id} id='tr' className='rowmain' onClick={()=>handlerowClick(el)}>
                  <>
                    

                  {(selectedRow === el) ? (
                    <td colSpan={7} height='200px' className='mainfont'>
                      <h2> Address:--- {el.address.street+', '+el.address.streetName+', '+el.address.city+', ' +el.address.zipcode+', '+el.address.country}</h2>
                    </td>
                  ):<>
                    <td>{el.id}</td>
                    <td><img className='imges' src={el.image} alt={el.firstname[0]+el.lastname[0]} /></td>
                    <td>{el.firstname}</td>
                    <td>{el.lastname}</td>
                    <td>{el.gender}</td>
                    <td>{new Date().getFullYear()-new Date(el.birthday).getFullYear()}</td>
                    <td>{el.phone}</td>
                    
                  </>}

                    
                  </>  
            </tr>
          ))}

       
      
    </>
  )
}

export default TableComponent;
