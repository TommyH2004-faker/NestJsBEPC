import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from 'src/entity/comment.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
@Controller('comments')
export class CommentsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly commentsService: CommentsService) {
  }
  @Get()
  findAll() {
    return this.commentsService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: number) {
    return this.commentsService.findById(id);
  }
//   @Post()
//   async createComment(
//     @Body() data: { content: string; userId: number; movieId: number },
//   ): Promise<Comment> {
//     // Kiểm tra dữ liệu đầu vào
//     if (!data.content || !data.userId || !data.movieId) {
//       throw new BadRequestException('Content, userId, and movieId are required.');
//     }

//     // Gọi service để tạo comment
//     return this.commentsService.create(data);
//   }
//   @Delete(':id')
//   async deleteComment(@Param('id') id: number): Promise<void> {
//     return this.commentsService.delete(id);
//   }
//     @UseGuards(JwtAuthGuard)
//  @Patch(':id/:movieId')
//   async updateComment(
//     @Param('id') id: string,
//     @Param('movieId') movieId: string,
//     @Req() req,
//     @Body() data: Partial<Comment>,
//   ): Promise<Comment> {
//     // Kiểm tra dữ liệu đầu vào
//     if (!data.content) {
//       throw new BadRequestException('Content is required for updating a comment.');
//     }

//     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
//     const userId = req.user.sub; // lấy từ JWT
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//     return this.commentsService.update(+id, +movieId, userId, data);
//   }
  @UseGuards(JwtAuthGuard)
  @Post()
  async createComment(
    @Body() data: { content: string; movieId: number },
    @Req() req: any,
  ): Promise<Comment> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const user = req.user as { id: number };
    if (!user.id || isNaN(user.id)) {
      throw new BadRequestException('Invalid user ID in JWT token.');
    }

    if (!data.content || !data.movieId) {
      throw new BadRequestException('Content and movieId are required.');
    }

    return this.commentsService.create({
      content: data.content,
      userId: user.id,
      movieId: data.movieId,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateComment(
    @Param('id') id: number,
    @Body() updateData: Partial<Comment>,
    @Req() req: any,
  ): Promise<Comment> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const user = req.user as { id: number };
    if (!user.id || isNaN(user.id)) {
      throw new BadRequestException('Invalid user ID in JWT token.');
    }

    if (!updateData.content) {
      throw new BadRequestException('Content is required for updating a comment.');
    }

    return this.commentsService.updateByUser(id, user.id, updateData);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteComment(@Param('id') id: number, @Req() req: any): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const user = req.user as { id: number };
    if (!user.id || isNaN(user.id)) {
      throw new BadRequestException('Invalid user ID in JWT token.');
    }

    return this.commentsService.deleteByUser(id, user.id);
  }


//   @UseGuards(JwtAuthGuard)
// @Delete(':id')
// async deleteComment(@Param('id') id: number, @Req() req: any): Promise<void> {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
//   const user = req.user as { id: number; role: string };

//   if (user.role === 'admin') {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
//     return this.commentsService.delete(id);
//   }

//   return this.commentsService.deleteByUser(id, user.id);
// }
@Delete('/comment/:id')
async deleteComment2(@Param('id') id: number): Promise<void> {
  await this.commentsService.delete(id);
}
  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() data: Partial<Comment>,
  ): Promise<Comment> {
    return this.commentsService.update(id, data);
  }
}

