import { styles } from "@/styles"
import { AppWrap } from "@/wrapper"


const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default AppWrap({
  WrappedComponent: Footer,
  idName: "contact",
  classNames: styles.appWhiteBg
})
