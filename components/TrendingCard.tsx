import { Link } from "expo-router";
import MaskedView from "@react-native-masked-view/masked-view";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { images } from "@/constants/images";

const TrendingCard = ({
  movie: { movie_id, title, poster_url },
  index,
}: TrendingCardProps) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative pl-5">
        <Image
          source={{ uri: poster_url }}
          className="w-32 h-48 rounded-xl"
          resizeMode="cover"
        />
        <View className="absolute -bottom-2 -left-2">
          <MaskedView
            maskElement={
              <Text className="font-bold text-white text-7xl">{index + 1}</Text>
            }>
            <Image
              source={images.rankingGradient}
              className="size-16"
              resizeMode="cover"
            />
          </MaskedView>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
