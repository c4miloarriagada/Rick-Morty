import { For } from "solid-js"
import { Results } from "../interfaces/locations"
import { List } from "./List"

 
export const CardLocation = ({ name, type, dimension , residents } : Results) => {



  
  return (
    <div class="border border-sky-400 rounded-md h-52 w-72 flex flex-col gap-2 animate-[fadeIn_1s]">
        <span class="flex justify-center pt-2">{ name }</span>
        <span class="flex justify-center gap-x-3">Type: {type} </span>
        <span class="flex justify-center ">Dimension: {dimension} </span>
        <ul class="flex pl-2 mt-4  h-28 flex-col overflow-x-hidden">    
         <For each={residents}>{(item) => <List link={item}/>}</For>
        </ul>
        
    </div>
  )
}
