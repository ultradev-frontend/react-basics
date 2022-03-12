
import ReactDOM from 'react-dom';
import { useState} from "react";
import value from '../Properties';


function Dropdown(props)
{
    const [myCar, setMyCar] = useState("value-1");
  const handleChange = (event) => {
    setMyCar(event.target.value)
    console.log(event.target.value)
  }

    

    return <div>

<select value={myCar} onChange={handleChange}>
  {props.list.map(item => {
      return (<option key={item.value} value={item.value}>{item.text}</option>);
  })}
</select>
    </div>
}
export default Dropdown;