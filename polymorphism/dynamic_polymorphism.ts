class Person {
  introduce() {
    console.log("Hello my friend, how are you ?");
  }
}

class Someone extends Person {
  introduce(name?: string) {
    if (name) {
      console.log(`Hello my friend, i am ${name}, how are you  ?`);
    } else {
      super.introduce();
    }
  }
}

const saba = new Someone();
saba.introduce("saba");
