import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Homeapge = () => {
  const { isLoading, data } = useQuery({
    queryFn: async () => {
      return await axios.get<
        {
          userId: number;
          id: number;
          title: string;
          body: string;
        }[]
      >("https://jsonplaceholder.typicode.com/posts");
    },
    queryKey: ["posts"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.data.map((p) => (
        <div key={p.id}>
          <h1>{p.title}</h1>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Homeapge;
