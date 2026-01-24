import { useState } from "react";
import { SERVER_URL } from "~/common/server";
import type { AppBarProps } from "~/props/AppBarProps";
import "~/styles/AppBar.css";

export function AppBar({ onSearchSubmit }: AppBarProps) {
  const [searchValue, setSearchValue] = useState("");

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onSearchSubmit(searchValue);
    }
  }

  function handleClickClear() {
    setSearchValue("");
  }

  return (
    <header>
      <a style={{ marginRight: "20px", cursor: "pointer" }}>
        <img
          src={`${SERVER_URL}/images/branding/logo.svg`}
          title="Eneba"
          style={{ minWidth: "155px" }}
        />
      </a>
      <div id="search-field">
        {resources.searchIcon}
        <input
          placeholder="Search for games, top-ups and more"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyUp={handleKeyUp}
          style={{ width: "100%", minHeight: "55px", fontWeight: 800 }}
        />
        <button onClick={handleClickClear} id="clear-search-button">
          {resources.clearSearchIcon}
        </button>
      </div>
      <div style={{ marginRight: "auto" }} title="Settings">
        <button className="app-bar-button" style={{ display: "flex" }}>
          <img
            src={`${SERVER_URL}/images/flags/lithuania.svg`}
            style={{ width: "16px", marginRight: "5px" }}
          />
          <span style={{ whiteSpace: "nowrap" }}>English EU | EUR</span>
        </button>
      </div>
      <a className="app-bar-button" title="Wishlist">
        {resources.wishlistIcon}
      </a>
      <button className="app-bar-button" title="My shopping cart">
        {resources.shoppingCartIcon}
      </button>
      <a className="app-bar-button" title="Profile">
        {resources.userIcon}
      </a>
    </header>
  );
}

const resources = {
  searchIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      style={{ minWidth: "24px" }}
    >
      <g clipPath="url(#svg-a569c57c2371d97aff5702b1d52a7c91__a)">
        <path
          d="M17 17L22.7499 22.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M1 10.25C1 12.7033 1.97455 15.056 3.70926 16.7907C5.44397 18.5254 7.79675 19.5 10.25 19.5C12.7033 19.5 15.056 18.5254 16.7907 16.7907C18.5254 15.056 19.5 12.7033 19.5 10.25C19.5 7.79675 18.5254 5.44397 16.7907 3.70926C15.056 1.97455 12.7033 1 10.25 1C7.79675 1 5.44397 1.97455 3.70926 3.70926C1.97455 5.44397 1 7.79675 1 10.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="svg-a569c57c2371d97aff5702b1d52a7c91__a">
          <rect width="24" height="24" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  ),
  clearSearchIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="14px"
      style={{ minWidth: "16px" }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 1.67L12.59.31 7 5.69 1.41.31 0 1.67l5.59 5.37L0 12.42l1.41 1.36L7 8.4l5.59 5.38L14 12.42 8.41 7.04z"
      ></path>
    </svg>
  ),
  wishlistIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width="24px"
      style={{ minWidth: "24px" }}
    >
      <path
        d="M12,21.844l-9.588-10A5.672,5.672,0,0,1,1.349,5.293h0a5.673,5.673,0,0,1,9.085-1.474L12,5.384l1.566-1.565a5.673,5.673,0,0,1,9.085,1.474h0a5.673,5.673,0,0,1-1.062,6.548Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  shoppingCartIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16px"
      style={{ minWidth: "24px" }}
    >
      <path
        d="M12 12.7499H5.386C5.1498 12.75 4.9212 12.6664 4.74067 12.5139C4.5602 12.3615 4.43953 12.1502 4.4 11.9173L2.642 1.58395C2.60233 1.35119 2.4816 1.13996 2.30113 0.987686C2.12067 0.835406 1.89213 0.7519 1.656 0.751953H1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10.75 14.75C10.8881 14.75 11 14.6381 11 14.5C11 14.3619 10.8881 14.25 10.75 14.25"
        stroke="currentColor"
      ></path>
      <path
        d="M10.75 14.75C10.6119 14.75 10.5 14.6381 10.5 14.5C10.5 14.3619 10.6119 14.25 10.75 14.25"
        stroke="currentColor"
      ></path>
      <path
        d="M5.75 14.75C5.88807 14.75 6 14.6381 6 14.5C6 14.3619 5.88807 14.25 5.75 14.25"
        stroke="currentColor"
      ></path>
      <path
        d="M5.75 14.75C5.61193 14.75 5.5 14.6381 5.5 14.5C5.5 14.3619 5.61193 14.25 5.75 14.25"
        stroke="currentColor"
      ></path>
      <path
        d="M4.03141 9.75007H12.0787C12.5247 9.75001 12.9578 9.60094 13.3093 9.32647C13.6608 9.05207 13.9105 8.66801 14.0187 8.23541L14.9854 4.36873C15.0038 4.29499 15.0052 4.21802 14.9895 4.14366C14.9737 4.0693 14.9412 3.99952 14.8944 3.93961C14.8476 3.87971 14.7878 3.83126 14.7194 3.79795C14.6511 3.76465 14.5761 3.74736 14.5001 3.7474H3.01075"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  userIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      style={{ minWidth: "24px" }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.667 1.75a5.417 5.417 0 1 0 0 10.834 5.417 5.417 0 0 0 0-10.834Zm-2.77 2.647a3.917 3.917 0 1 1 5.54 5.54 3.917 3.917 0 0 1-5.54-5.54ZM6.07 16.902A7.917 7.917 0 0 1 19.583 22.5a.75.75 0 0 0 1.5 0 9.417 9.417 0 1 0-18.833 0 .75.75 0 0 0 1.5 0c0-2.1.834-4.113 2.319-5.598Z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
};
