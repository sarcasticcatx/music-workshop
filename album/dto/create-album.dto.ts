import { IsArray, IsNumber, IsString } from 'class-validator';
import { Song } from 'src/song/entities/song.entity';

export class CreateAlbumDto {
  @IsString()
  title: string;

  @IsNumber()
  duration: number;

  @IsString()
  year: string;

  @IsNumber()
  artistId: number;

  @IsString()
  genre: string;

  @IsNumber()
  numberOfSales: number;
}
