import React, { FC } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Starship } from "@/redux/starshipSlice";
import { addFavorite } from "@/redux/starshipSlice";
import { RootState } from "@/redux/store";

interface Props {
  starship: Starship;
}

const StarshipItem: FC<Props> = ({ starship }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.starship.favorites);
  console.log("StarshipItem favorites = ", favorites);

  const isNewStarship = favorites.indexOf(starship) === -1;
  console.log("StarshipItem isNewStarship = ", isNewStarship);

  const handleAddFavorite = () => {
    console.log(
      "StarshipItem handleAddFavorite isNewStarship = ",
      isNewStarship
    );
    if (isNewStarship) {
      dispatch(addFavorite(starship));
    }
  };

  return (
    <View style={{ padding: 10, borderWidth: 1, borderColor: "#ccc" }}>
      <Text>Name: {starship.name}</Text>
      <Text>Model: {starship.model}</Text>
      <Text>Passengers: {starship.passengers}</Text>
      <Text>Starship Class: {starship.starship_class}</Text>
      <Text>Manufacturer: {starship.manufacturer}</Text>
      <Text>MGLT: {starship.MGLT}</Text>
      <Text>Hyperdrive Rating: {starship.hyperdrive_rating}</Text>
      <Text>Consumables: {starship.consumables}</Text>
      <Text>Url: {starship.url}</Text>
      <Text>Created: {starship.created}</Text>
      <Text>Edited: {starship.edited}</Text>

      {isNewStarship && (
        <Pressable style={styles.button} onPress={handleAddFavorite}>
          <Text style={styles.text}>{"Add to Favorite!"}</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
    margin: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default StarshipItem;
