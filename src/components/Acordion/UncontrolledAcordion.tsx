import React, {useReducer} from "react";
import {reducerUnAccrodion, set_Collapsed} from "./reducer";

type AccordionType = {
  title: string


}
type AccordionTitle = {
  onClick: () => void
  title: string
}


export function UncontrolledAccordion(props: AccordionType) {
  /*  if (props.collapsed === true) {
        return <div>
                <AccordionTitle title={props.title}/>     пример
            </div>

    } else {*/
/*
  let [collapsed, setCollapsed] = useState(true)
*/
  let [state, dispatch] = useReducer(reducerUnAccrodion, {collapsed: false})
  return <div>
    <AccordionTitle title={props.title} onClick={() => {dispatch({type: set_Collapsed })} }/>
    {state.collapsed && <AccordionBody/>}
  </div>

}


function AccordionTitle(props: AccordionTitle) {
  return (
    <div>
      <h3 onClick={ () => {props.onClick()}}> {props.title} </h3>
    </div>
  )
}

function AccordionBody() {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}