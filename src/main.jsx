import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import App from "./App";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/footer.css";
import "./styles/partner-modal.css";
import "./styles/blogs.css";
import "./styles/blog-details.css";
import "./styles/journey.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);