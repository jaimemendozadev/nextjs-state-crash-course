// @ts-nocheck

import Image from "next/image";

import { BaseComponent } from "@/components/basecomponent";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-5xl mb-8">Main Page</h1>

      <BaseComponent num="1">
        <BaseComponent num="2">
          <BaseComponent num="3">
            <BaseComponent num="4">

              <BaseComponent num="5">
        
              </BaseComponent>
            </BaseComponent>
          </BaseComponent>
        </BaseComponent>
      </BaseComponent>
      
    </div>
  );
}
