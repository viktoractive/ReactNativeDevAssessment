import {RouteProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text} from 'react-native';
import type {Note} from '../NotesScreen';
import styles from './styles';

type Props = {
  route: RouteProp<{NoteDetail: {note: Note}}>;
};

const NoteDetail: FC<Props> = ({route}) => {
  const {note} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.noteTitle}>Title: {note.title}</Text>
      <Text style={styles.noteContent}>Description: {note.description}</Text>
    </View>
  );
};

export default NoteDetail;
