import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { client } from "@/services/sanity-client";
import { AppWrap, MotionWrap } from "@/wrapper"
import { images } from "@/constants";
import { clsx } from "clsx";
import { styles } from "@/styles"


const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);

  const { username, email, message } = formData;

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
      <h2>Take a coffe & chat with me</h2>

      <div>
        <div>
          <Image src={images.email} alt="email" />
          <Link href="mailto:pabloxt14@gmail.com">pabloxt14@gmail.com</Link>
        </div>

        <div>
          <Image src={images.mobile} alt="phone" />
          <Link href="tel:+55 (19) 971540560">+55 (19) 971540560</Link>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isFormLoading}
          >
            {isFormLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3>
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
