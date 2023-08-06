import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetail } from './orderDetail.entity';

@Module({
    imports: [TypeOrmModule.forFeature([OrderDetail])],
})
export class OrderDetailModule {}
