import React, {FC} from 'react';
import {Text} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';
import styles from './styles';

type Props = {
  handleEdit: () => void;
  handleDelete: () => void;
};

const ContextMenu: FC<Props> = ({handleEdit, handleDelete}) => {
  return (
    <MenuProvider>
      <Menu>
        <MenuTrigger style={styles.dotsContainer}>
          <Text style={styles.dots}>...</Text>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={handleEdit} text="Edit" />
          <MenuOption onSelect={handleDelete} text="Delete" />
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};

export default ContextMenu;
