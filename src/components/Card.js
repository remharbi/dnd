import React, { useState, useEffect } from 'react';

function Card(props) {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    useEffect(() => {
        setShow(props.showAll);
    }, [props.showAll]);

    return (
        <div
            className={`col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center  ${
                !show ? '' : 'my-4'
            } card-container`}
        >
            <h1
                className={`box mx-auto text-center ${
                    show ? 'my-3' : 'my-1'
                }`}
                onClick={handleClick}
            >
                {props.title}
            </h1>
            <textarea
                className={`${show ? '' : 'hide'}`}
                type='text'
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={(e) => props.handleChange(e)}
            />
        </div>
    );
}

export default Card;
