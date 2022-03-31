import React from 'react';

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
                <th>№</th>
                <th>Моедль</th>
                <th>Производитель</th>
            </tr>
            {props.topCars.map( (el, index) => {
                    return (
                        <tr key={index+1}>
                        <th>{index+1}</th>
                        <th>{el.model}</th>
                        <th>{el.manufacturer}</th>
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