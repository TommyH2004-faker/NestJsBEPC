import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/entity/comment.entity';
import { User } from 'src/entity/User';
import { Movie } from 'src/entity/movie.entity';
import { MoviesModule } from '../movies/movies.module';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService], // ❌ KHÔNG đưa MoviesService vào đây!
  exports: [CommentsService],
  imports: [
    TypeOrmModule.forFeature([Comment, User, Movie]),
    MoviesModule, // ✅ Import MoviesModule để dùng MoviesService qua DI
  ],
})
export class CommentsModule {}
