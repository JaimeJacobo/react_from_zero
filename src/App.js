import './App.css';
import NewComponent from './NewComponent.js';
import UserStory from './UserStory';
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get('https://randomuser.me/api/?results=10')
    .then((result)=>{
      setUsers(result.data.results)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  const students = [
    {
      name: 'Jaime',
      alive: true
    },
    {
      name: 'Natalie',
      alive: false
    },
    {
      name: 'Alex',
      alive: false
    },
    {
      name: 'G',
      alive: true
    },
    {
      name: 'Pallavi',
      alive: false
    }
  ]

  return (
    <div className="App">
      <h1>Hello React App!</h1>
      {/* {students.map((student)=><NewComponent name={student.name} alive={student.alive}/>)} */}
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {users.map((user)=>{
          return(
            <UserStory 
              firstName={user.name.first} 
              lastName={user.name.last} 
              image={user.picture.medium}
              gender={user.gender}
            />
          )
        })}        
      </div>

    </div>
  );
}

export default App;

// component
// props
// state
// hooks

//JSX