import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Library from "./components/library";
import SignIn from "./components/signIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/library" element={<Library />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
