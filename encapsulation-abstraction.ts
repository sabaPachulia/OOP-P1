class Registration {
  private password: string;
  email: string;

  constructor(email: string, password: string) {
    this.password = password;
    this.email = email;
  }

  hashPassword(password: string): string {
    const hasPassword = password + "random string";
    return hasPassword;
  }

  saveInDb(user: any) {
    //save
  }

  addNewUser() {
    const user = {
      email: this.email,
      password: this.hashPassword(this.password),
    };
    this.saveInDb(user);
  }
}

const gio = new Registration("giopachulia@gmail.com", "password");
gio.addNewUser();
