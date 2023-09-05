import React, {useState} from 'react';
import {View} from 'react-native';
import NoteForm from '../components/NoteForm';
import NotesList from '../components/NotesList';

export type Note = {
  id: number;
  title: string;
  description: string;
};

const NotesScreen = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const addNote = (note: Pick<Note, 'description' | 'title'>) => {
    setNotes([...notes, {...note, id: notes.length}]);
  };

  const editNote = (id: number) => {
    const noteToEdit = notes.find(note => note.id === id);
    if (noteToEdit) {
      setSelectedNote(noteToEdit);
    }
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const onUpdateNote = (updatedNote: Note) => {
    if (selectedNote) {
      const noteIndex = notes.findIndex(note => note.id === updatedNote.id);

      if (noteIndex !== -1) {
        const updatedNotes = [...notes];
        updatedNotes[noteIndex] = updatedNote;

        setNotes(updatedNotes);
        setSelectedNote(null);
      }
    }
  };

  return (
    <View>
      <NoteForm
        onAddNote={addNote}
        onUpdateNote={onUpdateNote}
        selectedNote={selectedNote}
      />
      <NotesList
        notes={notes}
        onEditNote={editNote}
        onDeleteNote={deleteNote}
      />
    </View>
  );
};

export default NotesScreen;
