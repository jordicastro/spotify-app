import Button from "@/components/Button";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import ListItem from "@/components/ListItem";
import { Song } from "@/types";
import { Section } from "lucide-react";
import { songs } from "@/testSongs";


export default function Home() {

  const isLoggedIn: boolean = true;

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
            <ListItem image="/images/liked.png" name={"Liked Songs"} href={"liked"} />
            <ListItem image="/images/onRepeat.png" name={"On Repeat"} href={"on-repeat"} />
            <ListItem image="/images/playlist1.svg" name={"Playlist 1"} href={"playlist1"} />
            <ListItem image="/images/playlist2.svg" name={"Playlist 2"} href={"playlist2"} />

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

    {isLoggedIn && (
      <HomeSection
        title="Your Top 10 Albums of All Time"
        songs={songs}
        type="carousel"
      />
    )}

    <HomeSection
      title="New Music"
      songs={songs}
      type="grid"
    />

    </div>
  )
}
