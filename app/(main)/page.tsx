import Button from "@/components/Button";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import PlaylistItem from "@/components/PlaylistItem";
import { songs } from "@/testSongs";


export default async function Home() {

  const isLoggedIn: boolean = false;

  const greeting = isLoggedIn ? "Jump back in" : "Welcome to Jotify";


  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1
            className="text-white text-3xl font-semibold my-6"
          >
            {greeting}
          </h1>

          {isLoggedIn ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-3 mt-4"
          >
            <PlaylistItem image="/images/liked.png" name={"Liked Songs"} href={"liked"} />
            <PlaylistItem image="/images/onRepeat.png" name={"On Repeat"} href={"on-repeat"} />
            <PlaylistItem image="/images/playlist1.svg" name={"Playlist 1"} href={"playlist1"} />
            <PlaylistItem image="/images/playlist2.svg" name={"Playlist 2"} href={"playlist2"} />

          </div>
          ) : (
            <Button
              className="w-64 font-extrabold"
            >
              Get Started
            </Button>
          )}


        </div>
      </Header>

    {/* {isLoggedIn && (
      <HomeSection
        title="Your Top 10 Albums of All Time"
        songs={songs}
        type="carousel"
      />
    )} */}

    <HomeSection
      title="New Releases"
      type="grid"
    />

    </div>
  )
}
