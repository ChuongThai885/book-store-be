import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Order } from '../order/order.entity';
import { Book } from '../book/book.entity';

@Entity({ name: 'order_detail' })
export class OrderDetail {
    @PrimaryColumn()
    orderId: number;

    @PrimaryColumn()
    bookId: number;

    @ManyToOne(() => Order, (order) => order.orderDetails)
    @JoinColumn({ name: 'orderId' })
    order: Order;

    @ManyToOne(() => Book, (book) => book.orderDetails)
    @JoinColumn({ name: 'bookId' })
    book: Book;

    @Column()
    quantity: number;

    @Column()
    price: number;
}
