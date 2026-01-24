import { useState } from "react";
import { AppBar } from "~/components/AppBar";
import { SearchResultList } from "~/pages/SearchResultList";
import { PageBase } from "~/components/PageBase";

export function meta() {
  return [
    { title: "Games, Gift Cards, Top-Ups & More | Best Deals" },
    {
      name: "description",
      content:
        "Buy video game keys for PC and Console! Acquire Steam, Origin, Uplay, Epic Games, GoG, Xbox, Nintendo, and many other digital game keys cheaper! Visit Eneba.",
    },
  ];
}

const reportButtonStyle: React.CSSProperties = {
  position: "fixed",
  bottom: "0px",
  right: "0px",
  backgroundColor: "white",
  color: "black",
  padding: "8px",
  cursor: "pointer",
};

export default function Home() {
  const [submittedSearchValue, setSubmittedSearchValue] = useState("");

  function handleSearchSubmit(newSubmittedSearchValue: string) {
    setSubmittedSearchValue(newSubmittedSearchValue);
  }

  return (
    <>
      <AppBar onSearchSubmit={handleSearchSubmit} />
      <PageBase>
        <SearchResultList searchValue={submittedSearchValue} />
      </PageBase>
      <button style={reportButtonStyle}>Report a problem</button>
    </>
  );
}
