
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/'});
  };

  return (
  <button
    type="button"
    onClick={handleSignOut}
    className="flex items-center ms-4 text-blue-950 hover:text-teal-500">
      <LogOut size={16} /> <p className="ms-2">Logout</p>
      </button>
  );
}