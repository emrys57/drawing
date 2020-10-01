import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Circle from './circle';

const Draggable = ({ name, position, radius }) => {
    const [state, setState] = useState({
        name: name,
        isDragging: false,
        translateX: position.x,
        translateY: position.y
    });

    // mouse move
    const handleMouseMove = useCallback(
        ({ clientX, clientY }) => {
            if (state.isDragging) {
                setState(prevState => ({
                    ...prevState,
                    translateX: clientX - 150,
                    translateY: clientY - 75
                }));
            }
        },
        [state.isDragging]
    );

    // mouse left click release
    const handleMouseUp = useCallback(
        ({ clientX, clientY }) => {
            if (state.isDragging) {
                setState(prevState => ({
                    ...prevState,
                    isDragging: false
                }));
                localStorage.setItem(state.name + '-x', clientX - 150);
                localStorage.setItem(state.name + '-y', clientY - 75);
            };
        }, [state.isDragging, state.name]);

    // mouse left click hold
    const handleMouseDown = useCallback(() => {
        setState(prevState => ({
            ...prevState,
            isDragging: true
        }));
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return (
        <Circle
            isDragging={state.isDragging}
            onMouseDown={handleMouseDown}
            name={name}
            radius={radius}
            x={state.translateX}
            y={state.translateY}        
        />
    );
};

Draggable.propTypes = {
    name: PropTypes.string,
    position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
    }),
    radius: PropTypes.number
};

Draggable.defaultProps = {
    name: 1,
    position: {
        x: 20,
        y: 20
    },
    radius: 10
};

export default Draggable;
