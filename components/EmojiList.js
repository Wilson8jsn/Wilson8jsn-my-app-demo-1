import React from 'react'; 
import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';
import PropTypes from 'prop-types';

import emoji1 from '../assets/images/emoji1.png'; 
import emoji2 from '../assets/images/emoji2.png';
import emoji3 from '../assets/images/emoji3.png';
import emoji4 from '../assets/images/emoji4.png';
import emoji5 from '../assets/images/emoji1.png';

const emojiImages = [emoji1, emoji2, emoji3, emoji4, emoji5];

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState(emojiImages);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

EmojiList.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
