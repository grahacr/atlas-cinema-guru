
import LoggedInUser from "@/components/NavBar";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
        {user && (
        <LoggedInUser name={user.name ?? undefined} avatar={user.image ?? undefined} />
        )}
      </div>
  );
}
