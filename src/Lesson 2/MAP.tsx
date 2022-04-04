import React from 'react';
import a from './Tr.module.css'

type IsNewComponentType = {
    topCars: Array<TopCarsType>
}

type TopCarsType = {
    manufacturer: string,
    model: string,
}

export const IsNewComponent = (props: IsNewComponentType) => {
    return (
        <tbody>
            <tr>
                <th className={a.th}>№</th>
                <th className={a.th}>Моедль</th>
                <th className={a.th}>Производитель</th>
            </tr>
            {props.topCars.map( (el, index) => {
                    return (
                        <tr key={index+1} >
                        <th className={a.th}>{index+1}</th>
                        <th className={a.th}>{el.model}</th>
                        <th className={a.th}>{el.manufacturer}</th>
                        </tr>
                )
                },
            )}
        </tbody>
    )
}

export const topCars = [
    {manufacturer:"BMW",model:'m5cs'},
    {manufacturer:"Mercedes",model:'e63s'},
    {manufacturer:"Audi",model:'rs6'}
]