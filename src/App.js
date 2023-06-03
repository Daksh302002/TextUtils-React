import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0B2447";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          About="About TextUtils"
          mode={mode}
          togglemode={togglemode}
        ></Navbar>

        <Alert alert={alert}></Alert>

        <Routes>
          <Route
            exact
            path="/about"
            element={<About mode={mode} togglemode={togglemode} />}
          />

          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyse: "
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
        ></TextForm>
      </div> */}
      {/* <div className="my-5">
        <About mode={mode}></About>
      </div> */}
    </>
  );
}

export default App;
