import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { ForgotPasswordDto, NewPasswordDto } from './dto/forgot-password.dto';
import { ContactAdminDto } from './dto/contact-admin.dto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('me')
  @UseGuards(AuthGuard('user'))
  get(@Req() req: any) {
    return req.user;
  }

  @Post('forgot-password')
  forgotPassword(@Body() dto:ForgotPasswordDto){
    return this.service.forgotPassword(dto);
  }

  @Post('new-password')
  @UseGuards(AuthGuard('user'))
  newPassword(@Body() dto:NewPasswordDto, @Req() req:any){
    return this.service.newPassword(dto,req.user);
  }

  @Post('contact')
  contactToAdmin(@Body() dto:ContactAdminDto){
    return this.service.contactAdmin(dto);
  }
}
