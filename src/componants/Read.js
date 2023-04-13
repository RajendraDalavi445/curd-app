import React,{useEffect, useState} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Read = () => {
  const [apiData, setApiData] = useState([]);

  const getData = () =>{
    axios.get('https://641d063ab556e431a87a749d.mockapi.io/crud')
    .then((response)=>{
       setApiData(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

 useEffect(()=>{
  getData();
 },[]);

 const handleDelete = (id) =>{
   axios.delete(`https://641d063ab556e431a87a749d.mockapi.io/crud/${id}`)
   .then(()=>{
      getData();
   }).catch((error)=>{
     console.log(error)
   })
 }

 const setDataToStorage = (id,name,age,email) =>{
   localStorage.setItem('id',id);
   localStorage.setItem('name',name);
   localStorage.setItem('age',age);
   localStorage.setItem('email',email);
 }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <div>
            <Link to="/create"><button className='btn btn-primary my-2'>Create New Data</button></Link>
          </div>
            <table class="table table-striped table-bordered text-center table-hover">
              <thead>
                <tr className='bg-warning'>
                  <th scope="col">ID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">AGE</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">EDIT</th>
                  <th scope="col">DELETE</th>
                </tr>
              </thead>
              <tbody>
                {
                 
                 apiData.map((curElm)=>{
                   return(
                    <>
                    <tr key={curElm.id}>
                      <td>{curElm.id}</td>
                      <td>{curElm.e_name}</td>
                      <td>{curElm.e_age}</td>
                      <td>{curElm.e_Email}</td>
                      <td>
                        <Link to='/edit'>
                          <button className='btn btn-primary' onClick={()=>setDataToStorage(curElm.id, curElm.e_name, curElm.e_age, curElm.e_Email)}>Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button className='btn btn-danger' onClick={()=>{if(window.confirm('Are you Sure To Delete Data ??' )) {handleDelete(curElm.id)} }}>Delete</button>
                      </td>
                  </tr>
                    </>
                   )
                 })

                }
               
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}

export default Read;