import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import useGetStarShips from "@hooks/useGetStarShip";
import { styles } from "./styles";
import i18n from "@constants/strings";
import { SearchScreenProps } from "@types";
import { Header } from "@components/atoms";
import { FloatingCartButton, InputField } from "@components/molecules";
import { SearchStarshipList } from "@components/organisms";

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [query, setQuery] = useState<string>("");
  const { starShips, loading, error } = useGetStarShips(query);

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Header title={i18n.t("searchStarShip")} />
      <InputField
        query={query}
        setQuery={setQuery}
        placeholder={i18n.t("searchForSarShips")}
      />
      <FloatingCartButton onPress={() => navigation.navigate(i18n.t("cart"))} />
      <SearchStarshipList
        starShips={query ? starShips : []}
        loading={loading}
        query={query}
      />
    </View>
  );
};

export default SearchScreen;
