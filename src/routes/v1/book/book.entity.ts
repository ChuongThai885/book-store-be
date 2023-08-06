import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    OneToMany,
    ManyToOne,
    JoinTable,
} from 'typeorm';
import { Genre } from '../genre/genre.entity';
import { OrderDetail } from '../orderDetail/orderDetail.entity';
import { Author } from '../author/author.entity';

@Entity({ name: 'books' })
export class Book {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToMany(() => Genre)
    @JoinTable()
    genres: Genre[];

    @ManyToOne(() => Author, (author) => author.books)
    author: Author;

    @Column({
        name: 'book_cover_src',
        default: '',
    })
    bookCoverImage: string;

    @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
    orderDetails: OrderDetail[];
}
