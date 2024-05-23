import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { salaryData } from './data';

const LineGraph: React.FC = () => {
    const data = salaryData.map(({ year, totalJobs }) => ({ year, totalJobs }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="totalJobs" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineGraph;
