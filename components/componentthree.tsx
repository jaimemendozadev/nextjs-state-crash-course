// @ts-nocheck
'use client';
import { ComponentFour } from "./componentfour";

export const ComponentThree = ({num, ...rest}) => {

    console.log(`rest props in ComponentThree `, rest);
    console.log("\n");

    
    return (
      <div className="p-4 border rounded-sm">
        <p className="text-2xl"> I am Component Number: {num}</p>

        <ComponentFour num="4" {...rest} />
      </div>
    )
}

