import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [
    GraphQLModule.forRoot({autoSchemaFile: join(process.cwd(), 'apps/record-collection-server/src/app/schema/schema.gql'),}),
    RecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
