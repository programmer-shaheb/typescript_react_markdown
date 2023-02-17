import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import EditNote from "./EditNote";
import NewNote from "./NewNote";
import Note from "./Note";
import NoteLayout from "./NoteLayout";
import NoteList from "./NoteList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NoteList />}/>
      <Route path="/new" element={<NewNote />}/>
      <Route path="/:id" element={<NoteLayout />}/>
      <Route index element={<Note />}/>
      <Route path="edit" element={<EditNote />}/>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  );
}

export default App;
