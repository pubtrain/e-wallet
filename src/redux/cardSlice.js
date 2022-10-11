import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    cards: [
      {
        cardName: 'Janne Josefsson',
        cardNum: '1337420155319940',
        expireMonth: '01',
        expireYear: '02',
        cvc: '298',
        vendor: 'Mastercard',
        active: true,
        id: 1,
      },
    ],
    latestId: 2,
  },
  // skriv reducers, t.ex. makeActive, getCards, deleteCard=KOLLA TODOLIST PÅ GIT
  reducers: {
    addCard: (state, action) => {
      if (state.cards.length < 4) {
        state.cards.push(action.payload);
        state.latestId += 1;
      } else {
        alert('Too many cards');
      }
    },
    makeActive: (state, action) => {
      console.log(action.payload);
      state.cards.forEach((card) => {
        if (card.id === action.payload) {
          card.active = true;
        } else {
          card.active = false;
        }
      });
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
  },
});

//skriv const { alla, reducers,} = userSlice.actions
export const { addCard, makeActive, removeCard } = userSlice.actions;

export default userSlice.reducer;
