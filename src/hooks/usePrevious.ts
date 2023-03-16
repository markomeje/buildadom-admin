import { useEffect, useRef } from "react";


export const usePrevious = (value: any) => {
   const previous = (value: any) => {
      const ref = useRef();
      useEffect(() => {
         ref.current = value;
      });
      
      return ref.current;
   };

   return { previous };
}