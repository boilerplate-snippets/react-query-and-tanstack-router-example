import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddPost = () => {
  const { register, handleSubmit } = useForm<{
    title: string;
    body: string;
  }>();

  const onSubmit = (data: { title: string; body: string }) => {
    mutate(data);
  };

  const { mutate } = useMutation({
    mutationFn: async (newPost: { title: string; body: string }) => {
      return await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} type="text" placeholder="Title" />
      <textarea {...register("body")} placeholder="Body" />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
