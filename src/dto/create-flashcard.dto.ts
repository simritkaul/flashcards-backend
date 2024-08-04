import { IsNotEmpty } from 'class-validator';

export class CreateFlashcardDto {
  @IsNotEmpty()
  question: string;

  @IsNotEmpty()
  answer: string;
}
