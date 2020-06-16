import React, { useState, useEffect, useContext, useRef } from "react";
import NotesContext from "../../context/Context";

import editImg from "../../assets/edit.png"

import "./edit-note.style.css"

const EditNote = () => {
  const { state, dispatch } = useContext(NotesContext);
  const [value, setValue] = useState(state.currentNote.text);

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("Cannot Edit A Blank Note");
    } else {
      dispatch({ type: "EDIT_NOTE", payload: value });
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="edit-note">
    <img className="edit-img" src={editImg} alt=""/>
      <form className="form edit-form" onSubmit={handleSubmit}>
        <textarea
          ref={ref}
          onChange={handleChange}
          value={value}
          name=""
          id=""
          cols="80"
          rows="10"
        />
        <button className="btn" type="submit">
          Edit Note
        </button>
      </form>
    </div>
  );
};

export default EditNote;
