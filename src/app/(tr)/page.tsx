import { Landing } from "@/components/Landing";
import { content } from "@/data/content";

export default function Home() {
  return <Landing dict={content.tr} />;
}
