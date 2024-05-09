import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  createSong(@Body() createSongDto: CreateSongDto) {
    return this.songService.createSong(createSongDto);
  }

  @Get()
  getAllSongs() {
    return this.songService.getAllSongs();
  }

  @Get(':id')
  getSongById(@Param('id') songId: number) {
    return this.songService.getSongById(songId);
  }

  @Patch(':id')
  updateSong(@Param('id') songId: number, @Body() updateData: UpdateSongDto) {
    return this.songService.updateSong(songId, updateData);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.songService.remove(+id);
  // }
}
