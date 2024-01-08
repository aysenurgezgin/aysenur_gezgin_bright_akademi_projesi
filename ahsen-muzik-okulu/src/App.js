import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage/HomePage.js";
import ContactPage from "./Pages/ContactPage/ContactPage.js";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage.js";
import TrainingPage from "./Pages/TrainingPage/TrainingPage.js";
import TrainingDetailsPage from "./Pages/TrainingDetailPage/TrainingDetailsPage.js";
import InstructorsPage from "./Pages/InstructorsPage/InstructorsPage.js";
import InstructorsDetailPage from "./Pages/IntructorsDetailPage/InstructorsDetailPage.js";
import Footer from "./Pages/Footer/Footer.js";

function App() {
  return (
  <>
  <BrowserRouter>
    <Header />
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/İletişim sayfası" element={<ContactPage />} />
        <Route path="/Hakkımızda sayfası" element={<AboutUsPage />} />
        <Route path="/Eğitimler sayfası" element={<TrainingPage />} />
        <Route path="/Eğitim detay sayfası" element={<TrainingDetailsPage />} />
        <Route path="/Eğitmenler sayfası" element={<InstructorsPage />} />
        <Route path="/Eğitmenler detay sayfası" element={<InstructorsDetailPage />} />
     </Routes>
      <Footer />
  </BrowserRouter>
  
  </>
  );
}

export default App;
