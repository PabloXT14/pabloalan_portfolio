import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { styles } from "../../styles";

export const SocialMedia = () => {
  return (
    <div className={styles.appSocial}>
      <div className={styles.appSocialLink}>
        <BsTwitter />
      </div>
      <div className={styles.appSocialLink}>
        <BsLinkedin />
      </div>
      <div className={styles.appSocialLink}>
        <BsGithub />
      </div>
    </div>
  )
}
