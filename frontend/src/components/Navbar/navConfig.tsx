// src/data/navConfig.ts
import { MenuItemProps } from '../navigation/MenuItem';

export interface NavItemType {
  id: string;
  label: string;
  items: string[];
}

export const navItems: NavItemType[] = [
  {
    id: "exams",
    label: "Exams",
    items: ["Civil Services", "Centeral Services", "Class 10-12"],
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

// Mobile menu configuration matching Allen.in structure
export const mobileMenuItems: MenuItemProps[] = [
  {
    id: "courses",
    label: "Courses",
    children: [
      {
        id: "civil-services",
        label: "Govt Services",
        children: [
          {
            id: "civil-services",
            label: "RAS",
            href: "/courses/civil-services/RAS"
          },
          {
            id: "civil-services",
            label: "SSC", 
            href: "/courses/neet/class-12"
          },
          {
            id: "civil-services",
            label: "Delhi Police",
            href: "/courses/neet/class-12-plus"
          },
          {
            id: "civil-services",
            label: "Railway",
            href: "/courses/neet/class-12-plus"
          },
          {
            id: "civil-services",
            label: "FCI",
            href: "/courses/neet/class-12-plus"
          },
          {
            id: "civil-services",
            label: "LIC & other Insurance",
            href: "/courses/neet/class-12-plus"
          },
          {
            id: "civil-services",
            label: "IB",
            href: "/courses/neet/class-12-plus"
          }
        ]
      },
      {
        id: "defence-forces",
        label: "Defence Forces",
        children: [
          {
            id: "defence-forces",
            label: "Army",
            href: "/courses/jee/main"
          },
          {
            id: "defence-forces",
            label: "Airforce",
            href: "/courses/jee/advanced"
          },
          {
            id: "defence-forces",
            label: "NDA/CDS",
            href: "/courses/jee/advanced"
          }
        ]
      },
      {
        id: "class-10-12",
        label: "Class 10-12",
        children: [
          {
            id: "class-10-12",
            label: "Class 10th",
            href: "/courses/foundation/class-10"
          },
          {
            id: "class-10-12",
            label: "Class 11th Arts",
            href: "/courses/foundation/class-11-Arts"
          },
          {
            id: "class-10-12",
            label: "Class 11th Commerce",
            href: "/courses/foundation/class-11-commerce"
          },
          {
            id: "class-10-12",
            label: "Class 12th Arts",
            href: "/courses/foundation/class-12-Arts"
          },
          {
            id: "class-10-12",
            label: "Class 12th Commerce",
            href: "/courses/foundation/class-12-commerce"
          }
        ]
      },
    ]
  },
  {
    id: "test-series",
    label: "Test Series",
    children: [
      {
        id: "govt-test-series",
        label: "Govt Exams Test Series",
        href: "/test-series/neet"
      },
      {
        id: "defence-test-series",
        label: "Defence Forces Test Series",
        href: "/test-series/jee"
      },
      {
        id: "board-test-series",
        label: "Board Test Series",
        href: "/test-series/board"
      }
    ]
  },
  {
    id: "classroom",
    label: "Classroom",
    children: [
      {
        id: "online-classroom",
        label: "Online Classroom",
        href: "/classroom/online"
      },
      {
        id: "offline-classroom",
        label: "Offline Classroom",
        href: "/classroom/offline"
      }
    ]
  },
  {
    id: "results",
    label: "Results",
    children: [
      {
        id: "exam-results",
        label: "Exam Results",
        href: "/results/exams"
      },
      {
        id: "scholarship-results",
        label: "Scholarship Results",
        href: "/results/scholarships"
      }
    ]
  },
  {
    id: "study-materials",
    label: "Study Materials",
    children: [
      {
        id: "books",
        label: "Books & Publications",
        href: "/study-materials/books"
      },
      {
        id: "sample-papers",
        label: "Sample Papers",
        href: "/study-materials/sample-papers"
      },
      {
        id: "previous-year",
        label: "Previous Year Papers",
        href: "/study-materials/previous-year"
      }
    ]
  },
  {
    id: "scholarships",
    label: "Scholarships",
    children: [
      {
        id: "adsat",
        label: "ADSAT",
        description: "Allen Digital Scholarship Aptitude Test",
        href: "/scholarships/adsat"
      },
      {
        id: "tallentex",
        label: "TALLENTEX",
        description: "Talent Encouragement Exam",
        href: "/scholarships/tallentex"
      },
      {
        id: "merit-scholarship",
        label: "Merit Scholarship",
        href: "/scholarships/merit"
      }
    ]
  }
];

// Allen.in style menu configuration
export const allenStyleMenuItems: MenuItemProps[] = [
  {
    id: "courses",
    label: "Courses",
    children: [
      {
        id: "govt-services",
        label: "Govt Services",
        description: "RAS, SSC",
        children: [
          {
            id: "ras",
            label: "RAS",
            href: "/courses/ras"
          },
          {
            id: "ssc",
            label: "SSC",
            href: "/courses/ssc"
          },
          {
            id: "delhi-police",
            label: "Delhi Police",
            href: "/courses/delhi-police"
          }
        ]
      },
      {
        id: "foundation",
        label: "Foundation",
        description: "Class 10-12",
        children: [
          {
            id: "class-10",
            label: "Class 10th",
            href: "/courses/class-10"
          },
          {
            id: "class-11",
            label: "Class 11th Arts",
            href: "/courses/class-11-arts"
          },
          {
            id: "class-11",
            label: "Class 11th Commerce",
            href: "/courses/class-11-commerce"
          },
          {
            id: "class-12",
            label: "Class 12th Arts",
            href: "/courses/class-12-arts"
          },
          {
            id: "class-12",
            label: "Class 12th Commerce",
            href: "/courses/class-12-commerce"
          }
        ]
      }
    ]
  },
  {
    id: "exams",
    label: "Exams",
    children: [
      {
        id: "competitive-exams",
        label: "Competitive Exams",
        children: [
          {
            id: "defence-exams",
            label: "Defence Forces Exams",
            href: "/exams/engineering"
          },
          {
            id: "state-services-exams",
            label: "State Govt Exams",
            href: "/exams/medical"
          },
          {
            id: "civil-services-exams",
            label: "Civil Services",
            href: "/exams/civil-services"
          }
        ]
      },
      {
        id: "board-exams",
        label: "Board Exams",
        children: [
          {
            id: "cbse",
            label: "CBSE",
            href: "/exams/cbse"
          },
          {
            id: "icse",
            label: "ICSE",
            href: "/exams/icse"
          },
          {
            id: "state-boards",
            label: "State Boards",
            href: "/exams/state-boards"
          }
        ]
      }
    ]
  },
  {
    id: "study-materials",
    label: "Study Materials",
    children: [
      {
        id: "books",
        label: "Books & Publications",
        href: "/study-materials/books"
      },
      {
        id: "sample-papers",
        label: "Sample Papers",
        href: "/study-materials/sample-papers"
      },
      {
        id: "previous-year",
        label: "Previous Year Papers",
        href: "/study-materials/previous-year"
      },
      {
        id: "mock-tests",
        label: "Mock Tests",
        href: "/study-materials/mock-tests"
      }
    ]
  },
  {
    id: "scholarships",
    label: "Scholarships",
    children: [
      {
        id: "adsat",
        label: "ADSAT",
        description: "Allen Digital Scholarship Aptitude Test",
        href: "/scholarships/adsat"
      },
      {
        id: "tallentex",
        label: "TALLENTEX",
        description: "Talent Encouragement Exam",
        href: "/scholarships/tallentex"
      },
      {
        id: "merit-scholarship",
        label: "Merit Scholarship",
        href: "/scholarships/merit"
      }
    ]
  },
  {
    id: "about-us",
    label: "About Us",
    children: [
      {
        id: "our-story",
        label: "Our Story",
        href: "/about/our-story"
      },
      {
        id: "leadership",
        label: "Leadership",
        href: "/about/leadership"
      },
      {
        id: "careers",
        label: "Careers",
        href: "/careers"
      },
      {
        id: "contact",
        label: "Contact Us",
        href: "/contact"
      }
    ]
  },
  {
    id: "admissions",
    label: "Admissions",
    href: "/admissions"
  }
];
