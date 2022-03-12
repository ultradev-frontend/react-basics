function Dropdown(props)
{
/***
 * list of value|text
 *  start value=listValue
 * 
 */


    return <div>
<select value={props.listValue}  onChange={props.onChange}>
  {props.list.map(item => {
      return (<option key={item.value} value={item.value}>{item.text}</option>);
  })}
</select>
    </div>
}
export default Dropdown;