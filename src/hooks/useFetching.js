import React from "react";
import { useState } from "react/cjs/react.development";

// Хук по обработке загрузки данных
export const useFetching = (callback) => {
   // Состояние отображения индикатора загрузки
   const [isLoading, setIsLoading] = useState(false);
   // Состояние обработки ошибки
   const [error, setError] = useState('');

   // Функция по вызову индикатора события, по обработке ошибки
   const fetching = async() => {
      try {
         setIsLoading(true);
         await callback();
      } catch (e) {
         setError(e.message);
      } finally {
         setIsLoading(false);
      }
   }

   return [fetching, isLoading, error];
}