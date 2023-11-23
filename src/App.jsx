import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageNotFound from "./pages/404";
import Home from "./pages/Home"
import FindATutor from "./pages/FindATutor";

import './styles.css'

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "*", element: <PageNotFound /> },
    { path: "/FindATutor", element: <FindATutor /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;