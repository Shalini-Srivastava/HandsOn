import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // Minimizing form_challenge2
  const [fullname,setFullName] = useState({
    fname: "",
    lname: "",
  });

  const eventh = (e) =>{
    // "e.target.value" is used to take value from input
    console.log(e.target.value);
    const value=e.target.value;
    const name=e.target.name;
    }
     setFullName = (preValue) =>{
    // "e.target.value" is used to take value from input
    console.log(preValue.target.value);
    if(name ==='fname'){
    return{
      fname:value,
      lname:preValue.lname
    };
  }
    }
    const onsubmit = (e) =>{ 
      e.preventDefault();
      alert("form submitted");
    
    }
  return (
    <div className="App">
    {/* on adding form tag data are sent to backend because this is the default behaviour of form tag if u don't
    want this use preventDefault (line 13)*/}
    {/* we can use onSubmit method of form tag also instead of using on button */}
    <form> 
      <header className="App-header">
      <h1>Hello {fullname.fname} {fullname.lname}</h1>
      <input type="text" placeholder='Enter your name' name='fname' onChange={eventh} value={fullname.fname}/><br></br>
      <input type="text" placeholder='Enter your lastname' name='lname' onChange={eventh} value={fullname.lname}/><br></br>
      <button onClick={onsubmit}>Click me</button>       
      </header>
      </form>
    </div>
  );
}
export default App;
