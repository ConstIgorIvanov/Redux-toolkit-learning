import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initials = {
  firstName: string;
  lastName: string;
};

const initialState: initials = {
  firstName: '',
  lastName: '',
};

const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
  },
});

export const { setFirstName, setLastName } = stateSlice.actions;
export default stateSlice.reducer;
