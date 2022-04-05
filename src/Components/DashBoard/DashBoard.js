import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Area, AreaChart, Legend, Bar, BarChart, Pie, PieChart, Label } from 'recharts';

const DashBoard = () => {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center font-semibold text-green-900 my-8'>DashBoard</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-8'>

                <div>
                    <h1 className='text-4xl text-red-700 font-medium'>Month Vs Sell</h1>
                    <LineChart width={500} height={300} data={profile} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                <div>
                    <h1 className='text-4xl text-red-700 font-medium'>Investment and Revenue Vs month</h1>
                    <AreaChart width={500} height={300} data={profile}
                        margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
                <div>
                    <h1 className='text-4xl text-red-700 font-medium'>Investment Vs Revenue</h1>
                    <div>
                        <BarChart
                            width={500}
                            height={300}
                            data={profile}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}>

                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="revenue" fill="#8884d8" />
                            <Bar dataKey="investment" fill="#82ca9d" />
                        </BarChart>


                    </div>
                </div>                
                <div>
                <h1 className='text-4xl text-red-700 font-medium'>Investment on a year</h1>
                <div>
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="investment"
                            startAngle={360}
                            endAngle={0}
                            data={profile}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                            
                        />
                        <Tooltip />
                    </PieChart>
                </div>
                </div>
            </div>


        </div>
    );
};

export default DashBoard;