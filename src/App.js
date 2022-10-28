import React from "react";
import "./App.css";
import LinkSection from "./components/LinkSection";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Profile />
      <LinkSection />
      <Footer />
    </div>
  );
}

export default App;
