import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full max-w-lg border rounded-lg p-8 flex flex-col gap-6 bg-background">
      <h2 className="font-mono text-2xl tracking-widest">LOGIN</h2>

      <SignIn />
    </div>
  );
}
