import { IsOptional } from 'class-validator';

export class UpdateFlashcardDto {
  @IsOptional()
  question: string;

  @IsOptional()
  answer: string;
}
