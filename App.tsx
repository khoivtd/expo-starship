import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import type React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import AppNavigator from '@/navigation/AppNavigator';
import { store } from '@/redux/store';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top']}>
              <AppNavigator />
            </SafeAreaView>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
