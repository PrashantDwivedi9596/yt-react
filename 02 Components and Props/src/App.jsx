import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'

async function getUsers(num) {
  let users = await fetch(`https://randomuser.me/api/?results=${num}`)
    .then((raw) => raw.json())
    .then((data) => data.results)
  console.log(users)
  return users
}
function App() {
  const [count, setCount] = useState(5)
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers(count).then((data) => setUsers(data))
  }, [count])
  return (
    <>
      <Nav></Nav>
      <div className="card-container">
        {/* <Card />
        <Card></Card> */}
        {users.map((user, idx) => (
          <Card
            key={idx}
            _name={user.name.first + user.name.last}
            _avatar={user.picture.medium}
            _desc={
              user.email +
              '\n' +
              user.location.country +
              ', ' +
              user.location.city +
              ', ' +
              user.location.state +
              '\n' +
              'Registered As a username  :- \n' +
              '\t' +
              user.login.username
            }
          />
        ))}
      </div>
    </>
  )
}

export default App
