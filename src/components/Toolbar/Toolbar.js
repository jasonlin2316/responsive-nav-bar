import React from 'react'
import './Toolbar.css'
import Button from '../SideDrawer/Button'
const Toolbar = (props) => {
    
  return(
      <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div>
                <Button click={props.buttonHandler}/>
            </div>
            <div className='toolbar__logo'><a href='/'>Tho Loge</a></div>
            <div className='space'/>
            <div className='toolbar_navigation-items'>
                <ul>
                    <li><a href='/'>Products</a></li>
                    <li><a href='/'>Users</a></li>
                </ul>
            </div>
        </nav>
      </header>
  )
}

export default Toolbar
