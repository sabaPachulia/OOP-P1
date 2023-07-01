class President {
  country: Country;
  constructor(private readonly name: string) {}
}

class Country {
  constructor(private readonly president: President) {}
}

const presidnet = new President("saba");
const country = new Country(presidnet);

presidnet.country = country;
