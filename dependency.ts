class SendMessage {}

class RegistrationClass {
  constructor(private readonly sendMessage: SendMessage) {}
}

const MessageBroker = new SendMessage();
const Registration1 = new RegistrationClass(MessageBroker);
