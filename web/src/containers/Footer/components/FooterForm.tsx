import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";

import { styles } from "@/styles";

const sendContactMessageSchema = z.object({
  username: z.string()
    .nonempty('O nome é obrigatório')
    .transform(username => {
      return username.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1));
      }).join(' ');
    }),
  email: z.string()
    .nonempty('O e-mail é obrigatório')
    .email('Insira um e-mail válido')
    .toLowerCase(),
  message: z.string()
    .nonempty('A mensagem é obrigatória')
});

type SendContactMessageData = z.infer<typeof sendContactMessageSchema>;

const FooterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid }
  } = useForm<SendContactMessageData>({
    resolver: zodResolver(sendContactMessageSchema),
  });

  function sendContactMessage(data: SendContactMessageData) {
    setTimeout(() => {

    }, 2000);
    console.log(data);
  }

  return (
    <>
      {!isSubmitSuccessful || !isValid ? (
        <form
          onSubmit={handleSubmit(sendContactMessage)}
          className={clsx(
            styles.appFlex,
            'w-3/5 flex-col my-4 mx-8',
            'max-2md:w-full max-2md:my-4'
          )}
        >
          <div className={clsx(
            'flex flex-col w-full my-3 cursor-pointer',
            'transition-all duration-300 ease-in-out',
            'hover:shadow-form-input',
          )}>
            <input
              type="text"
              placeholder="Your Name"
              {...register("username")}
              className={clsx(
                styles.pText,
                'w-full p-4 border-0 rounded-md bg-primary font-sans text-secondary outline-0',
                errors.username && 'border-2 border-red-500 placeholder:text-red-500'
              )}
            />
            {errors.username && <span className="text-red-500">{errors.username.message}</span>}
          </div>

          <div className={clsx(
            'flex flex-col w-full my-3 cursor-pointer',
            'transition-all duration-300 ease-in-out',
            'hover:shadow-form-input'
          )}>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className={clsx(
                styles.pText,
                'w-full p-4 border-0 rounded-md bg-primary font-sans text-secondary outline-0',
                errors.email && 'border-2 border-red-500 placeholder:text-red-500'
              )}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>

          <div className={clsx(
            'w-full my-3 cursor-pointer',
            'transition-all duration-300 ease-in-out',
            'hover:shadow-form-input'
          )}>
            <textarea
              placeholder="Your Message"
              {...register("message")}
              className={clsx(
                styles.pText,
                'w-full h-[170px] p-4 border-0 rounded-md bg-primary font-sans text-secondary outline-0 overflow-y-auto resize-none',
                errors.message && 'border-2 border-red-500 placeholder:text-red-500'
              )}
            />
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
          </div>

          <button
            type="submit"
            className={clsx(
              styles.pText,
              'py-4 px-8 rounded-xl border-0 bg-secondary font-medium text-white text-center outline-0 mt-8 font-sans',
              'ease-in-form-button cursor-pointer',
              'hover:bg-secondary/80',
              'max-1.5md:w-full max-1.5md:my-4 max-1.5md:mx-0'
            )}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      ) : null}

      {isSubmitSuccessful ? (
        <div>
          <h3 className={clsx(styles.headText)}>
            Thank you for your message! I will get back to you as soon as possible
          </h3>
        </div>
      ) : null}
    </>
  )

}

export { FooterForm };