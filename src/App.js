import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/CustomOutlet/Layout";
import "./App.css";

import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movie/:imdbID" component={<MovieDetail />} />
          {/* <Route component="" /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
