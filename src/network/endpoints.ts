import Constants from "expo-constants";

const BASE_URL = Constants?.expoConfig?.extra?.BASE_URL;

export const urls = {
  randomImageUrl: "https://picsum.photos/200",
  getStarShipUrl: `${BASE_URL}/starships/?search=`,
};
