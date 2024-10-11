import React, { FC, useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadFavorites, Starship } from "@/redux/starshipSlice";
import { RootState } from "@/redux/store";
import StarshipList from "@/components/StarshipList";

const FavoriteScreen: FC = () => {
  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.starship.favorites);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        dispatch(loadFavorites(JSON.parse(favorites) as Starship[]));
      }
    };

    fetchFavorites();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <StarshipList starshipList={favorites} />
    </View>
  );
};

export default FavoriteScreen;
