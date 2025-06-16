import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import StarBackground from "./components/StarBackground";
import NatureBackground from "./components/NatureBackground";
import CareerJourney from "./pages/CareerJourney";
import Certificates from "./pages/Certificates";
import { useTheme } from "./components/ThemeContext";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <>
      {isDarkMode ? <StarBackground /> : <NatureBackground />}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/career-journey" element={<CareerJourney />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
