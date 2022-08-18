var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name) {
        this.employees = [];
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log('Department is ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(department, reports) {
        var _this = _super.call(this, department) || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
    };
    AccountingDepartment.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return AccountingDepartment;
}(Department));
var engineering = new Department('Engineering');
engineering.addEmployee('Michael');
engineering.addEmployee('Joey');
engineering.printInformation();
engineering.describe();
