import { Injectable } from '@nestjs/common';
import * as fibonacci from 'fibonacci';

@Injectable()
export class AppService {
  getHello(): number {
    return fibonacci.iterate(process.env.FIBONACCI || 3000);
  }
}
