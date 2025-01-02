import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [stocks, setStocks] = useState([]);
  const [form, setForm] = useState({ stockName: '', ticker: '', quantity: 1, buyPrice: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/stocks');
      setStocks(response.data);
    } catch (error) {
      console.error('Error fetching stocks:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:8080/api/stocks/${editingId}`, form);
      } else {
        await axios.post('http://localhost:8080/api/stocks', form);
      }
      setForm({ stockName: '', ticker: '', quantity: 1, buyPrice: '' });
      setEditingId(null);
      fetchStocks();
    } catch (error) {
      console.error('Error submitting stock:', error);
    }
  };

  const handleEdit = (stock) => {
    setForm(stock);
    setEditingId(stock.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/stocks/${id}`);
      fetchStocks();
    } catch (error) {
      console.error('Error deleting stock:', error);
    }
  };

  return (
    <div className="App">
      <h1>Portfolio Tracker</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Stock Name"
          value={form.stockName}
          onChange={(e) => setForm({ ...form, stockName: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Ticker"
          value={form.ticker}
          onChange={(e) => setForm({ ...form, ticker: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Buy Price"
          value={form.buyPrice}
          onChange={(e) => setForm({ ...form, buyPrice: e.target.value })}
          required
        />
        <button type="submit">{editingId ? 'Update Stock' : 'Add Stock'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.stockName}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>{stock.buyPrice}</td>
              <td>
                <button onClick={() => handleEdit(stock)}>Edit</button>
                <button onClick={() => handleDelete(stock.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;