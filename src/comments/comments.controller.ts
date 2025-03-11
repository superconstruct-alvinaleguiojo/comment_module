import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get() // GET /comments
  findAll(): Promise<Comment[]> {
    return this.commentsService.findAll();
  }

  @Get(':id') // GET /comments/:id
  findOne(@Param('id') id: string): Promise<Comment> {
    return this.commentsService.findOne(id);
  }

  @Post() // POST /comments
  create(@Body() comment: Partial<Comment>): Promise<Comment> {
    return this.commentsService.create(comment);
  }

  @Put(':id') // PUT /comments/:id
  update(@Param('id') id: string, @Body() comment: Partial<Comment>): Promise<Comment> {
    return this.commentsService.update(id, comment);
  }

  @Delete(':id') // DELETE /comments/:id
  remove(@Param('id') id: string): Promise<void> {
    return this.commentsService.remove(id);
  }
}
