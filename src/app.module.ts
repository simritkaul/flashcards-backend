import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FlashcardsModule } from './flashcards/flashcards.module';

@Module({
  imports: [PrismaModule, FlashcardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
