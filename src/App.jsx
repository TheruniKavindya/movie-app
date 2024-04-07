import { Provider } from "react-redux";
import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import store from "./app/store";
import NavBar from "./lib/NavBar/NavBar";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Provider>
  );
}

export default App;
