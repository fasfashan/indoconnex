import Header from "./Header";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p bg-neutral-100">{children}</main>
    </div>
  );
}
