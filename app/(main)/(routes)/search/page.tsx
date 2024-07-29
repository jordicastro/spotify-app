
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./_components/SearchContent";
import ToggleArtistOrSongSearch from "./_components/ToggleArtistOrSongSearch";


interface SearchProps {
    searchParams: {
        title: string;
    }
}

const Search = async ({ searchParams }: SearchProps) => {
    // const songs = await getSongsByTitle(searchParams.title);

    const handleOnToggle = (isArtist: boolean) => {
        // pass isArtist to SearchContent to determine if we are searching for an artist or a song
    }

    return (
        <div
            className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto"
        >
            <Header
                className="from-bg-neutral-900"
            >
                <div
                    className="mb-2 flex flex-col gap-y-6"
                >
                    <h1
                        className="text-white text-3xl font-semibold"
                    >
                        Search
                    </h1>
                    <SearchInput />
                    <ToggleArtistOrSongSearch />
                </div>  
            </Header>
            <SearchContent />
        </div>
    )
}

export default Search;