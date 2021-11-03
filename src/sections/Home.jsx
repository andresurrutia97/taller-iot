import { useEffect, useState } from 'react';

import Card from '../components/Card';
import SimpleLineChart from '../components/Charts/SimpleLine';

import { getData } from '../api/iotServer';
import { mockedData } from '../lib/sampleData';

const Home = () => {
  const [data, seData] = useState(null);

  const fetchData = async () => {
    const data = await getData();
    seData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const userList =
    data &&
    data.map(({ id, name, username, email }) => (
      <div className="col-12 col-sm-6 col-xl-3 mb-3" key={id}>
        <Card name={name} username={username} email={email} />
      </div>
    ));

  return (
    <div className="pt-5">
      <div className="h2 text-center my-5">UAO IoT Dashboard</div>
      <div className="row mb-5">{userList}</div>
      <SimpleLineChart data={mockedData} title="IoT Historic (2021)" dataKeys={['pv', 'uv']} />
    </div>
  );
};

export default Home;
