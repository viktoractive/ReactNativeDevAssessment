import React, {FC} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Note} from '../../screens/NotesScreen';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import ContextMenu from '../ContextMenu';
import styles from './styles';

type Props = {
  notes: Note[];
  onEditNote: (id: number) => void;
  onDeleteNote: (id: number) => void;
};

type RootStackParamList = {
  NoteDetail: {note: Note};
};

const NotesList: FC<Props> = ({notes, onEditNote, onDeleteNote}) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const navigateToNoteDetail = (note: Note) => {
    navigation.navigate('NoteDetail', {note});
  };

  if (notes.length <= 0) {
    return <Text style={styles.listEmptyTest}>Notes is empty!</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigateToNoteDetail(item)}
            key={item.id}>
            <View style={styles.noteContainer}>
              <View>
                <Text style={styles.noteTitle}>Title: {item.title}</Text>
                <Text style={styles.noteContent}>
                  Description: {item.description}
                </Text>
              </View>
              <ContextMenu
                handleDelete={() => onDeleteNote(item.id)}
                handleEdit={() => onEditNote(item.id)}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NotesList;
