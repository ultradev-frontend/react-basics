
import ReactDOM from 'react-dom';
import { useState, } from "react";
import value from '../Properties';


function Editor(props)
{
    return <div>
    <textarea value={props.text}
          onChange={props.onChange} rows="20" cols="150"> </textarea>

    </div>
}
export default Editor;