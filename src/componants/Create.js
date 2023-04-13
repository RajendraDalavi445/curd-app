import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const Create = () => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://641d063ab556e431a87a749d.mockapi.io/crud', {
            e_name: name,
            e_age: age,
            e_Email: email
        }).then(() => {
            navigate('/')
        }).catch((error) => {
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
                        <div className='text-center mb-4 heading'>Create Data</div>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Enter Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder='Name'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Enter Age</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    placeholder='Age'
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Enter Age</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;