import React, { useContext } from "react";
import NotesContext from "../../context/Context";

import "./note.style.css";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  return (
    <div className="note">
      <h3 className="text">{note.text}</h3>
      <div className="btns">
        <button
          className="btn edit-btn"
          onClick={() => dispatch({ type: "SET_CURRENT_NOTE", payload: note })}
        >
          Edit
        </button>
        <button
          className="btn delete-btn"
          onClick={() => dispatch({ type: "DELETE_NOTE", payload: note.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
