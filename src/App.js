import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import './Card.css'
import Error from './Error';

function App() {
const [users, setUsers] = useState([]);
const [query , Setquery] = useState('');

  useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=1').then(res=>{
      setUsers(res.data.data);
    }).catch(err=>{
      console.log(err);
    })
}, []);

  const filterChange = (e)=>{
    Setquery(e.target.value);
  }

  const filteredList = users.filter(user=>{
    return user.first_name.toLowerCase().includes(query.toLowerCase());
  })

  return (
    <>
    <div className='input'>
       <input placeholder='Type name to search' onChange={filterChange} type="text" value={query}></input><br></br>
    </div>
    {(filteredList.length == 0)? <Error/> :filteredList.map(user=>{
      return <Card ID={user.id} NAME={user.first_name} IMG={user.avatar}></Card>
    })}
    </>
  );
}

export default App;
