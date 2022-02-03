//fetcher function

/* export async function fetchCoins() {
  const response = await fetch("https://api.coinpaprika.com/v1/coins");
  const json = await response.json();
  return json;
} */

//API를 fetch하고 json을 return하는 함수.
export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
