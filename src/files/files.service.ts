import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class FilesService {
  async getFiles(): Promise<Array<any>> {
    const fs = require('fs');
    return await fs.readdirSync(join(__dirname, '..', 'static'));
  }
}
