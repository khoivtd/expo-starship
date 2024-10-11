import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from 'react-query'
import HomeScreen from '@/screens/HomeScreen';
import FavoriteScreen from '@/screens/FavoriteScreen';

const Stack = createStackNavigator();

const queryClient = new QueryClient()

const AppNavigator: FC = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          options={{
            title: 'Home',
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Favorites"
          options={{
            title: 'Favorites',
          }}
          component={FavoriteScreen} />
      </Stack.Navigator>
  </QueryClientProvider>
  );
};

export default AppNavigator;