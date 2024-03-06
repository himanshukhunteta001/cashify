import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ItemInputScreen from '../screens/ItemInputScreen';
import ItemListScreen from '../screens/ItemListScreen';

const AppNavigator = createStackNavigator(
  {
    ItemList: {
      screen: ItemListScreen,
      navigationOptions: {
        title: 'Item List',
        headerShown: false,
      },
    },
    ItemInput: {
      screen: ItemInputScreen,
      navigationOptions: {
        title: 'Item Input',
        headerShown: false, 
      },
    },
  },
  {
    initialRouteName: 'ItemList',
  }
);

export default createAppContainer(AppNavigator);
