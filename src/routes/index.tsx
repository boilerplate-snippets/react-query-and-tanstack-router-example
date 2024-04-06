import { createFileRoute } from "@tanstack/react-router";
import Homeapge from "../modules/Homeapge";

export const Route = createFileRoute("/")({
  component: () => <Homeapge />,
});
