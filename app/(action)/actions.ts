const students: Data[] = [];

export interface Data {
  regdNo: string;
  marks: {
    tenth: number;
    inter: number;
    btech: number;
  };
  name: string;
  backlogs: number;
  skills: string[];
}

export function addStudent(data: Data) {
  students.push(data);
}

export function getAllStudents() {
  return students;
}
