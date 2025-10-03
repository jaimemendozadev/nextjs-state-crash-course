// @ts-nocheck
'use client';
import { ComponenTwo } from "./componenttwo";
export const ComponentOne = ({num, ...rest}) => {

    console.log(`rest props in ComponentOne `, rest);
    console.log("\n");

    
    return (
      <div className="p-4 border rounded-sm">
        <p className="text-2xl"> I am Component Number: {num}</p>

        <ComponenTwo num="2" {...rest} />

      </div>
    )
}

