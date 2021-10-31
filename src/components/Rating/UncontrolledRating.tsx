import React, {useState} from "react";


export function UncontrolledRating() {
  let [value, setValue] = useState(0)
  return (
    <div>
      <Star selected={value === 1} setValue={ () => setValue(1)} />
      <Star selected={value === 2} setValue={ () => setValue(2)} />
      <Star selected={value === 3} setValue={ () => setValue(3)} />
      <Star selected={value === 4} setValue={ () => setValue(4)} />
      <Star selected={value === 5} setValue={ () => setValue(5)} />
    </div>
  )
}


type StarPropsType = {
  selected: boolean
  setValue: () => void

}

function Star(props: StarPropsType) {
  return <span onClick={ () => {props.setValue()} } > {props.selected ? <b> STAR </b> : 'Star'} </span>


  /*    if (props.selected === true) {
          return <span><b>Star</b></span>
      } else {
          return <span>Star</span>
      }*/
}

