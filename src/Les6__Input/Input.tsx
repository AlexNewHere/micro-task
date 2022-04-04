import React, {ChangeEvent} from 'react';

type InputpropsType = {
    setTitle: (title: string)=> void,
    title: string
}


export const Input = (props: InputpropsType) => {
    const onChangeInputHandker = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandker}/>

    );
};

