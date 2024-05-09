import { Artist } from 'src/artist/entities/artist.entity';
import { Song } from 'src/song/entities/song.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Album {
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

  @Column()
  numberOfSales: number;

  @OneToMany(() => Artist, (artist) => artist.album)
  artist: Artist;

  /*
An album can have many songs and a song can have many albums or none at all ( single )
  */
  @ManyToMany(() => Song, (song) => song.albums)
  @JoinColumn()
  songs: Song[];
}
