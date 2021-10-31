import React, {ChangeEvent, useRef, useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOf} from "./components/OnOf/OnOf";
import {UncontrolledAccordion} from "./components/Acordion/UncontrolledAcordion";
import {Accordion} from "./components/Acordion/Acordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Select} from "./components/select/Select";
import {Example} from "./ReactMemo";


function App() {
  let [RatingValue, setRatingValue] = useState<RatingValueType>(0)
  let onClick = (title: string ) => {
    console.log(title)
  }
  let [value, setValue] = useState(3)
  let onChange = (number: number) => {
    setValue(number)
  }

  return (
    <div className="App">
      <PageTitle title={'Hallo'}/>
      <PageTitle title={'My Friend'}/>
      Article 1
      <UncontrolledAccordion title={'Uncontrolled'}/>
      <Accordion title={'Users'} collapsed={false} item={[{title:'Ruslan', value:1},
                                                             {title:'Val', value:2},
                                                        {title:'Natasha', value:3}]}  onClick={onClick} />
      Article 2
      <UncontrolledRating/>
      <Rating value={RatingValue} onClick={setRatingValue}/>
      <OnOf/>
      <Input/>
      <ControlledInput/>
      <ControlledCheckbox/>
      <ControlledSelect/>
      <Select item={ [{value: 1, title: 'Minsk'},
                      {value: 2, title: 'Molodechno'},
                      {value: 3, title: 'Volojyn'}] }
              value={value}
              onChange={onChange}
      />
        <Example/>
    </div>
  );
}

let Input = () => {
  let [input, setInput] = useState('')
  let inputRef = useRef<HTMLInputElement>(null)
  const onClick = () => {
    const el = inputRef.current as HTMLInputElement
    setInput(el.value)
  }
  return <div>
    <input ref={inputRef} id={'inputId'}/>
    <button onClick={onClick}>save</button>
    actual value: {input}
  </div>
}
let ControlledInput = () => {
  let [parentValue, setParentValue] = useState('')

  let onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  }
  return <input value={parentValue} onChange={onChange}/>
}
let ControlledCheckbox = () => {
  let [parentValue, setParentValue] = useState(true)

  let onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  }
  return <input type={'checkbox'} checked={parentValue} onChange={onChange}/>
}
let ControlledSelect = () => {
  let [parentValue, setParentValue] = useState<string | undefined>('1')

  let onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  }
  return <select value={parentValue} onChange={onChange}>
    <option>none</option>
    <option value={"1"}>Minsk</option>
    <option value={"2"}>Molodechno</option>
    <option value={"3"}>Valojyn</option>
  </select>
}

/*
let sum = (a: number, b: number) => {
    return (
        a + b
    )
}
*/

function PageTitle(props: any) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default App;
