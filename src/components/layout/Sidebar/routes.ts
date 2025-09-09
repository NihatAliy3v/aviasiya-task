import userIcon from "@/assets/images/icons/user-icon.svg";
import fileIcon from "@/assets/images/icons/file-icon.svg";
import folderIcon from "@/assets/images/icons/folder-icon.svg";
import structureIcon from "@/assets/images/icons/structure-icon.svg";
import manageIcon from "@/assets/images/icons/manage-icon.svg";
import backpackIcon from "@/assets/images/icons/backpack-icon.svg";
import announcementIcon from "@/assets/images/icons/announcement-icon.svg";

export const routes = [
  {
    name: "İstifadəçilər",
    icon:userIcon,
    path: null,
    children: [
      {
        name: "lorem ipsum dolar",
        path: "/",
      },
      {
        name: "lorem ipsum dolar",
        path: "/",
      },
      {
        name: "lorem ipsum dolar",
        path: "/",
      },
    ],
  },
  {
    name: "Soraqçalar",
    icon: fileIcon,
    path: "/",
    children: null,
  },
  {
    name: "Sorğular",
    icon: folderIcon,
    path: "/",
    children: null,
  },
  {
    name: "Müəssisənin Strukturu",
    icon: structureIcon,
    path: null,
    children: [
      {
        name: "lorem ipsum dolar",
        path: "/",
      },
      {
        name: "lorem ipsum dolar",
        path: "/",
      },
    ],
  },
  {
    name: "Fənlərin menecmenti",
    icon: manageIcon,
    path: null,
    children: [
      {
        name: "lorem ipsum dolar",
        path: "/",
      },
      {
        name: "lorem ipsum dolar",
        path: "/",
      },
    ],
  },

  {
    name: "Tədris yükü",
    icon: backpackIcon,
    path: null,
    children: [
      {
        name: "Qrup plani",
        path: "/",
      },
      {
        name: "Tədris tapşırıqları",
        path: "/",
      },
      {
        name: "Mühazirə birləşməsi",
        path: "/",
      },
      {
        name: "Tədris yükü",
        path: "/management-teacher",
      },
      {
        name: "Professor - müəllim heyəti",
        path: "/",
      },
    ],
  },
  {
    name: "Tədbirlər və Elanlar",
    icon: announcementIcon,
    path: null,
    children: [
      {
        name: "lorem ipsum dolar",
        path: "/",
      },
      {
        name: "lorem ipsum dolar",
        path: "/",
      },
    ],
  },
];
