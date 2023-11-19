import { Module } from '@nestjs/common';
import { BackupService } from '../backup.service/backup.service';

@Module({
  // controllers: [],
  providers: [BackupService],
})
export class BackupModule {}
