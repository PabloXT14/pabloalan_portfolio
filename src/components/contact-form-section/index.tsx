import { HiArrowNarrowRight } from 'react-icons/hi'
import { SectionTitle } from '../section-title'
import { Button } from '../ui/button'

export const ContactFormSection = () => {
  return (
    <section className="flex items-center justify-center bg-gray-950 px-6 py-16 md:py-32">
      <div className="mx-auto w-full max-w-[420px]">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <form className="mt-12 flex w-full flex-col gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
          />
          <textarea
            placeholder="Mensagem"
            className="h-[138px] w-full resize-none rounded-lg bg-gray-800 p-4 text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600"
            maxLength={500}
          />

          <Button variant="shadow" className="mx-auto mt-6 w-max">
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}
