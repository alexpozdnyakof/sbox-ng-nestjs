import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { extname, join } from 'path';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  @Get()
  async getAssets(@Res() res) {
    const fs = require('fs');
    const result = await this.fileService.getFiles();
    const mime = require('mime-types');
    const files = result
      .filter(item => !/(^|\/)\.[^\/\.]/g.test(item))
      .map(name => ({
        name: name.split('.')[0],
        extension: extname(name),
        size: fs.statSync(join(__dirname, '..', `static/${name}`)).size,
        path: `/assets/${name}`,
        mimeType: mime.lookup(name),
      }));
    return res.status(HttpStatus.OK).json(files);
  }

  constructor(private fileService: FilesService) {}
}
