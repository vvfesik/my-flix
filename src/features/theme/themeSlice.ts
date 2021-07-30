import { createSlice } from '@reduxjs/toolkit';
import * as Themes from '../../app/themes';

interface ThemeState {
  config: typeof Themes['darkTheme'];
  current: keyof typeof Themes;
  next: keyof typeof Themes;
}

const initialState: ThemeState = {
  config: Themes['darkTheme'],
  current: 'darkTheme',
  next: 'lightTheme',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchedTheme(state) {
      state.config = Themes[state.next];
      [state.current, state.next] = [state.next, state.current];
      localStorage.setItem('theme', state.current);
    },
  },
});

export const { switchedTheme } = themeSlice.actions;
export default themeSlice.reducer;
