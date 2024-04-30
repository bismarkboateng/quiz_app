import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import JavaScript from "./pages/JavaScript";
import Accessibility from "./pages/Accessibility";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/quiz-questions/html",
      element: <HTML />,
    },
    {
      path: "/quiz-questions/css",
      element: <CSS />,
    },
    {
      path: "/quiz-questions/javaScript",
      element: <JavaScript />,
    },
    {
      path: "/quiz-questions/accessibility",
      element: <Accessibility />
    },
  ]);

  return (
    <main>
     <RouterProvider router={router} />
    </main>
  )
}
