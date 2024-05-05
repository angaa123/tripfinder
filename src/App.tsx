import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Login from "./pages/auth/Login";
const router = createBrowserRouter([{ path: "*", element: <Root /> }]);
function Root() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
function App() {
  return <RouterProvider router={router} />;
}

export default App;
