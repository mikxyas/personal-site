import React, {ReactNode} from 'react';
import NavBar from './NavBar';

type Props = {
    children:ReactNode
}
const Layout: React.FC<Props> = (props) => {
    return (
        <div>
            {/* <div className='flex justify-center items-center'>
                <NavBar/>
            </div> */}
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout