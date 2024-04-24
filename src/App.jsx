import Nav from "./components/Navigation.jsx";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Articles from "./pages/Articles.jsx";
import Article1 from "./pages/Article1.jsx";
import Article2 from "./pages/Article2.jsx";
import Essays from "./components/Essays.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <div className="background-cover">
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />}></Route>
            <Route path="/articles" element={<Articles />}></Route>
            <Route
              path="/articles/SustainableCities"
              element={<Article1 />}
            ></Route>
            <Route path="/essays" element={<Essays />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="articles/EarthNeedsYou" element={<Article2 />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
