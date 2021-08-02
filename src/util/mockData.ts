import {
  tTarget,
  tCourse,
  tCurriculum,
  tSection,
  tLecture,
  tQuiz,
  tNote,
} from "./types";

const tt: tTarget = {
  target:
    "Anyone who wants to learn ReactJS from the start, Intermediate or Beginner Level",
};
const lecture1: tLecture = {
  title: "Why React",
  video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  slide: "",
};
const lect2: tLecture = {
  title: "What Problem does reactJS solves",
  video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  slide: "",
};
const q1: tQuiz = {
  title: "",
  question: "",
  answers: [],
  correct: "",
  relatedToSection: "",
};
const n1: tNote = { title: "", note: "" };

const section1: tSection = {
  sid: 1,
  title: "Introduction",
  description: "Basic introductin to get you started in ReactJS",
  lecture: [lecture1, lect2],
  quiz: q1,
  note: n1,
};
const sec2: tSection = {
  sid: 2,
  title: "Folder Structure",
  description:
    "A brief walkthrough of the folder structure of a typical ReactJS Application",
  lecture: [
    { title: "The Public Folder", video: "", slide: "" },
    { title: "The src Folder", video: "", slide: "" },
    { title: "Assets", video: "", slide: "" },
    { title: "Views", video: "", slide: "" },
    { title: "Components", video: "", slide: "" },
  ],
  note: { title: "", note: "" },
};
const sec3: tSection = {
  sid: 3,
  title: "Getting Started With ReactJS",
  description: "Lets write our first line of code",
  lecture: [
    { title: "NPM or YARN Install", video: "", slide: "" },
    { title: "Enviroment Setup", video: "", slide: "" },
    { title: "Enviroment Variables", video: "", slide: "" },
  ],
  note: { title: "", note: "" },
};
const sec4: tSection = {
  sid: 4,
  title: "Your First Component",
  description: "Lets write our first react component",
  lecture: [
    { title: "Introduction to JSX", video: "", slide: "" },
    { title: "Build A Time Component", video: "", slide: "" },
  ],
  note: { title: "", note: "" },
};
const sec5: tSection = {
  sid: 5,
  title: "State in React",
  description: "Lets manage application state in React",
  lecture: [
    { title: "Local state", video: "", slide: "" },
    { title: "Global State", video: "", slide: "" },
    { title: "State and re-rendering", video: "", slide: "" },
    { title: "State Immutability", video: "", slide: "" },
  ],
  note: { title: "", note: "" },
};
const sec6: tSection = {
  sid: 6,
  title: "A CRUD Application",
  description: "Lets build a classlist application",
  lecture: [
    { title: "Create", video: "", slide: "" },
    { title: "Read", video: "", slide: "" },
    { title: "Update", video: "", slide: "" },
    { title: "Delete", video: "", slide: "" },
  ],
  note: { title: "", note: "" },
};
const curr: tCurriculum = {
  section: [section1, sec2, sec3, sec4, sec5, sec6],
};
export const demoCourse: tCourse = {
  id: "c1",
  author: "philip@myeverlasting.net",
  courseName: "Intro To ReactJS",
  target: tt,
  curriculum: curr,
  brief: "",
  createdOn: new Date(),
  updatedOn: new Date(),
};
export const fCourse = [
  {
    title: "Introduction To React",
    brief: "Learn the most popular javascript framework",
    startsOn: new Date(),
    thumbnail: "https://dummyimage.com/300x150/000/fff",
    isFree: true,
  },
  {
    title: "Introduction To Kotlin",
    brief: "Beyond android development, build java applicdations with Kotlin0",
    startsOn: new Date(),
    thumbnail: "https://dummyimage.com/300x150/000/fff",
    isFree: true,
  },
];
