import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const SearchBar = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center rounded-full px-5 w-full mt-5"
      onPress={onPress}
      style={{
        backgroundColor: "#0F0D23",
        paddingVertical: 15,
      }}>
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <Text className="flex-1 ml-2 text-[#a8b5db]">Search for a movie</Text>
    </TouchableOpacity>
  );
};

export default SearchBar;
