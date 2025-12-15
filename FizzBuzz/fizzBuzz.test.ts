import { describe, expect, it } from 'vitest'
import FizzBuzz from "./fizzBuzz";

describe('FizzBuzz basics', () => {
    it("should return a number if he is not multiple of 3 or/and 5", () => {
        const fizzBuzz = new FizzBuzz();
        const number = 1;
        const result = fizzBuzz.print(number);
        expect(result).toBe("1");
    });

    it("should return Fizz if the number is multiple of 3", () => {
        const fizzBuzz = new FizzBuzz();
        const number = 3;
        const result = fizzBuzz.print(number);
        expect(result).toBe("Fizz");
    });

    it("should return Buzz if the number is multiple of 5", () => {
        const fizzBuzz = new FizzBuzz();
        const number = 5;
        const result = fizzBuzz.print(number);
        expect(result).toBe("Buzz");
    });

    it("should return FizzBuzz if the number is multiple of 3 AND 5", () => {
        const fizzBuzz = new FizzBuzz();
        const number = 15;
        const result = fizzBuzz.print(number);
        expect(result).toBe("FizzBuzz");
    });
})

