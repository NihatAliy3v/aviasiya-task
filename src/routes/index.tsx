import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Dashboard },
      //   { path: "about", Component: About },
    ],
  },
]);
