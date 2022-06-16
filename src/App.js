// import React from "react";
import { StrictMode, useState, lazy, Suspense } from "react";
import ThemeContext from "./ThemeContext";
// import Details from "./Details";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";
// import SearchParams from "./SearchParams";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("brown");
  return (
    <StrictMode>
<<<<<<< HEAD
      <ThemeContext.Provider value={theme}>
        <div
          className="p-0 m-0"
          style={{
            background:
              "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
          }}
        >
          <BrowserRouter>
            <header className="w-full text-center p-7 mb-10 bg-gradient-to-r from-slate-900 via-gray-500 to-gray-300">
              <Link className="text-6xl text-white hover:text-gray-200" to="/">
                Adopt Me!
              </Link>
=======
      <Suspense
        fallback={
          <h2 className="mx-auto animate-pulse">
            This module is still loading...
          </h2>
        }
      >
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <header>
              <Link to="/">Adopt Me!</Link>
>>>>>>> feature/code-splitting
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
<<<<<<< HEAD
        </div>
      </ThemeContext.Provider>
      {/* <div>
=======
        </ThemeContext.Provider>
        {/* <div>
>>>>>>> feature/code-splitting
        
        
      </div> */}
      </Suspense>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
