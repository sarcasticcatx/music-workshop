import { IsNumber, IsString } from 'class-validator';

export class CreateArtistDto {
  @IsString()
  firstName: string;

  @IsNumber()
  lastName: number;

  @IsString()
  stageName: string;

  @IsNumber()
  age: number;
}
