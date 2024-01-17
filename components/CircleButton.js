import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import PropTypes from 'prop-types'; // Importa PropTypes para la validación de tipos

export default function CircleButton({ onPress }) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#FF2D00" />
      </Pressable>
    </View>
  );
}

// Agregada la validación de tipos con PropTypes
CircleButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#FF2D00",
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
