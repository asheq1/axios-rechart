import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from 'recharts';

const data = [
    { name: 'Alice', marks: 78 },
    { name: 'Bob', marks: 85 },
    { name: 'Charlie', marks: 92 },
    { name: 'David', marks: 88 },
    { name: 'Eve', marks: 76 },
    { name: 'Frank', marks: 90 },
    { name: 'Grace', marks: 83 },
    { name: 'Henry', marks: 79 },
    { name: 'Ivy', marks: 91 },
    { name: 'Jack', marks: 87 }
  ];

const LineChart = () => {  
      
    return (
        <div>
            <ResponsiveContainer width="50%" height={400}>
                <LChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{r: 8}} />
                </LChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChart;