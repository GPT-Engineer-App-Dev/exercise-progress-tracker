import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import WorkoutLogging from "./pages/WorkoutLogging.jsx";
import ProgressTracking from "./pages/ProgressTracking.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/workout-logging" element={<WorkoutLogging />} />
      <Route path="/progress-tracking" element={<ProgressTracking />} />
      </Routes>
    </Router>
  );
}

export default App;
