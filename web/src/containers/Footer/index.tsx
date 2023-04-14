import { FormEvent } from "react";

import { AppWrap, MotionWrap } from "@/wrapper"
import { clsx } from "clsx";
import { styles } from "@/styles"
import { FooterCardsContainer } from "./components/FooterCardsContainer";
import { FooterForm } from "./components/FooterForm";


const Footer = () => {

  function handleSubmit(event: FormEvent) {

    setTimeout(() => {
      
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

      <FooterForm />
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
