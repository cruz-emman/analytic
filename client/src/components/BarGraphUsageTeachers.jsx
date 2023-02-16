import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const BarGraphUsageTeachers = ({data}) => {
  
  const getFillColor = (coursecount) => {
    if (coursecount < 100) {
      return '#82ca9d';
    }
    if (coursecount >= 100 && coursecount < 200) {
      return '#8884d8';
    }
    return '#ffc658';
  };

   return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#4169e1" />
    </BarChart>
  </ResponsiveContainer>
    );
}

export default BarGraphUsageTeachers