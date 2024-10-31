import { configureStore } from '@reduxjs/toolkit';

import starshipReducer from './starship.slice';

export const store = configureStore({
  reducer: {
    starship: starshipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
