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
              ' ' +
              user.login.username +
              'Random description for all the card so we can assume and get the full strech of the card how it will look when there is a lot of content there to have on a card so it becomes full and to check the scroll effect of each of the things as they are'
            }
          />
        ))}
      </div>
    </>
  )
}

export default App
