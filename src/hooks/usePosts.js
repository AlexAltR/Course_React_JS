import { useMemo } from "react";

// Механизм фильтрации для сортировки
export const useSortedPosts = (posts, sort) => {
   
   // Функция для проверки строки поиска c помощью хука useMemo

   const sortedPosts = useMemo( () => {
      if(sort) {
         return [...posts].sort( (a, b) => a[sort].localeCompare(b[sort]));
      }
      return posts;
   }, [sort, posts])

   return sortedPosts;

}


export const usePosts = (posts, sort, query) => {
   // Создаем массив отсортированных постов
   const sortedPosts = useSortedPosts(posts, sort);
   // Функция для изменения массива posts на основе поиска c помощью хука useMemo
   const sortedAndSearchedPosts = useMemo( () => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
   }, [query, sortedPosts])

   return sortedAndSearchedPosts;
}