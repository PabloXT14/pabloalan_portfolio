import Image from "next/image";
import { useState } from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { useQuery } from "react-query";

import { ITestimonial } from "@/types/testimonial";
import { urlFor, client } from "@/services/sanity-client";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "@/wrapper"
import { styles } from "@/styles";
import { IBrand } from "@/types/brand";
import { TestimonialItem } from "./components/TestimonialItem";
import { BrandItem } from "./components/BrandItem";

async function getTestimonials() {
  const testimonialsQuery = '*[_type == "testimonials"]';

  const testimonialsData = await client.fetch(testimonialsQuery).then(data => {
    const dataRefactored = data.map((testimonial: ITestimonial) => {
      return {
        ...testimonial,
        imgUrl: urlFor(testimonial.imgUrl).url()
      }
    });

    return dataRefactored;
  });

  return testimonialsData as ITestimonial[];
}

async function getBrands() {
  const brandsQuery = '*[_type == "brands"]';

  const brandsData = await client.fetch(brandsQuery).then(data => {
    const dataRefactored = data.map((brand: IBrand) => {
      return {
        ...brand,
        imgUrl: urlFor(brand.imgUrl).url(),
      }
    });

    return dataRefactored;
  });

  return brandsData as IBrand[];
}


const Testimonial = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonialsQuery = useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
  });
  const brandsQuery = useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
  });

  const { data: testimonials } = testimonialsQuery;
  const { data: brands } = brandsQuery;

  function handleChangeTestimonial(index: number) {
    setCurrentTestimonialIndex(index);
  }

  return (
    <div className={clsx('flex flex-col flex-1 w-full justify-center items-center')}>
      {testimonials?.length && (
        <>
          <TestimonialItem testimonial={testimonials[currentTestimonialIndex]} />

          <div className={clsx(styles.appFlex, 'flex-row mt-4')}>
            <div
              className={clsx(
                styles.appFlex,
                'w-[50px] h-[50px] rounded-full bg-white m-4',
                'transition-all duration-300 ease-in-out cursor-pointer group',
                'hover:bg-secondary',
                'lg:w-[100px] lg:h-[100px]'
              )}
              onClick={() =>
                handleChangeTestimonial(
                  currentTestimonialIndex === 0
                    ? testimonials.length - 1
                    : currentTestimonialIndex - 1
                )
              }
            >
              <HiChevronLeft className={clsx(
                'w-[20px] h-[20px] text-secondary',
                'group-hover:text-white',
                'lg:w-[45px] lg:h-[45px]'
              )} />
            </div>

            <div
              className={clsx(
                styles.appFlex,
                'w-[50px] h-[50px] rounded-full bg-white m-4',
                'transition-all duration-300 ease-in-out  cursor-pointer group',
                'hover:bg-secondary',
                'lg:w-[100px] lg:h-[100px]'
              )}
              onClick={() =>
                handleChangeTestimonial(
                  currentTestimonialIndex === testimonials.length - 1
                    ? 0
                    : currentTestimonialIndex + 1
                )
              }
            >
              <HiChevronRight className={clsx(
                'w-[20px] h-[20px] text-secondary',
                'group-hover:text-white',
                'lg:w-[45px] lg:h-[45px]'
              )} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default AppWrap({
  WrappedComponent: MotionWrap({
    WrappedComponent: Testimonial,
    classNames: clsx('flex flex-col flex-1 w-full')
  }),
  idName: "testimonials",
  classNames: styles.appPrimaryBg
})