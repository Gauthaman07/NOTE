import { useState } from "react";



function CreateNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote({
            ...note,
            [name]: value
        })

    }

    const submitNote = (e) => {
        e.preventDefault()
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
    }

    return (
        <div >
            <h1>NOTEPAD</h1>
            <form>
                <input name="title" value={note.title} onChange={handleChange} placeholder="Enter title here"></input>
                <textarea name="content" value={note.content} onChange={handleChange} placeholder="Enter content here"></textarea>
                <button onClick={submitNote}>ADD</button>
            </form>
        </div>
    )
}





export default CreateNote;