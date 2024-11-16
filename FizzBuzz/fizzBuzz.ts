export default class FizzBuzz{
    FizzMultiplier = 3;
    BuzzMultiplier = 5;
    fizzBuzzValue = "";
    FIZZ = 'Fizz';
    BUZZ = 'Buzz';
    print(number :number) {
        if (this.isMultipleOf(number, this.FizzMultiplier))
            this.fizzBuzzValue += this.FIZZ;
        if (this.isMultipleOf(number, this.BuzzMultiplier))
            this.fizzBuzzValue += this.BUZZ
        if (this.fizzBuzzValue !== "")
            return this.fizzBuzzValue
        return `${number}`;
    }

    private isMultipleOf(number: number, divider: number) {
        return number % divider === 0;
    }
}
