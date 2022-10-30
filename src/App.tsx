import { Header } from "@components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <hr className="separator" />
      <Outlet />
    </main>
  );
}

export default App;
