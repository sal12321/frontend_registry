import { useState} from 'react'
// import axios from "axios"

import Register from "./component/Register"
import Update from './component/update';
import ViewAll  from './component/ViewAll';

import './App.css'

function App() {
  const [activePage, setActivePage] = useState("register");
  var Users = null;

  // useEffect(( ()=>{
  //   console.log("in useEffect")
  //   axios.get("http://localhost:8080/api/message")
  //   .then((res) => setMessage(res.data.message))
  //   .catch((err) => {
  //     console.error(err);
  //     setMessage(err)
  //   })
  // }), [])

  const handleClick = async (e) =>{

    setActivePage(e.target.name);



  }
  





  return (
    <>
    <div className="buttons">
    <button name='register' onClick={handleClick} >Register</button>
    <button name='update' onClick={handleClick}>Update</button>
    {/* <button name='delete' onClick={handleClick}>Delete</button> */}
    <button name='view all' onClick={handleClick}>View All </button>
    </div>




    {activePage==="register" ?  <Register /> : ""}
    {activePage==="update" ?  <Update /> : ""}
    {activePage==="view all" ?  <ViewAll  /> : ""}
    {/* {activePage==="register" ?  <Register /> : ""} */}


    <div className="board">
      <h1>This app is made on react vite and deployed in react vite, CICD on Github Actions</h1>
    </div>

    </>
  )



  
}

export default App
