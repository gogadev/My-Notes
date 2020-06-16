import React from "react";

const NotesContext = React.createContext({
  currentNote: null,
  notes: [
    { id: 1, text: "Order Pizza" },
    { id: 2, text: "Clean Kitchen" },
  ],
});

export default NotesContext;
