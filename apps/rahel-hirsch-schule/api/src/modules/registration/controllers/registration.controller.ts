import { Controller, Post, Body } from '@nestjs/common';

@Controller('registration')
export class RegistrationController {
  @Post()
  getAll(@Body() formdata: { name: string }): string {
    console.log(formdata);
    return 'This action returns all registrations';
  }
}
