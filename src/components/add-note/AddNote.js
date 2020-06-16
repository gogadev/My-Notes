import React, { useState, useContext, useRef, useEffect } from "react";
import NotesContext from "../../context/Context";

import "./add-note.style.css";

const AddNote = () => {
  const { state, dispatch } = useContext(NotesContext);
  const [value, setValue] = useState("");

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("Cannot Add A Blank Note");
    } else {
      dispatch({ type: "ADD_NOTE", payload: value });
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="add-note">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={ref} onChange={handleChange} value={value} 
          placeholder="e.g. Buy Milk"
        />
        <button className="btn" type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
