import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import NotesScreen from '../../screens/NotesScreen';
import NoteDetail from '../../screens/NoteDetail';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes">
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="NoteDetail" component={NoteDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
