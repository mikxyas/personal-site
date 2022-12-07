import React, { Component } from 'react'
import {navLinks} from "../utils/data"
import Link from 'next/link'
type Props = {}

type State = {}

export default class NavBar extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className=' flex  gap-7  font-serif bg-black mt-14 font-bold text-lg absolute  text-white z-10'>
        {navLinks.map((link, index) => {
          return(
            <ul key={index}>
            <Link href={link.path} passHref>
              <li key={index}>{link.name}</li>
            </Link>
          </ul>
          )
        })

        }
      </div>
    )
  }
}