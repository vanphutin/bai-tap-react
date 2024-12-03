// src/routes/index.tsx
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../layout/HomePage";
import BookPage from "../layout/BookPage"; // Giả sử có trang book
import Index from "../components/chuyenDoiNgoaiTe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/book",
    element: <BookPage />,
  },
  {
    path: "/chuyen-doi-ngoai-te",
    element: <Index />,
  },
]);

export default router;
