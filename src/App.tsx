import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import EditNote from "./EditNote";
import NewNote from "./NewNote";
import Note from "./Note";
import NoteLayout from "./NoteLayout";
import NoteList from "./NoteList";


export type Note = {
  id: string
} & NoteData

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id" element={<NoteLayout />}>
          <Route index element={<Note />} />
          <Route path="edit" element={<EditNote />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
