interface Employee {
    name: string;
    age: number;
}

const MAJORITY_AGE = 18;

export default class EmployeeReport {
    getAdults(employees: Employee[]) {
        const validEmployee: string[] = [];

        employees.forEach(employee => {
            if (employee.age >= MAJORITY_AGE)
                validEmployee.push(employee.name)
        })
        return validEmployee
    }

    sortAscending(employees: Employee[]) {
        return employees.map(employee => employee.name).sort()
    }

    sortDescending(employees: Employee[]) {
        return employees.map(employee => employee.name).sort().reverse()
    }

    capitalizeNames(employees: Employee[]) {
        return employees.map(employee => employee.name.toUpperCase())
    }
}