import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    addMessage: (title: string)=>void
}

export const FullInput = (props: PropsType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandker = (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () =>{
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <div>
                <input value={title} onChange={onChangeInputHandker}/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>
        </div>
    );
};

