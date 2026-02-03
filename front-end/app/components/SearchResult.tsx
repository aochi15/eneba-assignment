import type { SearchResultProps } from "~/props/SearchResultProps";

import { SERVER_URL } from "~/common/server";
import "~/styles/SearchResult.css";

const priceFormatter: Intl.NumberFormat = new Intl.NumberFormat("sfb", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

export function SearchResult({ game }: SearchResultProps) {
  const displayName: string = `${game.name} ${game.keyType} Key (${game.platform}) ${game.region}`;
  const actualPrice: number = game.discount
    ? (game.price * (100 - game.discount)) / 100
    : game.price;

  return (
    <div
      className="search-result"
      style={{ border: game.cashback ? "1px solid #63e3c2" : "none" }}
      title={displayName}
    >
      <div className="image-container">
        <img src={`${SERVER_URL}/images/games/${game.imageFileName}`} />
        {game.cashback && (
          <div className="cashback-indicator">
            {resources.cashbackIcon}
            <span>CASHBACK</span>
          </div>
        )}
      </div>
      <div className="details">
        <div className="name-container">
          <span>{displayName}</span>
        </div>
        <div className="region-container">{game.region}</div>
        <div className="original-price-container">
          <span>From </span>
          <span
            style={{ textDecoration: game.discount ? "line-through" : "none" }}
          >
            {priceFormatter.format(game.price)}
          </span>
          {game.discount && (
            <span className="reduction-text"> -{game.discount}%</span>
          )}
        </div>
        <div className="actual-price-container">
          <span>{priceFormatter.format(actualPrice)}</span>
          {resources.priceWarningIcon}
        </div>
        {game.cashback && (
          <div className="reduction-text">
            <span>Cashback: </span>
            {priceFormatter.format((actualPrice * game.cashback) / 100)}
          </div>
        )}
        <div className="wishlist-count-container">
          {resources.wishlistIcon}
          <span>{game.wishlistCount}</span>
        </div>
      </div>
    </div>
  );
}

const resources = {
  cashbackIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      style={{ minWidth: "16px" }}
    >
      <g clipPath="url(#svg-18cf84541850d46718ea7beaaffdc9fc__a)">
        <path
          d="M6.55768 14.5095C8.12445 14.8566 9.76387 14.6269 11.1749 13.8626C12.586 13.0983 13.674 11.8506 14.2392 10.3487C14.8044 8.84672 14.8088 7.1913 14.2517 5.68633C13.6946 4.18137 12.6134 2.92785 11.2065 2.15593C9.79954 1.384 8.1614 1.14548 6.59277 1.48414C5.02415 1.8228 3.6303 2.71594 2.66718 3.99953C1.70407 5.28313 1.23625 6.87109 1.34969 8.47182C1.46308 10.0726 2.15012 11.5787 3.28463 12.7137L4.37371 13.8028M1.47198 13.8013H4.37233V10.901"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8 5.33398V8.00065V10.6673"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5.33301 8H10.6663"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="svg-18cf84541850d46718ea7beaaffdc9fc__a">
          <rect width="16" height="16" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  ),
  priceWarningIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="16"
      style={{ minWidth: "16px" }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.69 6.13c0-.25.2-.44.43-.44h.44a.88.88 0 0 1 .88.87v2.19a.44.44 0 0 0 .43.44h.44a.44.44 0 0 1 0 .87h-.44a1.31 1.31 0 0 1-1.3-1.31V6.56h-.45a.44.44 0 0 1-.43-.43ZM6.42 3.61a.66.66 0 1 1 .73 1.1.66.66 0 0 1-.73-1.1Zm.44.75a.22.22 0 1 0-.16-.4.22.22 0 0 0 .16.4Z"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.05 2.05a7 7 0 1 1 9.9 9.9 7 7 0 0 1-9.9-9.9ZM7 .88a6.13 6.13 0 1 0 0 12.25A6.13 6.13 0 0 0 7 .87Z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  wishlistIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width="16px"
      style={{ minWidth: "16px" }}
    >
      <path
        d="M12,21.844l-9.588-10A5.672,5.672,0,0,1,1.349,5.293h0a5.673,5.673,0,0,1,9.085-1.474L12,5.384l1.566-1.565a5.673,5.673,0,0,1,9.085,1.474h0a5.673,5.673,0,0,1-1.062,6.548Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
};
