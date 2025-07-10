// App.jsx
import { Route, Routes, useNavigate } from "react-router-dom";
import CongregationPage from "./pages.jsx/CongregationPage";
import TaskA from "./pages.jsx/TaskA";
import TaskB from "./pages.jsx/TaskB";
import TaskC from "./pages.jsx/TaskC";
import TaskD from "./pages.jsx/TaskD";
import ShortcutTip from "./components/ShortcutTip";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.ctrlKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        navigate("/taska");
      }
      if (e.ctrlKey && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        navigate("/taskb");
      }
      if (e.ctrlKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        navigate("/taskc");
      }
      if (e.ctrlKey && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        navigate("/taskd");
      }
      if (e.ctrlKey && e.key.toLowerCase() === 'q') {
        e.preventDefault();
        navigate("/");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <>
      <div className="bg-gray-800 text-white px-4 py-2 text-sm flex flex-wrap gap-8 items-center sticky top-0 z-50">
        <span className="font-semibold mr-4">Keyboard Shortcuts:</span>
        <ShortcutTip keys="Ctrl + A" label="Task A" />
        <ShortcutTip keys="Ctrl + B" label="Task B" />
        <ShortcutTip keys="Ctrl + C" label="Task C" />
        <ShortcutTip keys="Ctrl + D" label="Task D" />
        <ShortcutTip keys="Ctrl + Q" label="Back" />
      </div>

      <Routes>
        <Route path="/" element={<CongregationPage />} />
        <Route path="/taska" element={<TaskA />} />
        <Route path="/taskb" element={<TaskB />} />
        <Route path="/taskc" element={<TaskC />} />
        <Route path="/taskd" element={<TaskD />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
