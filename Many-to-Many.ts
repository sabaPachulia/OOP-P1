class Student {
  name: string;
  age: string;
  teachers: Teacher[] = [];

  addNewTeacher(teacher: Teacher[]) {
    this.teachers.push(...teacher);
  }
}

class Teacher {
  name: string;
  field: string;
  students: Student[] = [];

  addNewStudent(student: Student[]) {
    this.students.push(...student);
  }
}

const student1 = new Student();
const student2 = new Student();

const teacher1 = new Teacher();
const teacher2 = new Teacher();

teacher1.addNewStudent([student1, student2]);
teacher2.addNewStudent([student2]);

student1.addNewTeacher([teacher1, teacher2]);
student2.addNewTeacher([teacher1]);
