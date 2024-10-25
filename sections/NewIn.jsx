import { SwiperSlide, Swiper } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { list } from "@/pages/api/api";
import Image from "next/image";
import Product1 from "@/public/static/images/downloadd.png";
import Product2 from "@/public/static/images/downloaddd.png";
import Product3 from "@/public/static/images/downloadddd.png";
import Product4 from "@/public/static/images/download.png";
import "swiper/css";
import "swiper/css/scrollbar";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    basic_data: {
      name: "PANTHÈRE DE CARTIER BRACELET",
    },
    price: {
      currency: "rsd",
      price: {
        original: "24500",
        discount: "21500",
      },
    },
    image: [Product2, Product3],
  },
  {
    id: 2,
    basic_data: {
      name: "PANTHÈRE DE CARTIER BRACELET",
    },
    price: {
      currency: "rsd",
      price: {
        original: "24500",
        discount: "21500",
      },
    },
    image: [Product1, Product3],
  },
  {
    id: 3,
    basic_data: {
      name: "PANTHÈRE DE CARTIER BRACELET",
    },
    price: {
      currency: "rsd",
      price: {
        original: "24500",
        discount: "21500",
      },
    },
    image: [Product4, Product3],
  },
  {
    id: 4,
    basic_data: {
      name: "PANTHÈRE DE CARTIER BRACELET",
    },
    price: {
      currency: "rsd",
      price: {
        original: "24500",
        discount: "21500",
      },
    },
    image: [Product3, Product3],
  },
];

export default function NewInSection() {
  const getRecommended = async () => {
    return await list("products/section/list/recommendation", {
      limit: 3,
      search: "",
      render: true,
      page: 1,
      filters: [],
      sort: {
        field: "price",
        direction: "asc",
      },
    }).then((res) => res.payload);
  };

  const { data: recomendedData, error: errorData } = useQuery({
    queryKey: ["getRecomended"],
    queryFn: () => getRecommended(),
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });

  const combinedArr = recomendedData?.items.concat(DUMMY_PRODUCTS);
  if (errorData) console.log(errorData.message);
  return (
    <section className="bg-white py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:flex">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            NEW IN
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600">
            Explore new collection.
          </p>
          <div className="mt-6 sm:mt-10 text-center">
            <a
              href="#"
              className="inline-block px-4 sm:px-8 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
            >
              See All Products
            </a>
          </div>
        </div>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {combinedArr?.map((product) => (
            <SwiperSlide key={product?.id}>
              <div className="group relative">
                <Image
                  src={product?.image[0]}
                  alt={product?.basic_data.name}
                  width={250}
                  height={150}
                  priority={true}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 w-auto h-48"
                />
                <div className="mt-4">
                  <h3 className="text-sm text-gray-700">
                    <a href="#" className="hover:underline">
                      {product?.basic_data.name}
                    </a>
                  </h3>
                  <div className="mt-2">
                    <span className="text-gray-900 font-semibold">
                      {`${product?.price.price.original} ${product.price.currency}`}
                    </span>
                    {product?.price.price.discount && (
                      <span className="ml-2 line-through text-gray-500">
                        {`${product?.price.price.discount} ${product.price.currency}`}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
