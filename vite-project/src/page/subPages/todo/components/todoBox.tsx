import { useState, useEffect } from "react";
import styled from "styled-components";
import type { TodoListProps } from "./input";

export default function TodoBox({ todoList }: { todoList: TodoListProps[] }) {
  const [list, setList] = useState<TodoListProps[]>([]);
  useEffect(() => {
    setList(todoList);
  }, [todoList]);

  const todoDelete = (id: number) => {
    setList(list.filter((todo) => todo.id !== id));
  };
  return (
    <TodoBoxWrap>
      <TodoList>
        {list.map((todo) => {
          return (
            <TodoItem key={todo.id}>
              <input type="checkbox" />
              <TodoContent>{todo.content}</TodoContent>
              <TodoDelete
                onClick={() => {
                  todoDelete(todo.id);
                  console.log(list);
                }}
              >
                삭제
              </TodoDelete>
            </TodoItem>
          );
        })}
      </TodoList>
    </TodoBoxWrap>
  );
}

export const TodoBoxWrap = styled.div`
  width: 100%;
  padding: 10px;
`;

export const TodoList = styled.ul``;

export const TodoItem = styled.li`
  & + & {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #a2a2a2;
  }
  display: flex;
  align-items: center;
`;

export const TodoContent = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 700;
`;

export const TodoDelete = styled.button.attrs({
  type: "button",
})`
  margin-left: auto;
  width: 80px;
  height: 30px;
  border-radius: 10px;
  background: #ff226c;
  color: #fff;
`;
