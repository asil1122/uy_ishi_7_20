"use client";
import React from "react";
import { deleteTodo } from "@/service/mutation/todo-mutation";

export const Card = ({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: number;
}) => {
  const [isloading, setLoading] = React.useTransition();
  console.log(isloading);

  const deleteData = () => {
    setLoading(async () => {
      try {
        const res = await deleteTodo(id);
        console.log(res);
      } catch (error) {}
    });
  };
  return (
    <div>
      <h1 className="text-4xl text-blue-400">{title}</h1>
      <p>{description}</p>
      <button
        disabled={isloading}
        onClick={deleteData}
        className="p-[10px] bg-red-400"
      >
        {isloading ? "Loading..." : "delete"}
      </button>
    </div>
  );
};
