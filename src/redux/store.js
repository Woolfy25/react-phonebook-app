import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filters/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
