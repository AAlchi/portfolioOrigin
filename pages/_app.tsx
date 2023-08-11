import "@/styles/globals.css";
import Home from ".";
import { useEffect, useState } from "react";

export default function App() {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? <Home /> : <div>Loading...</div>;
}
