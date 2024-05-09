import { Album } from 'src/album/entities/album.entity';
import { Song } from 'src/song/entities/song.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: number;

  @Column()
  stageName: string;

  @Column()
  age: number;

  //An artist can have many songs and a song can have one artist
  @ManyToOne(() => Song, (song) => song.artist)
  @JoinColumn()
  song: Song;

  //An artist can have many albums and an album can have one artist
  @ManyToOne(() => Album, (album) => album.artist)
  @JoinTable()
  album: Album;
}
