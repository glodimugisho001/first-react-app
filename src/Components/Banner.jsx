import "../styles/banner.css"

import Recommendation from "./recommendation"

// eslint-disable-next-line react/prop-types
export default function Banner({children}) {

  return (
    <div className="lmj-banner">
      <div className="">
        {children}
        <Recommendation/>
      </div>   
    </div>
  )
}
