import { Navigate } from "react-router-dom";
import type { JSX } from "react";

function getIsAuthenticated(): boolean {
  // TODO: replace with real auth check (e.g., context, cookie, localStorage)
  return Boolean(localStorage.getItem("isAuthenticated"));
}

export default function PrivateRoute({ children }: { children: JSX.Element }): JSX.Element {
  const isAuthed = getIsAuthenticated();
  return isAuthed ? children : <Navigate to="/login" />;
}