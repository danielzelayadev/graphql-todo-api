import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TodosModule } from 'todos/todos.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.gql'],
      definitions: {
        path: join(process.cwd(), 'src/gql.ts'),
        outputAs: 'class',
      },
    }),
    TodosModule,
  ],
})
export class AppModule {}
