
// Make a box to draw in.
import React from 'react';
import Draggable from './draggable';

export const Box = _props => {
  var draggables = [];
  for (var i = 1; i <= _props.circles; i++) {
    var xValue = parseInt(localStorage.getItem('drag' + i + '-x'));
    if (isNaN(xValue)) { xValue = 50; }
    var yValue = parseInt(localStorage.getItem('drag' + i + '-y'));
    if (isNaN(yValue)) { yValue = 50; }
    draggables.push(<Draggable key={i} name={'drag' + i} position={{ x: xValue, y: yValue }} radius={20} />);
  };
  return (
    <div style={{
      width: "80vw", height: '80vh',
      backgroundColor: "lightblue",
      marginLeft: '10vw', marginTop: '5vh',
      border: '2px solid black',  
    }} >
      {draggables}
    </div>
  );
};