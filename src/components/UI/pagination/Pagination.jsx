import { usePagination } from "../../../hooks/usePagination"; 

const Pagination = ({totalPages, page, changePage}) => {

   // Реализация кнопок для пагинации страниц по средствам массива и цикла
   let pagesArray = usePagination(totalPages);

   return(
      // {/* Создаем кнопки для пагинации страниц */}
      <div className='page__wrapper'>
         {pagesArray.map(p => 
            <span 
               onClick={() => changePage(p)}
               key={p} 
               className={page === p ? 'page page_current' : 'page'}>
                  {p}
            </span>
         )}
      </div>
   )
}

export default Pagination;