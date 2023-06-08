import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import emailjs from '@emailjs/browser'

import { styles } from '@/styles'
import { useRef } from 'react'

const sendContactMessageSchema = z.object({
  username: z
    .string()
    .nonempty('O nome é obrigatório')
    .transform((username) => {
      return username
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Insira um e-mail válido')
    .toLowerCase(),
  message: z.string().nonempty('A mensagem é obrigatória'),
})

type SendContactMessageData = z.infer<typeof sendContactMessageSchema>

const FooterForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
    reset,
  } = useForm<SendContactMessageData>({
    resolver: zodResolver(sendContactMessageSchema),
    mode: 'onChange',
  })

  async function sendContactMessage(data: SendContactMessageData) {
    await emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.username,
          to_name: 'Pablo Alan',
          from_email: data.email,
          to_email: 'pabloxt14@gmail.com',
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert('Mensagem enviada com sucesso!')
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro ao enviar a mensagem!')
        reset()
      })
  }

  return (
    <>
      {!isSubmitSuccessful || !isValid ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit(sendContactMessage)}
          className={clsx(
            styles.appFlex,
            'my-4 mx-8 w-3/5 flex-col',
            'max-2md:my-4 max-2md:w-full',
          )}
        >
          <div
            className={clsx(
              'my-3 flex w-full cursor-pointer flex-col',
              'transition-all duration-300 ease-in-out',
              'hover:shadow-form-input',
            )}
          >
            <input
              type="text"
              placeholder="Seu Nome"
              {...register('username')}
              className={clsx(
                styles.pText,
                'w-full rounded-md border-0 bg-white p-4 font-sans text-secondary shadow-md outline-0',
                errors.username &&
                  'border-2 border-red-500 placeholder:text-red-500',
              )}
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </div>

          <div
            className={clsx(
              'my-3 flex w-full cursor-pointer flex-col',
              'transition-all duration-300 ease-in-out',
              'hover:shadow-form-input',
            )}
          >
            <input
              type="email"
              placeholder="Seu Email"
              {...register('email')}
              className={clsx(
                styles.pText,
                'w-full rounded-md border-0 bg-white p-4 font-sans text-secondary shadow-md outline-0',
                errors.email &&
                  'border-2 border-red-500 placeholder:text-red-500',
              )}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div
            className={clsx(
              'my-3 w-full cursor-pointer',
              'transition-all duration-300 ease-in-out',
              'hover:shadow-form-input',
            )}
          >
            <textarea
              placeholder="Sua Mensagem"
              {...register('message')}
              className={clsx(
                styles.pText,
                'h-[170px] w-full resize-none overflow-y-auto rounded-md border-0 bg-white p-4 font-sans  text-secondary shadow-md outline-0',
                errors.message &&
                  'border-2 border-red-500 placeholder:text-red-500',
              )}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          <button
            type="submit"
            className={clsx(
              styles.pText,
              'mt-8 rounded-xl border-0 bg-secondary py-4 px-8 text-center font-sans font-medium text-white outline-0',
              'cursor-pointer ease-in-form-button',
              'hover:bg-secondary/80',
              'max-1.5md:my-4 max-1.5md:mx-0 max-1.5md:w-full',
            )}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      ) : null}

      {isSubmitSuccessful ? (
        <div className="my-auto">
          <h3 className={clsx(styles.headText, 'text-3xl')}>
            Obrigado pela mensagem!
            <br />
            Te retornarei o mais breve possivel
          </h3>
        </div>
      ) : null}
    </>
  )
}

export { FooterForm }
