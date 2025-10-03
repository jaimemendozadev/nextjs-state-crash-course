// @ts-nocheck
'use client';
export const ComponentFive = ({num, ...rest}) => {

    console.log(`rest props in ComponentFive `, rest);
    console.log("\n");

    
    return (
      <div className="p-4 border rounded-sm">
        <p className="text-2xl"> I am Component Number: {num}</p>

      </div>
    )
}

