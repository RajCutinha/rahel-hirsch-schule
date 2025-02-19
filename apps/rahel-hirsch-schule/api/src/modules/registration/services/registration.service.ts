import { Injectable, Inject } from '@nestjs/common';

import { DATABASE } from '../../db';

@Injectable()
export class RegistrationService {
  constructor(@Inject(DATABASE) private readonly db: DATABASE) {}
}
