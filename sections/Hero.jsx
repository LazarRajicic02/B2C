import { SwiperSlide, Swiper } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import { get } from "@/pages/api/api";
import Image from "next/image";

function Hero() {
  const getBanners = async () => {
    return await get("banners/index_slider").then((res) => res.payload);
  };
  const {
    data: bannerData,
    error: errorBanner,
    isLoading: isLoadingBanner,
  } = useQuery({
    queryKey: ["fetchData"],
    queryFn: () => getBanners(),
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });
  if (isLoadingBanner) return <div>Loading...</div>;
  if (errorBanner) return <div>An error occurred: {errorBanner.message}</div>;
  return (
    <div>
      <Swiper spaceBetween={100} slidesPerView={1}>
        <ul className="list-disc pl-5">
          {bannerData &&
            bannerData.map((item) => (
              <li key={item.id} className="mb-2">
                {item.name}
                <SwiperSlide key={item.id}>
                  <Image
                    src={item.image}
                    alt={item.id}
                    width={item.width}
                    height={item.height}
                    priority={true}
                  />
                </SwiperSlide>
              </li>
            ))}
        </ul>
      </Swiper>
    </div>
  );
}

export default Hero;
