import userIcon from "@/assets/images/user-icon.svg";

export const routes = [
  {
    name: "İstifadəçiləri",
    icon: userIcon,
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
    icon: userIcon,
    path: "lorem2",
    children: null,
  },
  {
    name: "Sorgular",
    icon: userIcon,
    path: "lorem2",
    children: null,
  },
  {
    name: "Muessisenin Strukturu",
    icon: userIcon,
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
    name: "Tedris yuku",
    icon: userIcon,
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
    icon: userIcon,
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
