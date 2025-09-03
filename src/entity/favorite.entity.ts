// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   CreateDateColumn,
//   ManyToOne,
// } from 'typeorm';
// import { User } from './User';
// import { Movie } from './movie.entity';

// @Entity()
// export class Favorite {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ManyToOne(() => User, (user) => user.favorites)
//   user: User;

//   @ManyToOne(() => Movie, (movie) => movie.favorites)
//   movie: Movie;

//   @CreateDateColumn()
//   created_at: Date;
// }
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './User';
import { Movie } from './movie.entity';
@Entity()
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.favorites, { eager: true })
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.favorites, { eager: true })
  movie: Movie;

  @CreateDateColumn()
  created_at: Date;
}
