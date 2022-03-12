function Editor(props)
{
    return <div>
    <textarea value={props.text}
          onChange={props.onChange} rows="20" cols="150" spellCheck='false' placeholder={props.text}> </textarea>

    </div>
}
export default Editor;