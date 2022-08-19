class Department {
	protected name: string;
	protected employees: string[] = [];
	static deptId: string = '2010';
	constructor(name: string) {
		this.name = name;
		console.log(Department.deptId);
	}

	get getName(): string {
		return this.name;
	}
	set getName(name: string) {
		this.name = name;
	}

	describe(this: Department) {
		console.log('Department is ' + this.name);
	}
	addEmployee(employee: string) {
		this.employees.push(employee);
	}
	printInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class AccountingDepartment extends Department {
	private constructor(department: string, private reports: string[]) {
		super(department);
	}
	addReport(report: string) {
		this.reports.push(report);
	}
	addEmployee(employee: string): void {
		this.employees.push(employee);
	}
}

const engineering = new Department('Engineering');
engineering.addEmployee('Michael');
engineering.addEmployee('Joey');
engineering.printInformation();
engineering.describe();

// const Accounting = new AccountingDepartment('Accounting');
