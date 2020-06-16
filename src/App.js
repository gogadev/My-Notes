import React, { useContext, useReducer } from "react";

import Header from "./components/header/Header";
import AddNote from "./components/add-note/AddNote";
import NoteList from "./components/note-list/NoteList";
import EditNote from "./components/edit-note/EditNote";

import NotesContext from "./context/Context";
import notesReducer from "./reducer/Reducer";

import "./App.css";

const App = () => {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      <Header />
      {state.currentNote === null ? (
        <React.Fragment>
          <AddNote />
          <NoteList />
        </React.Fragment>
      ) : (
        <EditNote />
      )}
    </NotesContext.Provider>
  );
};

export default App;
