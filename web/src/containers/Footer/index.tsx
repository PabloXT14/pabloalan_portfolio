import { FormEvent, useState } from "react";

import { AppWrap, MotionWrap } from "@/wrapper"
import { clsx } from "clsx";
import { styles } from "@/styles"
import { FooterCardsContainer } from "./components/FooterCardsContainer";
import { FooterForm } from "./components/FooterForm";


const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);

  function handleChangeInput(event: FormEvent) {
    const { name, value } = event.target as HTMLInputElement;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: FormEvent) {
    setIsFormLoading(true);

    setTimeout(() => {
      setIsFormLoading(false);
      setIsFormSubmitted(true);
    }, 2000);

    // const contact = {
    //   _type: 'contact',
    //   name: formData.name,
    //   email: formData.email,
    //   message: formData.message,
    // };

    // client.create(contact)
    //   .then(() => {
    //     setIsFormLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((error) => console.log(error));
  }

  return (
    <div className={clsx('flex flex-col flex-1 w-full items-center')}>
      <h2 className={clsx(styles.headText)}>
        Take a coffe & chat with me
      </h2>

      <FooterCardsContainer />

      {!isFormSubmitted ? (
        <FooterForm 
          formData={formData}
          onHandleChangeInput={handleChangeInput}
          onHandleSubmit={handleSubmit}
          isFormLoading={isFormLoading}
        />
      ) : (
        <div>
          <h3 className={clsx(styles.headText)}>
            Thank you for your message! I will get back to you as soon as possible
          </h3>
        </div>
      )}
    </div>
  )
}

export default AppWrap({
  WrappedComponent: MotionWrap({
    WrappedComponent: Footer,
    classNames: clsx('flex flex-col flex-1 w-full'),
  }),
  idName: "contact",
  classNames: styles.appWhiteBg
});
