// import React from "react";
import { StrictMode, useState, lazy, Suspense } from "react";
import ThemeContext from "./ThemeContext";
import Home from "./views/main-content/chat/Home";
import Main from "./views/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";

const CurrentChat = lazy(() => import("./views/main-content/chat/CurrentChat"));

const App = () => {
  const theme = useState("brown");

  return (
    <StrictMode>
      <Suspense
        fallback={
          <h2 className="mx-auto animate-pulse">
            This module is still loading...
          </h2>
        }
      >
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />}>
                <Route exact path="/chat/:chatId" element={<CurrentChat />} />

                <Route index element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
