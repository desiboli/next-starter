import { env } from "@/env/server";

export default function Home() {
  console.log(env.DATABASE_URL);
  return (
    <main className="h-full w-full">
      <h1>Hello World!</h1>
    </main>
  );
}
