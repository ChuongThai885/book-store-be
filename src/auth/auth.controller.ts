import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup() {
        return { msg: 'I am sign up' };
    }

    @Post('signin')
    signin() {
        return 'I am sign in';
    }
}
