import { auth } from "@/auth";
import LoggedInUser from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import SearchFilter from "@/components/SearchFilter";
import GenreSearch from "@/components/GenreSearch";
import { fetchGenres } from "@/lib/data";
import MovieTitles from "@/components/MovieTitles";

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  const genres = await fetchGenres();


  return (
    <div className="flex flex-col h-screen">
      <div className="bg-teal-300 w-full flex items-center justify-between shadow-md">
        <LoggedInUser name={user?.name ?? ""} />
        </div>

        <div className="flex flex-1">
          <SideBar email={user?.email ?? null} />

          <div className="flex flex-1 flex-col px-4 py-4">
            <div className="flex justify-between mb-6">
              <div className="flex-grow">
                <SearchFilter />
              </div>
              <div className="flex-shrink-0 ml-auto">
                <GenreSearch genres={genres} />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <MovieTitles genres={genres} />
            </div>
          </div>
        </div>
      </div>
  );
}
