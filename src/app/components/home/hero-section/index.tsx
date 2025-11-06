"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { usePortfolioData } from "@/utils/hooks";

const HeroSection = () => {
  const { data, loading } = usePortfolioData();

  if (loading) {
    return (
      <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
        <div className="container">
          <div className="flex items-center justify-center">
            <p className="text-secondary">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  const personal = data?.personal;
  const name = personal?.name || "Dendy Sapto Adi";
  const title = personal?.title || "Fullstack Developer";
  const summary = personal?.summary || "";

  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I&apos;m {name.split(" ")[0]}</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>{title}</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              {summary}
            </p>
          </div>
          <Image
            src={getImgPath("/images/home/banner/dendysaptoadi2.png")}
            alt="banner-img"
            width={685}
            height={650}
            className="block lg:hidden object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/banner/dendysaptoadi2.png")}
          alt="banner-img"
          width={685}
          height={650}
          className="absolute right-0 top-0 z-1 object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
