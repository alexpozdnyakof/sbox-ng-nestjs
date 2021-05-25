import { Logger, LoggerService } from '@nestjs/common';

export class AppLogger extends Logger implements LoggerService {
  log(message: string) {
    super.log(message);
  }
  error(message: string, trace: string) {
    /* your implementation */
  }
  warn(message: string) {
    /* your implementation */
  }
  debug(message: string) {
    /* your implementation */
  }
  verbose(message: string) {
    /* your implementation */
  }
}
