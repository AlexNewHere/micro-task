import React from 'react';

type titlefoBodyType = {
    titlefoBody: string
}

export const Body = (props: titlefoBodyType) => {
    return (
        <div>{props.titlefoBody}</div>
    )
}