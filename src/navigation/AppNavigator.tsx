import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import type React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadFavorites } from '@/redux/starship.slice';
import HomeScreen from '@/screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFavorites = async () => {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        dispatch(loadFavorites(JSON.parse(favorites)));
      }
    };

    fetchFavorites();
  }, [dispatch]);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          title: 'Home',
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
