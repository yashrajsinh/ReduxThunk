import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
{
  /* === 
  Input model opens when add floating btn is pressed 
  === */
}
export default function InputModal({ visible, onSubmit }: any) {
  const [isVisible, setIsVisible] = useState(visible);
  const [text, setText] = useState('');
  const [property, setProperty] = useState('Low');

  // Update local visibility if parent changes `visible`
  React.useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const handleSubmit = () => {
    onSubmit({ text, property });
    setText('');
    setProperty('Low');
    setIsVisible(false); // hide modal locally
  };

  const handleCancel = () => {
    setIsVisible(false); // hide modal locally
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Add New Item</Text>

          {/* Text Input */}
          <TextInput
            placeholder="Enter todo"
            value={text}
            onChangeText={setText}
            style={styles.input}
          />

          {/* Dropdown */}
          <View style={styles.dropdown}>
            <Picker
              selectedValue={property}
              onValueChange={itemValue => setProperty(itemValue)}
            >
              <Picker.Item label="Low" value="Low" />
              <Picker.Item label="Medium" value="Medium" />
              <Picker.Item label="High" value="High" />
            </Picker>
          </View>

          {/* Buttons */}
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={handleCancel} // handle locally
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSubmit}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttons: { flexDirection: 'row', justifyContent: 'flex-end' },
  buttonCancel: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  buttonSubmit: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#6200ee',
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
