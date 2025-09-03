import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from 'src/entity/favorite.entity';
import { Movie } from 'src/entity/movie.entity';
import { User } from 'src/entity/User';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService],
  exports: [FavoritesService],
  imports: [TypeOrmModule.forFeature([Favorite, Movie, User])],
})
export class FavoritesModule {}
