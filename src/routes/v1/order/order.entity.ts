import { OrderDetail } from './../orderDetail/orderDetail.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity({ name: 'orders' })
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'order_date',
    })
    orderDate: string;

    @Column({
        type: 'boolean',
        name: 'payment_status',
        default: false,
    })
    paymentStatus: string;

    @ManyToOne(() => User, (user) => user.orders)
    user: User;

    @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
    orderDetails: OrderDetail[];
}
