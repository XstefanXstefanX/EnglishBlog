import Nav from "./components/Navigation.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Articles from "./pages/Articles.jsx";
import Poetry from "./pages/Poetry.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/EnglishBlog/" element={<Nav />}>
            <Route index element={<Home />}></Route>
            <Route path="/EnglishBlog/articles" element={<Articles />}></Route>
            <Route path="/EnglishBlog/poetry" element={<Poetry />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
