import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({title: '', content: ''});

  function changeNote(event) {
    const { name, value } = event.target;

    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick() {
    props.onAdd(note);
    setNote({title: '', content: ''});
  }

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault();
      }}>
        <input 
          name="title" 
          placeholder="Title" 
          value={note.title} 
          onChange={changeNote}
        />
        <textarea 
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          value={note.content} 
          onChange={changeNote}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;