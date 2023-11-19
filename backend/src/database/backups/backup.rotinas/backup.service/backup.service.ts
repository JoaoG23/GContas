import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { NEST_PGPROMISE_CONNECTION } from 'nestjs-pgpromise';
import { IDatabase } from 'pg-promise';

@Injectable()
export class BackupService {
  private readonly logger = new Logger(BackupService.name);
  constructor(
    @Inject(NEST_PGPROMISE_CONNECTION) private readonly pg: IDatabase<any>,
  ) {}

  // @Cron('45 * * * * *')
  handleCron() {
    console.log('Carregado mais uma vez');
    this.logger.debug('Called when the current second is 45');
  }

  @Cron('*/50 * * * * *')
  async fazerBackupBanco() {
    console.log('Carregado mais uma vez');
    try {
      const data = await this.pg.any('SELECT * FROM usuarios');
      this.logger.log(data);
    } catch (e) {
      // error;
      this.logger.log(e);
    }
  }
}
