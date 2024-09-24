import { ModeToggle } from "./mode-toggle";

export function AppHeader() {
  return (
    <header className="flex w-full justify-between p-10">
      <h1>Next.js Starter</h1>
      <ModeToggle />
    </header>
  );
}
