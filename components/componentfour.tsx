// @ts-nocheck
'use client';
import { ComponentFive } from "./componentfive";

export const ComponentFour = ({num, ...rest}) => {

    console.log(`rest props in ComponentFour `, rest);
    console.log("\n");

    
    return (
      <div className="p-4 border rounded-sm">
        <p className="text-2xl"> I am Component Number: {num}</p>

        <ComponentFive num="5" {...rest} />

      </div>
    )
}

