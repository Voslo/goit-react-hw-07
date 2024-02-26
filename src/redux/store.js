import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacsSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineSlices({
  filters: filterReducer,
  contacts: contactsReducer,
});


export const store = configureStore({
  reducer: rootReducer,
});


