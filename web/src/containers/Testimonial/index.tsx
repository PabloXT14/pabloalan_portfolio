import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useQuery } from 'react-query'

import { ITestimonial } from '@/types/testimonial'
import { urlFor, client } from '@/services/sanity-client'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { AppWrap, MotionWrap } from '@/wrapper'
import { styles } from '@/styles'
// import { IBrand } from '@/types/brand'
import { TestimonialItem } from './components/TestimonialItem'

async function getTestimonials() {
  const testimonialsQuery = '*[_type == "testimonials"]'

  const testimonialsData = await client
    .fetch(testimonialsQuery)
    .then((data) => {
      const dataRefactored = data.map((testimonial: ITestimonial) => {
        return {
          ...testimonial,
          imgUrl: urlFor(testimonial.imgUrl).url(),
        }
      })

      return dataRefactored
    })

  return testimonialsData as ITestimonial[]
}

// async function getBrands() {
//   const brandsQuery = '*[_type == "brands"]'

//   const brandsData = await client.fetch(brandsQuery).then((data) => {
//     const dataRefactored = data.map((brand: IBrand) => {
//       return {
//         ...brand,
//         imgUrl: urlFor(brand.imgUrl).url(),
//       }
//     })

//     return dataRefactored
//   })

//   return brandsData as IBrand[]
// }

const Testimonial = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  const testimonialsQuery = useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
  })

  const { data: testimonials } = testimonialsQuery

  function handleChangeTestimonial(index: number) {
    setCurrentTestimonialIndex(index)
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center">
      {testimonials?.length && (
        <>
          <TestimonialItem
            testimonial={testimonials[currentTestimonialIndex]}
          />

          <div className={twMerge(styles.appFlex, 'mt-4 flex-row')}>
            <div
              className={twMerge(
                styles.appFlex,
                'm-4 h-[50px] w-[50px] rounded-full bg-white',
                'group cursor-pointer transition-all duration-300 ease-in-out',
                'hover:bg-secondary',
                'lg:h-[100px] lg:w-[100px]',
              )}
              onClick={() =>
                handleChangeTestimonial(
                  currentTestimonialIndex === 0
                    ? testimonials.length - 1
                    : currentTestimonialIndex - 1,
                )
              }
            >
              <HiChevronLeft
                className={twMerge(
                  'h-[20px] w-[20px] text-secondary',
                  'group-hover:text-white',
                  'lg:h-[45px] lg:w-[45px]',
                )}
              />
            </div>

            <div
              className={twMerge(
                styles.appFlex,
                'm-4 h-[50px] w-[50px] rounded-full bg-white',
                'group cursor-pointer transition-all  duration-300 ease-in-out',
                'hover:bg-secondary',
                'lg:h-[100px] lg:w-[100px]',
              )}
              onClick={() =>
                handleChangeTestimonial(
                  currentTestimonialIndex === testimonials.length - 1
                    ? 0
                    : currentTestimonialIndex + 1,
                )
              }
            >
              <HiChevronRight
                className={twMerge(
                  'h-[20px] w-[20px] text-secondary',
                  'group-hover:text-white',
                  'lg:h-[45px] lg:w-[45px]',
                )}
              />
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
    classNames: twMerge('flex flex-col flex-1 w-full'),
  }),
  idName: '',
  classNames: styles.appPrimaryBg,
})
