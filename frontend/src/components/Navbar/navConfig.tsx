// src/data/navConfig.ts

export interface NavItemType {
  id: string;
  label: string;
  items: string[];
}

export const navItems: NavItemType[] = [
  {
    id: "exams",
    label: "Exams",
    items: ["NEET", "JEE", "Class 6-10"],
  },
  {
    id: "programs",
    label: "Programs",
    items: ["Online Programs", "Classrooms", "Distance Learning"],
  },
  {
    id: "scholarship",
    label: "Scholarship",
    items: ["ADSAT", "TALLENTEX"],
  },
  {
    id: "test-series",
    label: "Test Series",
    items: ["NEET", "JEE(Main+Advanced)", "JEEMain"],
  },
  {
    id: "study-materials",
    label: "Study Materials",
    items: ["Books", "Sample Papers", "Previous Year Questions"],
  },
];
