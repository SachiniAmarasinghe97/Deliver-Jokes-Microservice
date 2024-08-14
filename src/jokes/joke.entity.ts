import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'jokes' })
export class Joke {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    type:string;

    @Column()
    content: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'reviewed_at' })
    reviewedAt: Date;
}