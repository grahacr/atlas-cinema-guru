
import { signOut } from "@/auth";

export default function SignOutButton() {
  return (
    <form
    action={async () => {
      await signOut();
    }}>
      <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-teal-300 p-3 text-sm font-medium hover:bg-primary-foreground hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3">
        <div className="hidden md:block text-blue-950">Sign Out</div>
      </button>
    </form>
  );
}