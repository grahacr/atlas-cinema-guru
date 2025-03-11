import { signIn } from "@/auth";

export default async function Page() {
  const handleLogin = async () => {
    await signIn("github", {callbackUrl: "/ui" }); 
  };
  return (
    <div className="flex items-center justify-center h-screen">
        <button
        onClick={handleLogin}
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Sign in with GitHub
          </button>
    </div>
  );
}
