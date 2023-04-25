import React, { useState } from 'react';
import './index.css';
import axios from 'axios';
import './Server/server.js'

function FoodForm() {
    const [product, setProduct] = useState("");
    const [description, setDescription] = useState("");
    const [cost, setCost] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios.post('/submit-form', {
        product, description, cost
      })
      .then(() => {
        setProduct('');
        setDescription('');
        setCost('');
      })
      .catch(error => {
        console.error(error);
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Produkta nosaukums</label><br></br>
        <input type="text" value={product} id="product" name="product" onChange={(event) => setProduct(event.target.value)}></input><br></br>
        <label>Produkta apraksts</label><br></br>
        <input type="text"  value={description} id="description" name="description" onChange={(event) => setDescription(event.target.value)}></input><br></br>
        <label>Produkta cena</label><br></br>
        <input type="text"  value={cost} id="cost" name="cost" onChange={(event) => setCost(event.target.value)}></input><br></br>
        <input type="submit" name="Submit"></input>
      </form>
    );
  };

  export default FoodForm;