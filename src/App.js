import { Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import Content from "./components/Content";
import Home from "./components/Home";
import background from "./background.jpg";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./App.css";
import CustomHook from "./components/CustomHook";
import Reducer from "./components/Reducer";

function App() {

  return (
    <section className="App" style={{ backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", height:"100vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="custom" element={<CustomHook />} />
        <Route path="reducer" element={<Reducer />} />
        <Route path="content" element={<ErrorBoundary><Content /> </ErrorBoundary>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
   </section>
  );
}

export default App;
