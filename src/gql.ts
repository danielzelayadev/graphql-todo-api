/* tslint:disable */
export abstract class IQuery {
    abstract todo(id: number): Todo | Promise<Todo>;

    abstract todos(): Todo[] | Promise<Todo[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class Todo {
    id: number;
    description: string;
    done: boolean;
}
