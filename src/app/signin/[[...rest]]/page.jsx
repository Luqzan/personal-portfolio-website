import SignInSkeleton from "@/app/ui/components/skeletons/SignInSkeleton";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-[250px] w-full max-w-lg border rounded-lg p-8 flex flex-col gap-6 bg-background">
      <h2 className="font-mono text-2xl tracking-widest">SIGN IN</h2>

      <ClerkLoaded>
        <SignIn />
      </ClerkLoaded>

      <ClerkLoading>
        <SignInSkeleton />
      </ClerkLoading>
    </div>
  );
}
