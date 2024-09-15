"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let EmployeesService = class EmployeesService {
    constructor() {
        this.employees = [{
                id: (0, uuid_1.v4)(),
                name: "alberto",
                lastName: "costas",
                phoneNumber: "2130948"
            },
            {
                id: (0, uuid_1.v4)(),
                name: "jose",
                lastName: "perez",
                phoneNumber: "65787689"
            }];
    }
    create(createEmployeeDto) {
        createEmployeeDto.id = (0, uuid_1.v4)();
        this.employees.push(createEmployeeDto);
        return createEmployeeDto;
    }
    findAll() {
        return this.employees;
    }
    findOne(id) {
        const employee = this.employees.filter((employee) => employee.id === id)[0];
        if (!employee)
            throw new common_1.NotFoundException();
        return employee;
    }
    update(id, updateEmployeeDto) {
        let employeeToUpdate = this.findOne(id);
        employeeToUpdate = {
            ...employeeToUpdate,
            ...updateEmployeeDto,
        };
        this.employees = this.employees.map((employee) => {
            if (employee.id === id) {
                employee = employeeToUpdate;
            }
            if (!employeeToUpdate)
                throw new common_1.NotFoundException();
            return employee;
        });
        return employeeToUpdate;
    }
    remove(id) {
        const employeeFound = this.findOne(id);
        this.employees = this.employees.filter((employee) => employee.id != id);
        return this.employees;
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)()
], EmployeesService);
//# sourceMappingURL=employees.service.js.map