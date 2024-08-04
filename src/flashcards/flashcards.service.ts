import { Injectable } from '@nestjs/common';
import { Flashcard } from '@prisma/client';
import { CreateFlashcardDto } from 'src/dto/create-flashcard.dto';
import { UpdateFlashcardDto } from 'src/dto/update-flashcard.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FlashcardsService {
  constructor(private prismaService: PrismaService) {}

  async createFlashcard(data: CreateFlashcardDto): Promise<Flashcard> {
    return this.prismaService.flashcard.create({ data });
  }

  async getAllFlashcards(): Promise<Flashcard[]> {
    return this.prismaService.flashcard.findMany();
  }

  async getFlashcard(id: number): Promise<Flashcard> {
    return this.prismaService.flashcard.findUnique({ where: { id } });
  }

  async updateFlashcard(
    id: number,
    data: UpdateFlashcardDto,
  ): Promise<Flashcard> {
    return this.prismaService.flashcard.update({ where: { id }, data });
  }

  async deleteFlashcard(id: number): Promise<Flashcard> {
    return this.prismaService.flashcard.delete({ where: { id } });
  }
}
