import React, { useState } from 'react';
import { View, Text,Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper'; // Import Material Design components
import { useDispatch } from 'react-redux';
import { addItem } from '../store/budgetSlice';
import { inputScreenStyles } from '../styles/ItemInputStyle';

const ItemInputScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const saveItem = () => {
         if (!itemName.trim() || !plannedAmount.trim() || !actualAmount.trim()) {
           Alert.alert('Incomplete Fields', 'Please fill in all the fields.');
           return;
         }
         if (navigation) {
           dispatch(addItem({ name: itemName, plannedAmount, actualAmount }));
           navigation.navigate('ItemList');
         }
       };

  const showItems = () => {
    if (navigation) {
      navigation.navigate('ItemList');
    }
  };

  return (
    <View style={inputScreenStyles.container}>
      <Text style={inputScreenStyles.title}>Add New Budget Item</Text>

      <TextInput
        label="Item Name"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
        style={inputScreenStyles.input}
      />

      <TextInput
        label="Planned Amount"
        value={plannedAmount}
        onChangeText={(text) => setPlannedAmount(text)}
        keyboardType="numeric"
        style={inputScreenStyles.input}
      />

      <TextInput
        label="Actual Amount"
        value={actualAmount}
        onChangeText={(text) => setActualAmount(text)}
        keyboardType="numeric"
        style={inputScreenStyles.input}
      />

      <Button mode="contained" onPress={saveItem} style={inputScreenStyles.button}>
        Save
      </Button>

      <Button mode="contained" onPress={showItems} style={inputScreenStyles.button}>
        Show Items
      </Button>
    </View>
  );
};

export default ItemInputScreen;
