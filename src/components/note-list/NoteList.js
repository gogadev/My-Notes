import React, { useContext } from "react";
import NotesContext from "../../context/Context";

import Note from "../note/Note";

import img from "../../assets/add.jpg";

import "./note-list.style.css";

const NoteList = () => {
  const { state, dispatch } = useContext(NotesContext);

  return (
    <div className="note-list">
      <img className="img" src={img} alt="" />
      {state.notes.length > 0 ? (
        state.notes.map((note, i) => {
          return <Note key={i} note={note} />;
        })
      ) : (
        <div className="no-notes">No Notes Added Yet</div>
      )}
      {state.notes.length > 0 ? (
        <button
          className="btn"
          onClick={() => dispatch({ type: "DELETE_NOTES" })}
        >
          Delete Notes
        </button>
      ) : null}
    </div>
  );
};

export default NoteList;
