import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { urls } from "@network/endpoints";
import i18n from "@constants/strings";
import { Alert } from "react-native";
import { StarShip, UseGetStarShipsResult } from "@types";

const useGetStarShips = (query: string = ""): UseGetStarShipsResult => {
  const [starShips, setStarShips] = useState<StarShip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchStarShips = useCallback(
    (loading: boolean) => {
      const loadStarShips = async () => {
        setLoading(loading);
        try {
          const response = await axios.get<{ results: StarShip[] }>(
            `${urls.getStarShipUrl}${query}`
          );
          setStarShips(response.data.results);
        } catch (err) {
          Alert.alert("", i18n.t("failedToFetch"));
          setError(i18n.t("failedToFetch"));
        } finally {
          setLoading(false);
        }
      };

      loadStarShips();
    },
    [query, setLoading, setStarShips, setError]
  );

  useEffect(() => {
    fetchStarShips(true);
  }, [fetchStarShips]);

  return { starShips, loading, error, refetch: fetchStarShips };
};

export default useGetStarShips;
