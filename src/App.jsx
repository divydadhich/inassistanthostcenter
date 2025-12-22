import { Routes, Route } from "react-router-dom";
import InAssistant from "./pages/InAssistant";
import Balance from "./pages/Balance";
import MyWork from "./pages/MyWork";
import Policy from "./pages/Policy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<InAssistant />} />
      <Route path="/balance" element={<Balance />} />
      <Route path="/work" element={<MyWork />} />
      <Route path="/policy" element={<Policy />} />
    </Routes>
  );
}
