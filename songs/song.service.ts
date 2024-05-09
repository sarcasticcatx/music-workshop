import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateSongDto } from './dto/update-song.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './entities/song.entity';
import { NotFoundError, generate } from 'rxjs';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongService {
  constructor(@InjectRepository(Song) private songsRepo: Repository<Song>) {}

  getAllSongs() {
    return this.songsRepo.find({ loadRelationIds: true });
  }

  async getSongById(id: number) {
    const foundSong = await this.songsRepo.findOne({
      where: { id },
      relations: {
        artist: true,
        albums: true,
      },
    });

    if (!foundSong) throw new NotFoundException('Song not found');

    return foundSong;
  }

  createSong(songData: CreateSongDto) {
    return this.songsRepo.save(songData);
  }

  async updateSong(songId: number, updateData: UpdateSongDto) {
    const foundSong = await this.getSongById(songId);

    Object.assign(foundSong, updateData);

    await this.songsRepo.save(foundSong);
  }
}
