'use client'

import { HiArrowNarrowRight } from 'react-icons/hi'
import { SectionTitle } from '../section-title'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from 'sonner'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(3).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactFormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const { data: response } = await axios.post('/api/contact', data)

      reset()
      toast.success(response.message)
    } catch (error) {
      console.error(error)
      toast.error(
        'Ocorreu um erro ao enviar a mensagem. Tente novamente ou mais tarde!',
      )
    }
  }

  return (
    <section
      id="contact"
      className="flex items-center justify-center bg-gray-950 px-6 py-16 md:py-32"
    >
      <div className="mx-auto w-full max-w-[420px]">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex w-full flex-col gap-4"
        >
          <input
            {...register('name')}
            type="text"
            placeholder="Nome"
            className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
          <input
            {...register('email')}
            type="email"
            placeholder="E-mail"
            className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
          <textarea
            {...register('message')}
            placeholder="Mensagem"
            className="h-[138px] w-full resize-none rounded-lg bg-gray-800 p-4 text-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
            maxLength={500}
          />

          <Button
            variant="shadow"
            className="mx-auto mt-6 w-max"
            disabled={isSubmitting}
          >
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}
