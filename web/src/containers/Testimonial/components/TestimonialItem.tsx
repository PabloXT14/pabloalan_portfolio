import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { styles } from '@/styles'
import { ITestimonial } from '@/types/testimonial'

interface TestimonialItemProps {
  testimonial: ITestimonial
}

const TestimonialItem = ({ testimonial }: TestimonialItemProps) => {
  return (
    <div
      className={twMerge(
        styles.appFlex,
        'flex flex-row p-8',
        'min-h-[250px] w-3/5 rounded-2xl bg-white shadow-testimonial-item',
        'transition-all duration-300 ease-in-out',
        'max-2md:w-full',
        'max-1.5md:flex-col',
        'lg:min-h-[450px]',
      )}
    >
      <Image
        src={testimonial.imgUrl}
        alt={testimonial.name}
        width={100}
        height={100}
        className={twMerge(
          'rounded-full object-cover',
          'lg:h-[150px] lg:w-[150px]',
        )}
      />

      <div
        className={twMerge(
          'flex h-full flex-1 flex-col items-start justify-center py-0 px-8 text-left',
          'max-1.5md:mt-8 max-1.5md:p-0',
        )}
      >
        <p
          className={twMerge(
            styles.pText,
            'font-sans text-xl text-black line-clamp-3',
            'lg:text-4xl',
          )}
        >
          {testimonial.feedback}
        </p>

        <div>
          <h4
            className={twMerge(
              styles.boldText,
              'mt-8 font-semibold text-secondary',
            )}
          >
            {testimonial.name}
          </h4>
          <h5 className={twMerge(styles.pText, 'mt-1 font-normal text-gray')}>
            {testimonial.company}
          </h5>
        </div>
      </div>
    </div>
  )
}

export { TestimonialItem }
