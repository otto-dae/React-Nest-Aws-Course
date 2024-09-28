import { UUID } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manager {
    @PrimaryGeneratedColumn('uuid')
    managerId: string;
    @Column('text')
    managerFullName: string;
    @Column('float')
    managerFullSalary: number;
    @Column('text')
    mangaerEmail: string;
    @Column('text')
    managerPhoneNumber: string;
}
