import { Album } from 'src/album/entities/album.entity';
import { Artist } from 'src/artist/entities/artist.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  duration: number;

  @Column()
  year: string;

  @Column()
  artistId: number;

  @Column()
  genre: string;

  @OneToMany(() => Artist, (artist) => artist.song)
  @JoinColumn()
  artist: Artist;

  @ManyToMany(() => Album, (album) => album.songs)
  albums: Album[];
}
