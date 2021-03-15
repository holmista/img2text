import React, {useState} from 'react'
function App() {
  const[name, setname] = useState('')
  const[password, setpassword] = useState('')
  const changename = (event)=> {
    setname(event.target.value)
    console.log(name)
  }
  const changepassword = (event)=> {
    setpassword(event.target.value)
    console.log(password)
  }
  var data = {name:name, password:password}
  const options = {
    method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(data)
  }
  const signup = ()=>{
    fetch('http://localhost:4000/signup', options)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  return (
    <div className="App">
      <div>enter your name</div>
      <input type = 'text' onChange = {changename}></input>
      <div>enter your password</div>
      <input type = 'text' onChange = {changepassword}></input>
      <button onClick ={signup}>sign up</button>
    </div>
  );
}

export default App;
