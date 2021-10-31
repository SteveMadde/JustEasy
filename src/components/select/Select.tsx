import React, {ChangeEvent, useRef, useState} from 'react';
import s from './Select.module.css'

type ItemType = {
  title: string
  value: any
}
type SelectPropsType = {
  item: ItemType[]
  onChange: (value: any) => void
  value: any
}

export function Select(props: SelectPropsType) {
  let [active, setActive] = useState(true)
  let [hoveredElementValue, setHoveredElementValue] = useState(props.value)

  let SelectedItem = props.item.find(i => i.value === props.value)
  let hoveredItem = props.item.find(i => i.value === hoveredElementValue)

  let toggleItem = () => setActive(!active)

  let onItemClick = (value: any) => {
    props.onChange(value)
    toggleItem()
  }

  return (
    <div>
      {/* <select>
        <option>none</option>
        <option value={""}>Minsk</option>
        <option value={""}>Molodechno</option>
        <option value={""}>Valojyn</option>
      </select>*/}
      <div className={s.select}>

        <span className={s.main} onClick={toggleItem}> {SelectedItem && SelectedItem.title} </span>

      </div>
      {active &&
      <div className={s.items}>
        {props.item.map((i, index) =>
          <div onMouseEnter={ () => {setHoveredElementValue(i.value)} }
            className={s.mouse + "" + (hoveredItem === i ? s.select : "")}
               key={index} onClick={() => onItemClick(i.value)}
          >
            {i.title}
          </div>
        )}
      </div>
      }
    </div>
  )
}