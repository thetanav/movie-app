import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
// import { getTrendingMovies } from "@/services/appwrite";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

import MovieCard from "@/components/MovieCard";

const Search = () => {
  // const router = useRouter();
  const [query, setQuery] = useState("");

  // const {
  //   data: trendingMovies,
  //   loading: trendingLoading,
  //   error: trendingError,
  // } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch,
  } = useFetch(() => fetchMovies({ query: query }));

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (query) {
        await refetch();
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        <View className="flex-row items-center rounded-full px-5 py-[5px] mt-5 bg-dark-200">
          <Image
            source={icons.search}
            className="size-5"
            resizeMode="contain"
            tintColor="#ab8bff"
          />
          <TextInput
            placeholder="Search for a movie"
            placeholderTextColor="#a8b5db"
            className="flex-1 ml-1 text-white"
            value={query}
            onChangeText={(e) => setQuery(e)}
          />
        </View>

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error: {moviesError?.message}</Text>
        ) : (
          <View className="flex-1">
            <Text className="text-lg text-white font-bold mt-5 mb-3">
              Search results for
              <Text className="text-purple-300"> {query}</Text>
            </Text>
            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
              ListEmptyComponent={
                !moviesLoading && !moviesError ? (
                  <View className="mt-100 px-5">
                    <Text className="text-center text-gray-500">
                      {query.trim() ? "No movie found" : "Search"}
                    </Text>
                  </View>
                ) : null
              }
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
