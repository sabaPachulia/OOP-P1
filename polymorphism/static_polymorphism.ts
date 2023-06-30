interface Type1 {
  a: string | number;
  b: string | number;
}

class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: string | number, b: string | number): string | number | void {
    if (typeof a === "string" && typeof b === "string") {
      return a + " " + b;
    }
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
  }
}

const calculator = new Calculator();
console.log(calculator.add(2, 3));
console.log(calculator.add("Hello", "World"));
