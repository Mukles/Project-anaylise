import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashbaord from "./Components/Dashboard";
import Header from "./Components/Header";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import QuestionAnswer from "./Components/QuestionAnswer";
import Reviews from "./Components/Reviews";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/review" element={<Reviews />} />
        <Route exact path="/dashboard" element={<Dashbaord />} />
        <Route exact path="/question" element={<QuestionAnswer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
