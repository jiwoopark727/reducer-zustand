import { TTodo } from '../../types/todo';
import TodoListItem from "./TodoListItem";
import { TodoReducerAction } from '../../reducer/TodoReducer';
import { useTodoStore } from '../../stores/todoStore';

const TodoList = () => {
  const { todos } = useTodoStore();
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-hidden">
        {
          todos.map((todo)=>{
            return <TodoListItem key={todo.id} todo={todo}/>
          })
        }
      </ul>
    </>
  );
};
export default TodoList;
