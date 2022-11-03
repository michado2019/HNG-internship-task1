import React from "react";
import "./App.css";
import Footer from "./components/pages/Footer";
import AppRouter from "./routes";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <Footer />
    </div>
  );
}
export default App;
