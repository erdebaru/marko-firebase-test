import { app } from "@/services/firebase";
import { getAuth, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

app // here to just let the firebase initialize first

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signIn = () => {
  signInWithRedirect(auth, provider)
};

export const signOut = () => {
  auth.signOut();
};

export const storeUser = (user: any) => {
  if(typeof window === 'undefined') return;
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  if(typeof window === 'undefined') return;
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : undefined;
};

export { getRedirectResult };