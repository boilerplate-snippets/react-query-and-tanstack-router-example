import { createFileRoute } from "@tanstack/react-router";
import AddPost from "../modules/AddPost";

export const Route = createFileRoute("/add-post")({
  component: () => <AddPost />,
});
