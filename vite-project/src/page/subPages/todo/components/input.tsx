import React, { useState } from "react";
import styled from "styled-components";
import TodoBox from "./todoBox";

export interface TodoListProps {
  id: number;
  content: string;
}
export default function TodoInput() {
  const [value, setValue] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const todoAdd = () => {
    if (value) {
      setTodoList([
        ...todoList,
        {
          id: todoList.length,
          content: value,
        },
      ]);
      setValue("");
    } else {
      alert("할일을 입력해주세요.");
    }
  };
  return (
    <>
      <TodoInputWrap>
        <Input value={value} onChange={onChange} />
        <Button onClick={todoAdd}>할일추가</Button>
      </TodoInputWrap>

      <TodoBox todoList={todoList} />
    </>
  );
}

export const TodoInputWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input.attrs({
  type: "text",
  placeholder: "할일을 입력하세요",
})`
  border: 1px solid #ddd;
  padding: 10px;
  width: calc(100% - 100px);
  outline: none;
  border-radius: 5px 0 0 5px;
  box-sizing: border-box;
`;
export const Button = styled.button.attrs({
  type: "button",
})`
  width: 100px;
  padding: 10px;
  border: 1px solid #ddd;
  border-left: none;
  background: #2231ff;
  border-radius: 0 5px 5px 0;
  color: #fff;

  &:hover {
    background: #1e2c98;
  }
  &:active {
    background: #1e2c98;
  }
`;
