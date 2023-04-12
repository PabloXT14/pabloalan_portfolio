import { FormEvent } from "react";
import { clsx } from "clsx";

import { styles } from "@/styles";

interface FooterFormProps {
  formData: {
    username: string;
    email: string;
    message: string;
  };
  onHandleChangeInput: (event: FormEvent) => void;
  onHandleSubmit: (event: FormEvent) => void;
  isFormLoading: boolean;
}

const FooterForm = ({ 
  formData, 
  onHandleChangeInput, 
  onHandleSubmit, 
  isFormLoading 
}: FooterFormProps) => {
  return (
    <div className={clsx(
      styles.appFlex,
      'w-3/5 flex-col my-4 mx-8',
      'max-2md:w-full max-2md:my-4'
    )}>
      <div className={clsx(
        styles.appFlex,
        'w-full my-3 cursor-pointer',
        'transition-all duration-300 ease-in-out',
        'hover:shadow-form-input'
      )}>
        <input
          type="text"
          placeholder="Your Name"
          name="username"
          value={formData.username}
          onChange={onHandleChangeInput}
          className={clsx(
            styles.pText,
            'w-full p-4 border-0 rounded-md bg-primary font-sans text-secondary outline-0'
          )}
        />
      </div>

      <div className={clsx(
        styles.appFlex,
        'w-full my-3 cursor-pointer',
        'transition-all duration-300 ease-in-out',
        'hover:shadow-form-input'
      )}>
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={onHandleChangeInput}
          className={clsx(
            styles.pText,
            'w-full p-4 border-0 rounded-md bg-primary font-sans text-secondary outline-0'
          )}
        />
      </div>

      <div className={clsx(
        'w-full my-3 cursor-pointer',
        'transition-all duration-300 ease-in-out',
        'hover:shadow-form-input'
      )}>
        <textarea
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={onHandleChangeInput}
          className={clsx(
            styles.pText,
            'w-full h-[170px] p-4 border-0 rounded-md bg-primary font-sans text-secondary outline-0 overflow-y-auto resize-none',
          )}
        />
      </div>

      <button
        type="button"
        onClick={onHandleSubmit}
        disabled={isFormLoading}
        className={clsx(
          styles.pText,
          'py-4 px-8 rounded-xl border-0 bg-secondary font-medium text-white text-center outline-0 mt-8 font-sans',
          'ease-in-form-button cursor-pointer',
          'hover:bg-secondary/80',
          'max-1.5md:w-full max-1.5md:my-4 max-1.5md:mx-0'
        )}
      >
        {isFormLoading ? 'Sending...' : 'Send Message'}
      </button>
    </div>
  )
}

export { FooterForm };