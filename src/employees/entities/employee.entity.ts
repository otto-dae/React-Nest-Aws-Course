import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    employeeId: string;
    @Column("text")
    name:  string;
    @Column("text")
    lastName:  string;
    @Column("text")
    phoneNumber: string;
}
