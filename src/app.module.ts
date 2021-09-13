import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { ServersModule } from './servers/servers.module';

@Module({
  imports: [
    ServersModule,
    ConfigModule.forRoot()
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
