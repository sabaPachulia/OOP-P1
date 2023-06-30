interface NotificationSender {
  sendNotification(message: string): void;
}

class MyApp {
  constructor(private readonly sender: NotificationSender) {}
}

class SendOnEmmail implements NotificationSender {
  sendNotification(message: string): void {
    console.log("send notificainos on email", message);
  }
}

class SendOnPhone implements NotificationSender {
  sendNotification(message: string): void {
    console.log("send notificainos on phone", message);
  }
}

// We can easily add new features (notification senders) to our code without modifying existing ones.
