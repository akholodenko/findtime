import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar title="FindTime" />
      {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
