import type React from 'react';
import { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import type { Starship } from '@/redux/starship.slice';
import { addFavorite } from '@/redux/starship.slice';
import type { RootState } from '@/redux/store';

type StarshipItemProps = {
  starship: Starship;
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    margin: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

const StarshipItem: React.FC<StarshipItemProps> = ({ starship }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.starship.favorites);

  const isNewStarship = useCallback(
    () => favorites.indexOf(starship) === -1,
    [favorites, starship],
  );

  const handleAddFavorite = useCallback(() => {
    if (isNewStarship()) {
      dispatch(addFavorite(starship));
    }
  }, [starship, isNewStarship, dispatch]);

  return (
    <View style={styles.container}>
      <Text>Id: {starship.id}</Text>
      <Text>Name: {starship.name}</Text>
      <Text>Model: {starship.model}</Text>
      <Text>Manufacturer: {starship.manufacturers}</Text>
      <Text>Cost In Credits: {starship.costInCredits}</Text>
      <Text>Length: {starship.length}</Text>
      <Text>Crew: {starship.crew}</Text>
      <Text>Passengers: {starship.passengers}</Text>
      <Text>Cargo Capacity: {starship.cargoCapacity}</Text>
      <Text>Consumables: {starship.consumables}</Text>
      <Text>Starship Class: {starship.starshipClass}</Text>
      <Text>Hyperdrive Rating: {starship.hyperdriveRating}</Text>
      <Text>MGLT: {starship.MGLT}</Text>
      <Text>Starship Class: {starship.starshipClass}</Text>
      <Text>Created: {starship.created}</Text>
      <Text>Edited: {starship.edited}</Text>

      {isNewStarship() && (
        <Pressable style={styles.button} onPress={handleAddFavorite}>
          <Text style={styles.text}>Add to Favorite!</Text>
        </Pressable>
      )}
    </View>
  );
};

export default StarshipItem;
