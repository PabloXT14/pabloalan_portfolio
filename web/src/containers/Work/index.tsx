import { useState } from "react";
import { workOptions } from "@/constants"
import { styles } from "@/styles"
import { AppWrap } from "@/wrapper";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<typeof workOptions[number]>('All');

  function handleWorkFilter(option: string) {
    
  }

  return (
    <>
      <h2 className={styles.headText}>My Creative <span>Portfolio</span> Section</h2>

      <div className="">
        {workOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(option)}
            className=""
          >
            {option}
          </div>
        ))}
      </div>
    </>
  )
}

export default AppWrap({
  WrappedComponent: Work,
  idName: "work",
})
