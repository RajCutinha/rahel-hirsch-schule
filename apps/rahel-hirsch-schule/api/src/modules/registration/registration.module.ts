import { Module } from '@nestjs/common';

import { RegistrationController } from './controllers/registration.controller';
import { RegistrationService } from './services/registration.service';

@Module({
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
