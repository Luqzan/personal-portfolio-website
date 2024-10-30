import Box from "@/app/ui/components/Box";
import SignInSkeleton from "@/app/ui/components/skeletons/SignInSkeleton";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <Box>
      <div className="flex flex-col gap-6">
        <h2 className="font-mono text-2xl tracking-widest">SIGN IN</h2>

        <ClerkLoaded>
          <SignIn />
        </ClerkLoaded>

        <ClerkLoading>
          <SignInSkeleton />
        </ClerkLoading>
      </div>
    </Box>
  );
}
