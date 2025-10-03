

import RelatedProduct from '@/app/Components/RelatedProducts/RelatedProduct'
import SubCategory from '@/app/Components/Subcategories/SubCategories'
import React from 'react'


export default function page() {
  return (
    <>
      

      <div className='container-fluid'>

      <SubCategory/>
   <hr/>

       <RelatedProduct/>
      </div>
    </>
  )
}
