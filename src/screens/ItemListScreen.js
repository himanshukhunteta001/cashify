import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, List, Title } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { selectItems } from '../store/budgetSlice';
import { commonStyles } from '../styles/ItemListStyle';

const ItemListScreen = ({ navigation }) => {
  const items = useSelector(selectItems);

  return (
    <View style={commonStyles.container}>
      <List.Section>
        <List.Subheader style={commonStyles.title}>Budget Entry Listing</List.Subheader>
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item, index) => (
            <Card key={index} style={[commonStyles.card, { marginBottom: 16 }]}>
              <Card.Content>
                <Title>{item.name}</Title>
              </Card.Content>
            </Card>
          ))
        ) : (
          <Text style={commonStyles.noItemsText}>No items available.</Text>
        )}
      </List.Section>

      <Button
        mode="contained"
        style={commonStyles.addButton}
        onPress={() => navigation.navigate('ItemInput')}
      >
        Add New Budget
      </Button>
    </View>
  );
};

export default ItemListScreen;
