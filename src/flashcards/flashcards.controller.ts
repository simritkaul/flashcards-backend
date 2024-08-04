import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { CreateFlashcardDto } from 'src/dto/create-flashcard.dto';
import { UpdateFlashcardDto } from 'src/dto/update-flashcard.dto';

@Controller('api/v1/flashcards')
export class FlashcardsController {
  constructor(private flashcardsService: FlashcardsService) {}

  @Post()
  createFlashcard(@Body() data: CreateFlashcardDto) {
    return this.flashcardsService.createFlashcard(data);
  }

  @Get()
  getAllFlashcards() {
    return this.flashcardsService.getAllFlashcards();
  }

  @Get(':id')
  getFlashcard(@Param('id') id: string) {
    return this.flashcardsService.getFlashcard(Number(id));
  }

  @Put(':id')
  updateFlashcard(@Param('id') id: string, @Body() data: UpdateFlashcardDto) {
    return this.flashcardsService.updateFlashcard(Number(id), data);
  }

  @Delete()
  deleteFlashcard(@Param('id') id: string) {
    return this.flashcardsService.deleteFlashcard(Number(id));
  }
}
