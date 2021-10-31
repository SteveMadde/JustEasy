import React, {useState} from "react";

type AccordionPropsType = {
  title: string
  collapsed: boolean
  onClick: (value: any) => void
  item: ItemType[]
}
type AccordionType = {
  title: string
  collapsed: boolean
  onClick: (value: any) => void
}
type ItemType = {
  title: string
  value: any
}
type AccordionItem = {
  item: ItemType[]
  onClick: (value: any) => void
}


export function Accordion(props: AccordionPropsType) {
   let [on, setOn] = useState(true)
  /*  if (props.collapsed === true) {
        return <div>
                <AccordionTitle title={props.title}/>     пример
            </div>

    } else {*/
  return <div>
    <AccordionTitle title={props.title}/>
    {!props.collapsed && <AccordionBody item={props.item} onClick={props.onClick}/>}
  </div>

}


function AccordionTitle(props: { title: string }) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}


function AccordionBody(props: AccordionItem) {

  return (
    <div>
      <ul>
        {props.item.map((i, index) => <li
            key={index}
            onClick={() => props.onClick(i.title)}>
            {i.title}
          </li>
        )
        }
      </ul>
    </div>
  )
}