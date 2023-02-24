import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./routes/Join";
import Login from "./routes/Login";
import Test from "./routes/Test";
import CssTest from "./routes/CssTest";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/App.module.css";
function App() {
  return (
    <div id={styles.container}>
      <div id={styles.content}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/test" element={<Test />} />
            <Route path="/CssTest" element={<CssTest />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
