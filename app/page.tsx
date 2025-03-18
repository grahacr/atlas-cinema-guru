import { auth } from "@/auth";
import LoggedInUser from "@/components/NavBar";
import SideBar from "@/components/SideBar";


export default async function Page() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-teal-300 w-full flex items-center justify-between p-4 shadow-md">
        <LoggedInUser name={user?.name ?? ""} />
        </div>

        <div className="flex flex-1">
          <SideBar email={user?.email ?? null} />
          <div className="flex-1 p-6">

          </div>
        </div>
        </div>
  );
}
