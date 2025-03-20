
import { auth } from "@/auth";
import SideBar from "@/components/SideBar";
import LoggedInUser from "@/components/NavBar";
import { fetchGenres, fetchFavorites } from "@/lib/data";
import { JSX } from "react";
import FavoritesMovieTitles from "@/components/favoritesMovieTitles";
import { UsersTitle } from "@/lib/definitions";

export default async function FavoritesPage({ searchParams }: { searchParams: any }): Promise<JSX.Element> {
  const session = await auth();
  if (!session) {
    return <div>Unauthorized</div>;
  }
  
  const user = session.user;
  const email = user?.email;
  if (!email) {
    return <div>Email not available</div>;
  }

  const genres = await fetchGenres();
  const favorites = await fetchFavorites(1, email);

  if (favorites.length === 0 ) {
    return <div>No favorites found</div>;
  }
  
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-teal-300 w-full flex items-center justify-between shadow-md">
        <LoggedInUser name={user?.name ?? ""} />
      </div>
      
      <div className="flex flex-1">
        <SideBar email={user?.email ?? null} />
        
        <div className="flex flex-1 flex-col px-4 py-4">
          <h1 className="text-3xl font-semibold text-center mt-9">Favorites</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            <FavoritesMovieTitles userEmail={user?.email ?? ""} favorites={favorites} />
          </div>
        </div>
      </div>
    </div>
    );
  }