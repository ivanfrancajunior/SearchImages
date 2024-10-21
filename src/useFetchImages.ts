import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context/GloblaContext";

export type Image = {
  urls: {
    raw: string;
    small: string;
    full: string;
    regular: string;
  };
  id: string;
  updated_at: string;
  slug: string;
  likes: number;
  user: {
    name: string;
    id: string;
  };
};

export interface ImageResponse {
  results: Image[];
}

const useFetchImages = () => {
  const { query } = useGlobalContext();

  return useQuery({
    queryKey: ['background',query],
    queryFn: async () =>
      axios
        .get<ImageResponse>(
          `https://api.unsplash.com/search/photos?client_id=${
            import.meta.env.VITE_ACCESS_KEY
          }&query=${query}&per_page=30&page=1&orientation=landscape`
        )
        .then((res) => res.data),
  });
};

export default useFetchImages;
