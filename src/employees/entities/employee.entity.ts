import { Location } from "src/locations/entities/location.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
    @Column("text")
    email: string;
    @Column({
        type: 'text',
        nullable: true
    })
    photoUrl: string;

    @ManyToOne(() => Location, (location) => location.employee)
    @JoinColumn({
        name:"locationid"
    })
    location: Location;
}
