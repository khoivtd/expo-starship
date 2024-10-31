import AsyncStorage from '@react-native-async-storage/async-storage';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type Starship = {
  id: string;
  name: string;
  model: string;
  manufacturers: Array<string>;
  costInCredits: number;
  length: number;
  crew: string;
  passengers: string;
  cargoCapacity: number;
  consumables: string;
  hyperdriveRating: number;
  MGLT: number;
  starshipClass: string;
  created: string;
  edited: string;
};

type StarshipState = {
  favorites: Starship[];
};

const initialState: StarshipState = {
  favorites: [],
};

const starshipSlice = createSlice({
  name: 'starship',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Starship>) => {
      state.favorites.push(action.payload);
      AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    loadFavorites: (state, action: PayloadAction<Starship[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const { addFavorite, loadFavorites } = starshipSlice.actions;

export default starshipSlice.reducer;
