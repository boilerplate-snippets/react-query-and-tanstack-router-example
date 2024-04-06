import { createFileRoute } from "@tanstack/react-router";
import About from "../modules/About";

export const Route = createFileRoute("/about")({
  component: () => <About />,
});
