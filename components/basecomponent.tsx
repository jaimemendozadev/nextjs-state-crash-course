// @ts-nocheck
'use client';

import { useContext } from "react";
import { DBContext } from "./context/dbcontext";
export const BaseComponent = ({num, children}) => {
    const incomingContext = useContext(DBContext);

    console.log(`incomingContext inside Component Number ${num}: `, incomingContext);
    console.log("\n");
    return (
      <div className="p-4 border rounded-sm">
        <p className="text-2xl"> I am Component Number: {num}</p>

        {children}
      </div>
    )
}

