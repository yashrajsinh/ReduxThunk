import { View, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';

//Components
import FloatingButton from '../components/FloatingButton/FloatingButton';
import InputModal from '../components/InputModel/InputModel';
import TaskView from '../components/TaskView/TaskView';
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
      <Text style={{ fontSize: 20, margin: 15 }}> Tasks </Text>
      <TaskView />
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
  },
});
