import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import Typography from '@material-ui/core/Typography';
const data = [
  { name: 'Mon', InProgress: 22, Active: 34 },
  { name: 'Tue', InProgress: 12, Active: 23 },
  { name: 'Wed', InProgress: 50, Active: 43 },
  { name: 'Thu', InProgress: 47, Active: 29 },
  { name: 'Fri', InProgress: 58, Active: 48 },
  { name: 'Sat', InProgress: 43, Active: 38 },
  { name: 'Sun', InProgress: 44, Active: 43 },
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <div>
        <Typography variant="h5"> Clients Report</Typography>
        <ResponsiveContainer width="99%" height={320}>
        
        <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="InProgress" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Active" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </ResponsiveContainer>
    </div>
  );
}

export default SimpleLineChart;