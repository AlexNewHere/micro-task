import React from 'react';

type titleType = {
    title: string
}


export const Header = (props: titleType) => {
    return (
        <div>{props.title}</div>
    )
}