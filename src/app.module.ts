import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthorModule } from './routes/v1/author/author.module';
import { BookModule } from './routes/v1/book/book.module';
import { GenreModule } from './routes/v1/genre/genre.module';
import { OrderModule } from './routes/v1/order/order.module';
import { OrderDetailModule } from './routes/v1/orderDetail/orderDetail.module';
import { UserModule } from './routes/v1/user/user.module';

@Module({
    imports: [
        AuthModule,
        AuthorModule,
        BookModule,
        GenreModule,
        OrderModule,
        OrderDetailModule,
        UserModule,
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: process.env.DB_USER_NAME,
            password: process.env.DB_USER_PASSWORD,
            database: process.env.DB_NAME,
            entities: [],
            synchronize: true,
            autoLoadEntities: true,
        }),
    ],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
