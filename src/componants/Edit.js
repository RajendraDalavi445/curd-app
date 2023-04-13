import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    
    const navigate = useNavigate();

    useEffect(()=>{
      setId(localStorage.getItem('id'));
      setName(localStorage.getItem('name'));
      setAge(localStorage.getItem('age'));
      setEmail(localStorage.getItem('email'));
    },[]);

    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put(`https://641d063ab556e431a87a749d.mockapi.io/crud/${id}`,{
            e_name:name,
            e_age:age,
            e_Email:email,
        }).then(()=>{
            navigate('/')
        }).catch((error)=>{
            console.log(error)
        });
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 p-5 shadow-lg m-auto mt-5 round bg-danger">
                        <div>
                            <Link to="/"><button className='btn btn-primary my-2'>Read Data</button></Link>
                        </div>
                        <div className='text-center mb-4 heading'>Update Data</div>
                        <form onSubmit={handleUpdate}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Enter Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder='Name'
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Enter Age</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    placeholder='Age'
                                    value={age}
                                    onChange={(e)=>setAge(e.target.value)}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Enter Age</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <button type="Update" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit;