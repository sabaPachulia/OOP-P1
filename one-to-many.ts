class User {
  transaction: Transaction[] = [];
  constructor(private readonly name: string, private readonly id: string) {}
}

class Transaction {
  date: Date;
  constructor(private readonly user: User, date: Date) {
    this.date = date;
  }
}

const user = new User("saba", "123");
const transaction = new Transaction(user, new Date());

user.transaction.push(transaction);
