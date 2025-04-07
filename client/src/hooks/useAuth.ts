// src/hooks/useAuth.ts
import { useEffect, useState } from "react";
import { auth } from "@/firebase/client";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import {
  authLoading,
  authSuccess,
  authFailed,
  signOut as signOutAction,
} from "@/state";
import {
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser,
  UserCredential,
  updateProfile,
} from "firebase/auth";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user, loading, error } = useAppSelector(
    (state) => state.global
  );
  const [initialized, setInitialized] = useState(false);

  // Sync Firebase auth state with Redux store
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser) => {
        if (firebaseUser) {
          // User is signed in
          dispatch(
            authSuccess({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName || undefined,
              photoURL: firebaseUser.photoURL,
            })
          );
        } else {
          // User is signed out
          dispatch(signOutAction());
        }
        setInitialized(true);
      },
      (error) => {
        dispatch(authFailed(error.message));
        setInitialized(true);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  // Sign up with email/password
  const signUpWithEmailAndPassword = async (
    email: string,
    password: string,
    displayName?: string
  ): Promise<UserCredential> => {
    dispatch(authLoading());
    try {
      const userCredential = await firebaseCreateUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update profile with name if provided
      if (displayName && userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: displayName,
        });

        // Update Redux state with the name
        dispatch(
          authSuccess({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            displayName: displayName,
            photoURL: userCredential.user.photoURL,
          })
        );
      }

      return userCredential;
    } catch (error: any) {
      dispatch(authFailed(error.message || "Sign up failed"));
      throw error;
    }
  };

  // Sign in with email/password
  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    dispatch(authLoading());
    try {
      const userCredential = await firebaseSignInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error: any) {
      dispatch(authFailed(error.message || "Sign in failed"));
      throw error;
    }
  };

  // Sign out
  const logout = async (): Promise<void> => {
    try {
      await firebaseSignOut(auth);
      dispatch(signOutAction());
    } catch (error: any) {
      dispatch(authFailed(error.message || "Sign out failed"));
      throw error;
    }
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    initialized,
    signUpWithEmailAndPassword,
    signInWithEmailAndPassword,
    logout,
  };
};
