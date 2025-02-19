import { Module, DynamicModule} from '@nestjs/common';

import { DatabaseModule } from '../modules/db'
import { RegistrationModule } from '../modules/registration';

@Module({})
export class AppModule {
  static forRoot(env: Record<string, string>): DynamicModule {
    return {
      module: AppModule,
      imports: [DatabaseModule.forRoot(env), RegistrationModule]
    }
  }
}
