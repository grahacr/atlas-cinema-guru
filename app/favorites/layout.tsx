import "@/app/global.css";
import { SessionProvider } from "next-auth/react";

type Props = {
    children: React.ReactNode;
};

export default function FavoritesLayout({ children }: Props) {
    return (
    <SessionProvider>
        {children}
    </SessionProvider>
    );
}