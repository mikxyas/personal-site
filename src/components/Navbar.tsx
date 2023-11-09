import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export default function Navbar() {
    const ref = useRef<HTMLHeadingElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        console.log('width', ref.current ? ref.current.offsetWidth : 0);
    }, [ref.current])
    console.log("asdasdasdasdasd")
    if (ref.current != null) {
        console.log(ref)
    }
    return (
        // container

        <div className='ml-4 lg:ml-10 flex flex-col items-center pt-10'>
            <div>
                <Link href={'/'}>
                    <div ref={ref} >
                        <h1 className='text-2xl lg:text-4xl mb-5'>Building tech that changes the fucking world (e/acc)</h1>
                    </div>
                </Link>
                <div className=''>
                    <ul className='flex gap-3'>
                        <Link href={'/'}>
                            <li className='cursor-pointer'>
                                About
                            </li>
                        </Link>
                        <Link href={'/thoughts'}>
                            <li className='cursor-pointer '>
                                blog
                            </li>
                        </Link>
                        <Link href={'/goal'}>
                            <li className='cursor-pointer'>
                                Goal
                            </li>
                        </Link>
                        <Link href={'/socials'}>
                            <li className='cursor-pointer'>
                                Socials
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}
