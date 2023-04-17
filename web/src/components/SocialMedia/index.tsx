import Link from 'next/link';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { styles } from "../../styles";

export const SocialMedia = () => {
  return (
    <div className={styles.appSocial}>
      <Link
        href="https://twitter.com/PabloAl73579607"
        target="_blank"
        className={styles.appSocialLink}
      >
        <BsTwitter />
      </Link>
      <Link
        href="https://www.linkedin.com/in/pabloalan/"
        target="_blank"
        className={styles.appSocialLink}>
        <BsLinkedin />
      </Link>
      <Link
        href="https://github.com/PabloXT14"
        target="_blank"
        className={styles.appSocialLink}>
        <BsGithub />
      </Link>
    </div>
  )
}
