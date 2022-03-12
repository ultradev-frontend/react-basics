import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor';
import Dropdown from './components/Dropdown';
import { useState } from "react";
import value from './Properties';

function App() {
  let val=value.text
  ;
  
  function changeHandler(e){ 
    setName(e.target.value);
}

function handleChange()
{
  setAddMsg(true);
}
  const [name, setName] = useState('test');
  const [addmsg, setAddMsg] = useState(false);
  const [selectValue, setSelectValue] = useState(['shashank','singh']);

  const options = [
    {value: 'value-1', text: 'text-1'},
    {value: 'value-2', text: 'text-2'},
    {value: 'value-3', text: 'text-3'}
];
  return (
    <div >

{ addmsg? <Editor text={name}  onChange={changeHandler}/>:null}


    <p>{name}</p>
    <button onClick={handleChange}>Sample</button>
    <Dropdown list={options}/>
    </div>
    
  );
}
export default App;
