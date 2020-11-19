import React from "react";
import _ from "lodash";



const Pagination = (props) => {



  const { TotalItems, PageSize, CurrentPage ,HandlePageChange } = props;
  console.log(`PageSize=${PageSize} TotalItems=${TotalItems}`)
  const PageCount = Math.ceil(TotalItems / PageSize);
  console.log(PageCount);



  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination float-right">
          {_.range(1, PageCount+ 1).map((page) => (
            <li key={page} className={(page===CurrentPage)?"page-item active":"page-item"}>
              <a className="page-link " href="#" onClick={()=>{HandlePageChange(page)}}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );


};

export default Pagination;
