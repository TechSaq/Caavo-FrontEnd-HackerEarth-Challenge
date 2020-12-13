import React, { useState, useEffect } from 'react';
import CreateGroup from './components/CreateGroup/CreateGroup';
import CreateGroupDetails from './components/CreateGroupDetails';

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const get = async () => {
      let data = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json', {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      data = await data.json();

      setData(data)
    }

    get()
  }, []);

  return (
    <div style={{
      maxWidth: '60%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '2rem auto'
    }}>
      <CreateGroup data={data}/>
    </div>
  );
}

export default App;
