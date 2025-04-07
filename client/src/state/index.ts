import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  uid: string;
  email: string | null;
  displayName?: string;
  photoURL?: string | null;
}

interface initialStateTypes {
  isAuthenticated: boolean;
  isMobileNavSheetOpen: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: initialStateTypes = {
  isMobileNavSheetOpen: false,
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleIsMobileNavSheetOpen: (state) => {
      state.isMobileNavSheetOpen = !state.isMobileNavSheetOpen;
    },
    // Authentication actions
    authLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    authSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    authFailed: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
});

export const {
  toggleIsMobileNavSheetOpen,
  authLoading,
  authSuccess,
  authFailed,
  signOut,
  updateUser,
  clearAuthError,
} = globalSlice.actions;

export default globalSlice.reducer;
