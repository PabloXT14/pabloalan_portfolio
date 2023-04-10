import Image from "next/image";
import clsx from "clsx";

import { styles } from "@/styles";
import { ITestimonial } from "@/types/testimonial";

interface TestimonialItemProps {
  testimonial: ITestimonial;
}

const TestimonialItem = ({ testimonial }: TestimonialItemProps) => {
  return (
    <div className={clsx(
      styles.appFlex,
      'flex flex-row p-8',
      'w-3/5 min-h-[320px] bg-white rounded-2xl shadow-testimonial-item',
      'transition-all duration-300 ease-in-out',
      'max-2md:w-full',
      'max-1.5md:flex-col',
      'lg:min-h-[450px]',
    )}>
      <Image
        src={testimonial.imgUrl}
        alt={testimonial.name}
        width={100}
        height={100}
        className={clsx(
          'rounded-full object-cover',
          'lg:w-[150px] lg:h-[150px]',
        )}
      />

      <div className={clsx(
        'flex flex-col justify-center items-start flex-1 h-full py-0 px-8 text-left',
        'max-1.5md:mt-8 max-1.5md:p-0',
      )}>
        <p className={clsx(
          styles.pText,
          'text-xl text-black font-sans',
          'lg:text-4xl'
        )}>
          {testimonial.feedback}
        </p>

        <div>
          <h4 className={clsx(
            styles.boldText,
            'font-semibold text-secondary mt-8'
          )}>
            {testimonial.name}
          </h4>
          <h5 className={clsx(
            styles.pText,
            'font-normal text-gray mt-1'
          )}>
            {testimonial.company}
          </h5>
        </div>
      </div>
    </div>
  );
}

export { TestimonialItem };