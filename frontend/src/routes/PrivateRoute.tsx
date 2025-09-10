import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import type { JSX } from "react";

export default function PrivateRoute({ children }: { children: JSX.Element }): JSX.Element {
  const auth = getAuth();
  return auth.currentUser ? children : <Navigate to="/login" />;
}