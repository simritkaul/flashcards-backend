import { Module } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { FlashcardsController } from './flashcards.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [FlashcardsService, PrismaService],
  controllers: [FlashcardsController],
})
export class FlashcardsModule {}
