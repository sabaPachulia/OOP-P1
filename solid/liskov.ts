class Teacher {
  lesson() {
    console.log("Learn new things to students.");
  }

  test() {
    console.log("make  tests for final exam");
  }
}

class MathTeacher extends Teacher {
  lesson() {
    console.log("Learn 3 new formulas.");
  }

  test() {
    console.log("make math tests for final exam");
  }
}

class School {
  constructor(private readonly teacher: Teacher) {}
}

// here we can easly change supperclass Teacher to subclasses MathTeacher or vice versa
