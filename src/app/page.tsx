import { Card } from "@/components/card";
import { getTodoData } from "@/service/query/todo-service";

export default async function Home() {
  const data = await getTodoData();

  return (
    <div className="container max-w-[1200px] mx-auto">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
