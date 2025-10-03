// @ts-nocheck
'use client';
import { ComponentThree } from "./componentthree";

export const ComponenTwo = ({num, ...rest}) => {

    console.log(`rest props in ComponentTwo `, rest);
    console.log("\n");

    
    return (
      <div className="p-4 border rounded-sm">
        <p className="text-2xl"> I am Component Number: {num}</p>
        <ComponentThree num="3" {...rest} />
      </div>
    )
}

