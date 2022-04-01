import React from 'react';
import {FilterType} from '../App_Les5';


type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

type PropsType = {
    propsMoney: Array<MoneyType>
    call: (a: FilterType)=>void
   }

export const NewComponent = (props: PropsType) => {
    return (
        <>
            <ul>
                {props.propsMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknots}</span>
                            <span> {objFromMoneyArr.value}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={()=>props.call('all')}>All</button>
            <button onClick={()=>props.call('RUBLS')}>Rub</button>
            <button onClick={()=>props.call('Dollars')}>Dollar</button>
        </>
    )
}
