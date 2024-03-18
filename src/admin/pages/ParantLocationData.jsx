import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';

const ParantLocationData = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [name, setName] = useState('');

    const getParantLocation = async (id) => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}admin/parantLocation/` + id)
        result = await result.json();

        if (result.status) {
            setName(result.parantLocation.name);
        }
    }

    useEffect(() => {
        if (params._id) {
            getParantLocation(params._id);
        }
    }, []);

    const submitHandler = async (event) => {
        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);
        // const data = Object.fromEntries(formData.entries());

        if (params._id) {
            data.append("id", params._id);
        }

        const url = `${process.env.REACT_APP_BASE_URL}admin/saveParantLocation`;

        let result = await fetch(
            url,
            {
                method: "POST",
                body: data,
            }
        );

        result = await result.json();
        if (result.status) {
            navigate('/admin/parantLocation');
        }
    }
    return (
        <section className='admin_container'>
            <Nav />
            <div className='sidebar_with_content'>
                <div className='sidebar_box'>
                    <Sidebar />
                </div>
                <div className='content_box'>
                    <div className='content_container'>
                        <BreadCrumb pageName="Add Parant Location" link="/admin/parantLocation" btnName="Manage Parant Locations" />
                        <form onSubmit={submitHandler} className='add_data'>
                            <div className='row'>
                                <div className='col-12'>
                                    <AddData changeFunction={setName} Label="Parant Location" inputType="text" Placeholder="Name" value={name} name="name" />
                                </div>
                                <div className='col-12'>
                                    <div className='row justify-content-end'>
                                        <button className='btn btn-primary mt-2 float-right w-fit col-auto mx-2'>Save Data</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ParantLocationData
