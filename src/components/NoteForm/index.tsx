import React, {useState, useEffect, FC} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import type {Note} from '../../screens/NotesScreen';
import styles from './styles';

type Props = {
  onAddNote: (note: Pick<Note, 'description' | 'title'>) => void;
  onUpdateNote: (note: Note) => void;
  selectedNote: Note | null;
};

const NoteForm: FC<Props> = ({onAddNote, onUpdateNote, selectedNote}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setDescription(selectedNote.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [selectedNote]);

  const handleAddNote = () => {
    if (title && description) {
      if (selectedNote) {
        onUpdateNote({id: selectedNote.id, title, description});
      } else {
        onAddNote({title, description});
      }
      setTitle('');
      setDescription('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
        multiline
      />
      {error && (
        <Text style={styles.errorText}>
          Title and Description must not be empty
        </Text>
      )}
      <Button title={selectedNote ? 'Update' : 'Add'} onPress={handleAddNote} />
    </View>
  );
};

export default NoteForm;
