import React from 'react';

const color = {
  beige: '#E3CCB4',
  noir: '#3B424A',
  vert: '#849994'
};

export interface DividerProps {
  style?: any;
  color: 'beige' | 'noir' | 'vert';
  height?: string;
  width?: string;
  margin?: string;
}

export function Divider(props: DividerProps) {
  return (
    <div>
      <div
        style={{
          backgroundColor: color[props.color],
          height: props.height ? props.height : 5,
          width: props.width ? props.width : 110,
          margin: props.margin ? props.margin : 'auto',
          borderRadius: 100,
          marginTop: '0.3rem'
        }}
      ></div>
    </div>
  );
}
