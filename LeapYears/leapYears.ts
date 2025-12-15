export default class Year {
    isLeapYear(year :number) {
        return this.isMultipleOf(year, 4) && !this.isMultipleOf(year, 100) || this.isMultipleOf(year, 400);
    }

    isMultipleOf(year :number, divider: number) {
        return year % divider === 0;
    }
}
