// Trending Courses Data

export interface CourseData {
  id: string;
  category: string;
  image: string;
  title: string;
}

export const coursesData: CourseData[] = [
  // Class 10-12 Courses
  {
    id: "class10-1",
    category: "Class 10-12",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F4949148403_400x400%252010th%2520rbse%2520logo%2520%25281%2529.webp&w=256&q=75",
    title: "Class 10th"
  },
  {
    id: "class10-2",
    category: "Class 10-12",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F387920404_400x400%252011th%2520arts%2520logo%2520%25281%2529.webp&w=256&q=75",
    title: "Class 11th Arts"
  },
  {
    id: "class10-3",
    category: "Class 10-12",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F3020126405_400x400%252011th%2520commerce%2520%2520logo%2520%25281%2529.webp&w=256&q=75",
    title: "Class 11th Commerce"
  },
  {
    id: "class10-4",
    category: "Class 10-12",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F387920404_400x400%252011th%2520arts%2520logo%2520%25281%2529.webp&w=256&q=75",
    title: "Class 12th Arts"
  },
  {
    id: "class10-5",
    category: "Class 10-12",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F6876610745_400x400%252012th%2520commerce%2520logo%2520%25281%2529.webp&w=256&q=75",
    title: "Class 12th Commerce"
  },


  // Civil Services Exams Course
  {
    id: "Civil Services Exams-1",
    category: "Civil Services Exams",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F6057976418_400x400%2520RAS.webp&w=256&q=75",
    title: "RAS"
  },


  // Centeral Govt Exams Course
  {
    id: "Centeral Govt Exams-1",
    category: "Centeral Govt Exams",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F6057976418_400x400%2520RAS.webp&w=256&q=75",
    title: "SSC"
  },
  {
    id: "Centeral Govt Exams-2",
    category: "Centeral Govt Exams",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F4909380432_400x400%2520delhi%2520police%2520logo.webp&w=256&q=75",
    title: "Delhi Police"
  },
  {
    id: "Centeral Govt Exams-3",
    category: "Centeral Govt Exams",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F6057976418_400x400%2520RAS.webp&w=256&q=75",
    title: "Railway"
  },
  {
    id: "Centeral Govt Exams-4",
    category: "Centeral Govt Exams",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F6057976418_400x400%2520RAS.webp&w=256&q=75",
    title: "FCI"
  },
  {
    id: "Centeral Govt Exams-5",
    category: "Centeral Govt Exams",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F6057976418_400x400%2520RAS.webp&w=256&q=75",
    title: "LIC & other Insurace"
  },
  {
    id: "Centeral Govt Exams-6",
    category: "Centeral Govt Exams",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F6057976418_400x400%2520RAS.webp&w=256&q=75",
    title: "IB"
  },


  // Defence Forces Exams Course
  {
    id: "Defence Forces Exams-1",
    category: "Defence Forces Exams",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F6057976418_400x400%2520RAS.webp&w=256&q=75",
    title: "Army"
  },
  {
    id: "Defence Forces Exams-2",
    category: "Defence Forces Exams",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F6057976418_400x400%2520RAS.webp&w=256&q=75",
    title: "Airforce"
  },
  {
    id: "Defence Forces Exams-3",
    category: "Defence Forces Exams",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F6057976418_400x400%2520RAS.webp&w=256&q=75",
    title: "NDA/CDS"
  },

  // NET Course
  {
    id: "NET",
    category: "NET",
    image: "https://utkarsh.com/_next/image?url=https%3A%2F%2Fapps-s3-prod.utkarshapp.com%2Fadmin_v1%2Fcategory_management%2Fsub_stream%2F6057976418_400x400%2520RAS.webp&w=256&q=75",
    title: "NET"
  },
];