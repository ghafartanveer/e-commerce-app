import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { SearchStarshipListProps } from "@types";
import { styles } from "./styles";
import { colors } from "@constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import i18n from "@constants/strings";
import StarshipItemCard from "../StarshipItemCard";
import { EmptyCartMessage } from "@components/atoms";

const SearchStarshipList: React.FC<SearchStarshipListProps> = ({
  starShips,
  loading,
  query,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={starShips}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <StarshipItemCard item={item} />}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          query && loading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator color={colors.primary} size={"large"} />
            </View>
          ) : query ? (
            <EmptyCartMessage
              icon={i18n.t("noSearchIcon")}
              IconType={MaterialIcons}
            />
          ) : (
            <EmptyCartMessage
              icon={i18n.t("searchIcon")}
              IconType={MaterialIcons}
            />
          )
        }
      />
    </View>
  );
};
export default SearchStarshipList;
