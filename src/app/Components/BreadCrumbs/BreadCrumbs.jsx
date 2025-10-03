      "use client"
import React from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';

export default function BreadCrumbs() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);
  return (
    <>
      <div aria-label="breadcrumb" className='my-3'>
        <ol className='breadcrumb'>
            <li className='breadcurmb-item'>
                <Link href="/">Home</Link>
          </li>
    {  segments.map((segment, index)=>{
        const href = "/" + segments.slice(0, index + 1 ).join("/");
        const isLast = index === segment.length-1;

     return(
        <li key={index} className={`breadcrumb-item ${isLast ? "active" : ""}`}
         aria-current={isLast ? "page" : undefined }
        > {isLast ? (
            decodeURlComponent(segments)
        ):(
            <Link href={href}>{decodeURIComponent(segments)}</Link>
        )

        }

        </li>
     )
  



    })

    }



        </ol>

      </div>
    </>
  )
}
