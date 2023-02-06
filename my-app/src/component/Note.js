

function Note(props){
    const handleClick = ()=>{
        props.onDelete(props.id)
    }

    return(
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}

export default Note;