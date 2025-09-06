import userIcon from "@/assets/images/user-icon.svg";
import fileIcon from "@/assets/images/file-icon.svg";
import folderIcon from "@/assets/images/folder-icon.svg";
import structureIcon from "@/assets/images/structure-icon.svg";
import manageIcon from "@/assets/images/manage-icon.svg";
import backpackIcon from "@/assets/images/backpack-icon.svg";
import announcementIcon from "@/assets/images/announcement-icon.svg";

export const routes = [
  {
    name: "İstifadəçilər",
    icon:userIcon,
    path: null,
    children: [
      {
        name: "lorem ipsum dolar",
        path: "lorem",
      },
      {
        name: "lorem ipsum dolar",
        path: "lorem",
      },
      {
        name: "lorem ipsum dolar",
        path: "lorem",
      },
    ],
  },
  {
    name: "Soraqçalar",
    icon: fileIcon,
    path: "lorem2",
    children: null,
  },
  {
    name: "Sorğular",
    icon: folderIcon,
    path: "lorem2",
    children: null,
  },
  {
    name: "Müəssisənin Strukturu",
    icon: structureIcon,
    path: null,
    children: [
      {
        name: "sjsdg",
        path: "agjsdg",
      },
      {
        name: "sjsdg",
        path: "agjsdg",
      },
    ],
  },
  {
    name: "Fənlərin menecmenti",
    icon: manageIcon,
    path: null,
    children: [
      {
        name: "sjsdg",
        path: "agjsdg",
      },
      {
        name: "sjsdg",
        path: "agjsdg",
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
        path: "agjsdg",
      },
      {
        name: "Tədris tapşırıqları",
        path: "agjsdg",
      },
      {
        name: "Mühazirə birləşməsi",
        path: "agjsdg",
      },
      {
        name: "Tədris yükü",
        path: "agjsdg",
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
        name: "sjsdg",
        path: "agjsdg",
      },
      {
        name: "sjsdg",
        path: "agjsdg",
      },
    ],
  },
];
