import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, EventPage, CheckinPage, AdminPage } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/evento" element={<EventPage />} />
        <Route path="/checkin/:eventPint" element={<CheckinPage />} />
        <Route path="/gerenciar" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
