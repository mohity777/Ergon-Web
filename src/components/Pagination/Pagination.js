import React from 'react'

const Pagination = () => {
    return (
        <div>
        <div class="pagination-wrapper" style={{marginRight:"1.7vmax",marginTop:"5vmax"}}>
        <a class="pagination-prev disabled" href="##" title="Go to previous page"><i
            data-feather="arrow-left"></i></a>
        <ul class="pagination">
          <li><a class="active" href="##">1</a></li>
          <li><a href="##">2</a></li>
          <li><a href="##">3</a></li>
          <li><a href="##">4</a></li>
          <li><a href="##">5</a></li>
          <li><a href="##">...</a></li>
          <li><a href="##">10</a></li>
        </ul>
        <a class="pagination-next" href="##" title="Go to next page"><i data-feather="arrow-right"></i></a>
      </div>
        </div>
    )
}

export default Pagination
