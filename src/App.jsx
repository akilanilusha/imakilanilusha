import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogListPage from "./pages/BlogListPage";
import BlogPostPage from "./pages/BlogPostPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative overflow-hidden bg-[#f4f4f4]">
        {/* SVG Noise Overlay */}
        <div className="absolute inset-0 pointer-events-none noise-svg" />

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
