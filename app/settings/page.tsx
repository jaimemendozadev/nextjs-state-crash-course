// @ts-nocheck
"use client";

import { useContext } from "react";
import { DBContext } from "@/components/context/dbcontext";



export default function SettingsPage() {

    const incomingContext = useContext(DBContext);

    console.log("incomingCongext in SettingsPage ", incomingContext);
    console.log("\n");


    return (
        <div className="p-4">

            <h1 className="text-2xl">Settings Page</h1>

        </div>
    )

}