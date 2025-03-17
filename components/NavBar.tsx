
import SignOutButton from "./LogOut"
import { auth } from "@/auth";
import Image from "next/image";
import icon from "../assets/icon.png"

type LoggedInUserProps = {
    name?: string;
    avatar?: string;
};
export default async function LoggedInUser(props: LoggedInUserProps) {
    const session = await auth();

    return (
        <div className="bg-teal-300 w-full flex items-center justify-between text-midnightBlue shadow-md p-2">
            <div className="flex items-center">
                <Image
                    src={icon}
                    alt="Cinema guru logo"
                    width={30}
                    height={30}
                    color="teal-300"
                    />
                    <p className="text-blue-950 p-2 font-bold">Cinema Guru</p>
            </div>
        <div className="flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-primary-foreground hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">
                <p className="text-blue-950">Welcome, {session?.user?.email}</p>
            </div>
            <SignOutButton />
        </div>
        </div>

    )
}

