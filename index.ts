function formatString(input: string, toUpper?: boolean) {
  if (toUpper || typeof toUpper === "undefined") return input.toUpperCase();
  else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const highRatedItems = items?.filter((value) => value?.rating >= 4);
  return highRatedItems;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

class Vehicle {
  private _make: string;
  private _year: number;
  constructor(make: string, year: number) {
    this._make = make;
    this._year = year;
  }
  getInfo() {
    console.log(`Make: ${this._make}, Year: ${this._year}`);
  }
}
class Car extends Vehicle {
  private _model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this._model = model;
  }
  getModel() {
    console.log(`Model: ${this._model}`);
  }
}

function processValue(value: string | number): number {
  return typeof value === "string" ? value?.length : value * 2;
}

interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  let maxPrice = products[0];
  if (products?.length) {
    products?.filter((value) => {
      if (value?.price > maxPrice?.price) maxPrice = value;
    });
    return maxPrice;
  }
  return null;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  if (n >= 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n ** 2);
      }, 1000);
    });
  }
  return Promise.reject("Negative number not allowed");
}
