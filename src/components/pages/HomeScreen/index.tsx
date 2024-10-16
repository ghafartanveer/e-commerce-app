import React, { useState, useCallback } from "react";
import { View, SafeAreaView } from "react-native";
import useGetStarShips from "@hooks/useGetStarShip";
import { styles } from "./styles";
import i18n from "@constants/strings";
import { HomeScreenProps } from "@types";
import { StarshipList } from "@components/organisms";
import { Header } from "@components/atoms";
import { FloatingCartButton } from "@components/molecules";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { starShips, loading, refetch } = useGetStarShips();

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch(false);
    setRefreshing(false);
  }, [refetch]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={i18n.t("availableStarShip")} />
      <FloatingCartButton onPress={() => navigation.navigate('Cart')} />
      <StarshipList
        starShips={starShips}
        loading={loading}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default HomeScreen;
