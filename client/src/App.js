import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/layout";
import NoPage from "./views/noPage";
import Home from "./views/home";
import Availability from "./views/availability";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ft/*" element={<Availability />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
