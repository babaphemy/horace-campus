export type tUser = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
  createdOn: Date;
  modifiedOn: Date;
  roles: string[];
  dp?: string;
};
export type tAddress = {
  street?: string;
  city?: String;
  zipcode?: Number;
  county?: string;
  country: string;
  owner: tUser;
};
export type tLogin = {
  email?: string;
  password?: string;
};
export type tTarget = {
  expectation?: string;
  requirements?: string;
  target?: string;
};
export type tLecture = {
  title: string;
  video: string;
  slide?: string;
};
export type tQuiz = {
  title: string;
  question: string;
  answers: string[];
  correct: string;
  relatedToSection: string;
};
export type tNote = {
  title: string;
  note: string;
};
export type tSection = {
  sid: number;
  title: string;
  description: string;
  lecture?: tLecture[];
  quiz?: tQuiz;
  note?: tNote;
};
export type tCurriculum = {
  section: tSection[];
};
export type tCourse = {
  id: string;
  courseName: string;
  brief: string;
  target: tTarget;
  createdOn: Date;
  updatedOn: Date;
  curriculum?: tCurriculum;
};
