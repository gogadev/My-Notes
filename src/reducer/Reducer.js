import { uuid } from "uuidv4";

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_NOTE":
      const newNote = {
        id: uuid(),
        text: action.payload,
      };

      const addedNotes = [...state.notes, newNote];

      return { ...state, notes: addedNotes };
    case "SET_CURRENT_NOTE":
      return { ...state, currentNote: action.payload };
    case "DELETE_NOTE":
      const deletedNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      return {
        ...state,
        notes: deletedNotes,
      };
    case "EDIT_NOTE":
      const updatedNote = {
        ...state.currentNote,
        text: action.payload,
      };

      const updatedNotesIndex = state.notes.findIndex(
        (note) => note.id === state.currentNote.id
      );

      const updatedNotes = [
        ...state.notes.slice(0, updatedNotesIndex),
        updatedNote,
        ...state.notes.slice(updatedNotesIndex + 1),
      ];

      return {
        currentNote: null,
        notes: updatedNotes,
      };
    case "DELETE_NOTES":
      return {
        ...state,
        notes: [],
      };

    default:
      return state;
  }
}
