import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Starship {
  name: string;
  model: string;
  passengers: string;
  starship_class: string;
  manufacturer: string;
  MGLT: string;
  hyperdrive_rating: string;
  consumables: string;
  url: string;
  created: string;
  edited: string;
}

interface StarshipState {
  favorites: Starship[];
}

const initialState: StarshipState = {
  favorites: [],
};

const starshipSlice = createSlice({
  name: "starship",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Starship>) => {
      state.favorites.push(action.payload);
      AsyncStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    loadFavorites: (state, action: PayloadAction<Starship[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const { addFavorite, loadFavorites } = starshipSlice.actions;

export default starshipSlice.reducer;
