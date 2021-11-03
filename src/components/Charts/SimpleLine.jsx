import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const colors = ['#8884d8', '#82ca9d', '#ff7300'];

const SimpleLineChart = ({ data, title, dataKeys }) => {
  return (
    <>
      <div className="h5 text-center mb-4">{title}</div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((key, idx) => (
            <Line type="monotone" dataKey={key} stroke={colors[idx]} key={key} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SimpleLineChart;
