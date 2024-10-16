import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { StarshipListProps } from "@types";
import { styles } from "./styles";
import { colors } from "@constants/colors";
import StarshipItemCard from "../StarshipItemCard";

const StarshipList: React.FC<StarshipListProps> = ({
  starShips,
  loading,
  refreshing,
  onRefresh,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={starShips}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <StarshipItemCard item={item} />}
        numColumns={2}
        refreshing={refreshing}
        onRefresh={onRefresh}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator color={colors.primary} size={"large"} />
            </View>
          )
        }
      />
    </View>
  );
};
export default StarshipList;
