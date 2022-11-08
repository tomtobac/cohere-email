import { Header } from "@components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <hr className="h-3 border-0 bg-orange-400" />
      <Outlet />
    </main>
  );
}

export default App;
