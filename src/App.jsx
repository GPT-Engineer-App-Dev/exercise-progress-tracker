import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import WorkoutLogging from "./pages/WorkoutLogging.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/workout-logging" element={<WorkoutLogging />} />
      </Routes>
    </Router>
  );
}

export default App;
