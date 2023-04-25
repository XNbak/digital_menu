import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import './Server/server.js'

function MenuTable() {
    const [data, setData] = useState([]);
    useEffect(() => {
      async function fetch() {
        const formfielddata = await axios.get('/api/data');
        setData(formfielddata.data);
      }
      fetch();
    }, []);
    return (
      <table>
        <thead>
          <tr>
            <th>Meal name</th>
            <th>Meal description</th>
            <th>Price</th>
          </tr>
        </thead>
        <body>
          {data.map(row => (
            <tr key={row._id}>
              <td>{row.id}</td>
              <td>{row.product}</td>
              <td>{row.description}</td>
              <td>{row.cost}</td>
            </tr>
          ))}
        </body>
      </table>
    );
  }
  
  export default MenuTable;
  