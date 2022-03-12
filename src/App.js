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

const listChangeHandlere = (event) => {
  setListValue(event.target.value)
  console.log(event.target.value)
}


function handleChange()
{
  if(addmsg)
  {
  setAddMsg(false);
setButtonMsg('Show Form');
  }
  else{
    setAddMsg(true);
    setButtonMsg('Hide Form');
  }
}
const options = [
  {value: 'Honda', text: 'CRV'},
  {value: 'Toyata', text: 'RAV4'},
  {value: 'BMW', text: 'X3'}
];
const [name, setName] = useState('This is place holder value ');
const [addmsg, setAddMsg] = useState(false);
const [listValue, setListValue] = useState(options[0].value);
const [buttonMsg, setButtonMsg] = useState('show form');
  return (
    <div className='container' >
<h4>REACT BASICS(props|state|form)</h4>

{ addmsg? <Editor text={name}  onChange={changeHandler}/>:null}

<h5>Car list</h5>
    <Dropdown list={options} onChange={listChangeHandlere} value={listValue}/>
    <p>Test Area Value This is at controller-  <b> {name}</b></p>

    <p>Select Value This is at controller- <b> {listValue}</b></p>
    <button onClick={handleChange}>{buttonMsg}</button>
    </div>
    
  );
}



export default App;
