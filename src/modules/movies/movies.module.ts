import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movie } from '@src/entity/movie.entity';
import { Review } from '@src/entity/review.entity';
import { Comment } from '@src/entity/comment.entity';
import { Genre } from '@src/entity/genre.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie, Review, Comment, Genre]), // ✅ Chỉ cần dòng này
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesService],
})
export class MoviesModule {}
