import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import SearchTeacher from "@/pages/SearchTeacher";
import CreateTeacher from "@/pages/CreateTeacher";
import TeacherManagement from "@/pages/TeacherManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "search-teacher", Component: SearchTeacher },
      { path: "create-teacher", Component: CreateTeacher },
      { path: "update-teacher/:id", Component: CreateTeacher },
      { path: "management-teacher", Component: TeacherManagement },
    ],
  },
]);
