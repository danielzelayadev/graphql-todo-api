import { Todo } from 'gql';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 0,
      description: 'Dinner',
      done: true,
    },
    {
      id: 1,
      description: 'Go to sleep',
      done: false,
    },
  ];

  getAll() {
    return this.todos;
  }

  getById(id: number) {
    const todo = this.todos.find(t => t.id === id);

    if (!todo) throw new Error('Todo not found.');

    return todo;
  }
}
