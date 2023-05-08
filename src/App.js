import Sidebar from "./components/sidebar/Sidebar";
import "../src/index.css";
import { Route, Routes } from "react-router-dom";
import General from "./components/jumbotron/general/index.jsx";
import Advance from "./components/jumbotron/advance";
import Language from "./components/jumbotron/Languages";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" Component={General} />
        <Route path="/General" Component={General} />
        <Route path="/Advanced" Component={Advance} />
        <Route path="/Languages" Component={Language} />
      </Routes>
    </>
  );
}

export default App;
