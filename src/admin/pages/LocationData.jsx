import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import '../Admin.css';
import BreadCrumb from '../components/BreadCrumb';
import AddData from '../components/AddData';

const LocationData = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [name, setName] = useState('');
    const [parantLocationId, setParantLocationId] = useState('');
    const [parantLocations, setParantLocations] = useState([]);

    const getLocation = async (id) => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}adminLocation/` + id)
        result = await result.json();

        if (result.status) {
            setName(result.location.name);
            setParantLocationId(result.location.parantLocationId);
            setParantLocations(result.parantLocations);
        }
    }

    const getParantLocations = async () => {
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}adminParantLocations`);
        result = await result.json();
        if (result.status) {
            setParantLocations(result.parantLocations);
        }
    }

    useEffect(() => {
        if (params._id) {
            getLocation(params._id);
        } else {
            getParantLocations();
        }
    }, []);

    const submitHandler = async (event) => {
        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);
        if (params._id) {
            data.append("id", params._id);
        }

        const url = `${process.env.REACT_APP_BASE_URL}adminSaveLocation`;

        let result = await fetch(
            url,
            {
                method: "POST",
                body: data,
            }
        );

        result = await result.json();
        if (result.status) {
            navigate('/admin/location');
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
                        <BreadCrumb pageName="Add Location" link="/admin/location" btnName="Manage Location" />
                        <form onSubmit={submitHandler} className='add_data'>
                            <div className='row'>
                                <div className='col-12'>
                                    <AddData changeFunction={setName} Label="Location Name" inputType="text" Placeholder="Name" value={name} name="name" />
                                </div>
                                <div className='col-12'>
                                    <div className='add_box'>
                                        <div className='Label-box'>
                                            <span className='Lavel'>Parant Location :</span>
                                        </div>
                                        <div className='Input-box'>
                                            <select name='parantLocationId'>
                                                <option value="">Select Parant Location</option>
                                                {
                                                    parantLocations
                                                        ?
                                                        parantLocations.map((value, index) =>
                                                            (value._id === parantLocationId)
                                                                ?
                                                                <option
                                                                    selected
                                                                    key={index}
                                                                    value={value._id}
                                                                >
                                                                    {value.name}
                                                                </option>
                                                                :
                                                                <option
                                                                    key={index}
                                                                    value={value._id}
                                                                >
                                                                    {value.name}
                                                                </option>
                                                        )
                                                        :
                                                        null

                                                }
                                            </select>
                                        </div>
                                    </div>
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

export default LocationData
