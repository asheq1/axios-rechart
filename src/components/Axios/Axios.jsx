import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner'

const Axios = () => {
    const [phones, setPhone] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
        .then(response => {
            const phoneData = response.data.data;
            const phoneWithData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1]) // Parsing price from slug
                };
                return obj;
            });
            setPhone(phoneWithData);
            setLoading(false)
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            {
                loading && <div className='mx-auto'>
                    <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                    />
                </div>
            }
            <h2>Phone Count: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Axios;
