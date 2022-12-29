import { React } from "react";
import {Circles} from "react-loader-spinner"




const Spinner = ({loading}) => {
  return (
    <Circles
    height="80"
    width="80"
    color="rgba(36,0,27,0.8574561403508771)"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  )
}

export default Spinner