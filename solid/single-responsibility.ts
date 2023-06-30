class UserManager {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  private generateUniqueId(): string {
    return "uniqueId";
  }

  private isValidUser(user: User): boolean {
    return true;
  }

  createUser(user: User): void {
    if (!this.isValidUser(user)) {
      throw new Error("Invalid user data");
    }

    const userId = this.generateUniqueId();

    this.database.saveUser(userId, user);
  }
}
