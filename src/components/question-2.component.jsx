import "../App.css";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [itemFilters, setItemFilters] = useState([]);

  function handleKeyUp(event) {
    let { value } = event.target;
    value = value.toLowerCase();

    if (value === null || value === undefined || value === '') {
      setItemFilters(items);
    } else {
      setItemFilters(items.filter(item => item.toLowerCase().includes(value)));
    }
  }

  const fetchAPIs = async () => {
    axios.get('https://api.publicapis.org/categories')
    .then(res => {
      setItems(res.data);
      setItemFilters(res.data);
    })
    .catch(error => {
      setItems([])
    })
  }
  
  useEffect(() => {
    fetchAPIs();
  }, []);
  
  return (
    <div className="container">
      <div className="search-input">
        <label>Search: </label>
        <input type="text" onKeyUp={handleKeyUp} />
      </div>
      <div className='show-list'>
        <label>List: </label>
        <ul>
          { itemFilters.map(item => 
              <li>{item}</li>
            )
          }
        </ul>
      </div>
    </div>
  );
}
