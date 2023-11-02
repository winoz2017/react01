import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App =()=> {
  const [data, setData] = useState([]);

  const view = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setData(response.data);
      console.log(response.data)
    } catch(e) {
      console.log(e);
    }    
  };
  view()

  return (
      <>
          <h1>Users</h1>
          {}
          
      </>
  );
}

export default App;
