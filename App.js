// import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
// import { store } from './src/store/store';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/navigation/AppNavigator';
// import { loadItems } from './src/store/budgetSlice';

// const App = () => {
//   useEffect(() => {
//     store.dispatch(loadItems());
//   }, []);

//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <AppNavigator />
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;


import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { loadItems } from './src/store/budgetSlice';

const App = () => {
  useEffect(() => {
    store.dispatch(loadItems());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;