Микротаски

1 Урок. Вложенные компоненты
Родительский тег
<div>  
    <div></div>
<div/>
Пустой
<>  
    <div></div>
</>
Использование props

2 Урок.
Метод .map

3. Урок. Универсальная кнопка <button>
Правило скобок. Или скобок нет, или они есть и справа и слева) (передаем аргумент либо callback функцию)
/---------------------------------------------------------/
import React from 'react';
type ButtonType = {
name: string
callback: ()=>void
}
export const Button = (props: ButtonType ) =>{
const onClickHandler = () => {
props.callback()
}
return(
<button onClick={onClickHandler}>{props.name}</button>
)}
/----------------------------------------------------------/

4. Урок. Хуки useState
кнопка + и обнуления