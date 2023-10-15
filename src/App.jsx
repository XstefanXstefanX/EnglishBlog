import Nav from "./components/Navigation.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Articles from "./pages/Articles.jsx";
import Article1 from "./pages/Article1.jsx";

function App() {
  return (
    <div className="background-cover">
      <BrowserRouter basename="/EnglishBlog/">
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />}></Route>
            <Route path="/articles" element={<Articles />}></Route>
            <Route
              path="/articles/SaveThePlanet"
              element={<Article1 />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
