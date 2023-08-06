import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Book } from '../book/book.entity';

@Entity({ name: 'genres' })
export class Genre {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
