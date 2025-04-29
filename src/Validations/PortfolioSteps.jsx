import * as Yup from "yup";

export const basicInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .max(50, "First Name must be less than 50 characters"),

  lastName: Yup.string()
    .required("Last Name is required")
    .max(50, "Last Name must be less than 50 characters"),

  gender: Yup.string().required("Gender is required"),
  // .oneOf(["male", "female", "other"], "Invalid gender value"),

  jobTitle: Yup.string()
    .required("Job Title is required")
    .max(100, "Job Title must be less than 100 characters"),

  bio: Yup.string().max(250, "Bio must be less than 250 characters").nullable(),
});

export const contactInfoSchema = Yup.object({
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address"),
  relate: Yup.string()
    .required("Relation is required")
    .max(50, "Relation must be less than 50 characters"),
  city: Yup.string()
    .required("City is required")
    .max(100, "City name must be less than 100 characters"),
  country: Yup.string()
    .required("Country is required")
    .max(100, "Country name must be less than 100 characters"),
});

export const experienceSchema = Yup.object({
  jobTitle: Yup.string().required("Job Title is required"),
  companyName: Yup.string().required("Company Name is required"),
  duration: Yup.string().required("Duration is required"),
  description: Yup.string().required("Description / Achievements are required"),
  location: Yup.string().max(
    100,
    "Location name must be less than 100 characters"
  ),
  skillsUsed: Yup.string().max(
    200,
    "Skills used must be less than 200 characters"
  ),
});

export const projectSchema = Yup.object({
  projectName: Yup.string().required("Project Name is required"),
  projectDescription: Yup.string().required("Project Description is required"),
  projectImage: Yup.string().url("Enter a valid image URL"),
  liveLink: Yup.string().url("Enter a valid live link"),
  githubLink: Yup.string()
    .url("Enter a valid GitHub repository link")
    .required("GitHub link is required"),
});

export const skillsSchema = Yup.object({
  skillName: Yup.string().required("Skill Name is required"),
  category: Yup.string().required("Category is required"),
  proficiency: Yup.string().oneOf(
    ["Beginner", "Intermediate", "Expert"],
    "Select a valid proficiency level"
  ),
  experienceYears: Yup.number()
    .typeError("Experience must be a number")
    .positive("Experience must be a positive number")
    .integer("Experience must be a whole number"),
});

export const educationSchema = Yup.object({
  degreeName: Yup.string().required("Degree Name is required"),
  universityName: Yup.string().required("University/College Name is required"),
  duration: Yup.string().required("Duration is required"),
  description: Yup.string().max(
    500,
    "Description must be less than 500 characters"
  ),
  location: Yup.string().max(100, "Location must be less than 100 characters"),
  relevantCoursework: Yup.string().max(
    300,
    "Coursework must be less than 300 characters"
  ),
});

export const socialLinksSchema = Yup.object({
  twitter: Yup.string().url("Enter a valid Twitter URL"),
  linkedin: Yup.string().url("Enter a valid LinkedIn URL"),
  github: Yup.string().url("Enter a valid GitHub URL"),
  portfolio: Yup.string().url("Enter a valid portfolio URL"),
  other: Yup.string().url("Enter a valid URL"),
});

export const achievementsSchema = Yup.object({
  title: Yup.string().required("Achievement Title is required"),
  description: Yup.string().required("Description is required"),
  date: Yup.string().required("Date is required"),
  relatedLink: Yup.string().url("Enter a valid URL for reference"),
});

export const certificationsSchema = Yup.object({
  certificationName: Yup.string().required("Certification Name is required"),
  issuingOrganization: Yup.string().required(
    "Issuing Organization is required"
  ),
  date: Yup.string().required("Date is required"),
  certificateLink: Yup.string().url("Enter a valid URL for the certificate"),
});
