import { useEffect, useState } from "react";

import type { Game } from "~/models/Game";
import type { SearchResultListProps } from "~/props/SearchResultListProps";

import { API_URL } from "~/common/server";
import { Loader } from "~/components/Loader";
import { SearchResult } from "~/components/SearchResult";

export function SearchResultList({ searchValue }: SearchResultListProps) {
  const [searchResults, setSearchResults] = useState<Game[] | null>(null);

  useEffect(() => {
    setSearchResults(null);
    fetch(
      `${API_URL}/list?${new URLSearchParams({ search: searchValue }).toString()}`,
    )
      .then((res) => {
        if (res.ok) {
          res
            .json()
            .then((data: Game[]) => {
              setSearchResults(data);
            })
            .catch(() => console.log("Error"));
        } else {
          console.log("Error");
        }
      })
      .catch(() => console.log("Error"));
  }, [searchValue]);

  if (searchResults === null) {
    return <Loader />;
  }

  if (searchResults.length === 0) {
    return (
      <div
        style={{
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span>Sorry, we could not find any match to:</span>
        <span style={{ fontWeight: "600", lineHeight: "1.5" }}>
          {searchValue}
        </span>
      </div>
    );
  }

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <span>Results found: </span>
        <span style={{ fontWeight: 800 }}>{searchResults.length}</span>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {searchResults.map((game) => (
          <SearchResult key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}
