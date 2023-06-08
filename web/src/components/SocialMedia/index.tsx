import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

import { styles } from '@/styles'

export const SocialMedia = () => {
  return (
    <div className={styles.appSocial}>
      <Link
        href="mailto:pabloxt14@gmail.com"
        target="_blank"
        className={styles.appSocialLink}
      >
        <FaEnvelope />
      </Link>
      <Link
        href="https://www.linkedin.com/in/pabloalan/"
        target="_blank"
        className={styles.appSocialLink}
      >
        <FaLinkedin />
      </Link>
      <Link
        href="https://github.com/PabloXT14"
        target="_blank"
        className={styles.appSocialLink}
      >
        <FaGithub />
      </Link>
    </div>
  )
}
