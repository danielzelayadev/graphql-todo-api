import { Resolver, Args, Query } from '@nestjs/graphql';
import { TodosService } from './todos.service';

@Resolver('Todo')
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query('todo')
  getTodo(@Args('id') id: number) {
    return this.todosService.getById(id);
  }

  @Query('todos')
  getAllTodos() {
    return this.todosService.getAll();
  }
}
