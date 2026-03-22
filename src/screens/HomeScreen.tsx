import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import FloatingButton from '../components/FloatingButton/FloatingButton';
import InputModal from '../components/InputModel/InputModel';
{
  /* ===
  HomeScreen responsilbe for showing flatlist and button
  === */
}
export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddPress = () => {
    setModalVisible(true); //  OPEN MODAL
  };

  const handleSubmit = () => {
   
    setModalVisible(false); //  CLOSE AFTER ADD
  };

  const handleClose = () => {
    setModalVisible(false); // CLOSE ON CANCEL
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>

      <FloatingButton onPress={handleAddPress} />

      <InputModal
        visible={modalVisible}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 24, fontWeight: 'bold' },
});
