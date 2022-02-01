import { useMemo } from "react";

export const usePagination = (totalPages) => {
   let pageArray = [];
   const pagination = useMemo( () => {
      for (let i = 0; i < totalPages; i++) {
         pageArray.push(i + 1);
      }
      return pageArray;
   }, [totalPages])
   
   return pagination;
}

