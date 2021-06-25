import React from 'react'
import { a } from '@react-spring/web'

export default function Overlay({ fill }) {
  // Just a Figma export, the fill is animated
  return (
    <div className="overlay">
      <a.svg viewBox="0 0 583 720" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <text fill="#0f62fe" x={40}  y={72} fontSize={36}>
          <tspan fontWeight="200">Deep</tspan>
          <tspan fontWeight="900"> Insight</tspan>
        </text>
        <text fill="#0f62fe" style={{ whiteSpace: 'pre' }} fontSize={52} letterSpacing="0em">
          <tspan x={40} y={257.909} children={'Ecommerce Simplified.'} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontSize={12} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={270.909} />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontSize={40} fontWeight="bold" letterSpacing="0em">
          <tspan x={40} y={321.909} children="Everything That You Need to" />
          <tspan x={40} y={372.909} children="Sell & Grow on Amazon And " />
          <tspan x={40} y={423.909} children="More" />
        </text>
        <text style={{ whiteSpace: 'pre' }} fontSize={24} letterSpacing="0em">
          <tspan x={40} y={474.909} children="Easily manage & Tackle all the ecommerce issues." />
          <tspan x={40} y={525.909} children="Leverage speed & accuracy with DeepEcom Suite " />
          <tspan x={40} y={576.909} children="OR custom Enterprise ERP Integrations" />
        </text>
      </a.svg>
    </div>
  )
}
