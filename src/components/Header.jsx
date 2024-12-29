import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
      <div className='hamburger-menu'>

      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1UlEQVR4nO3ZQQrCMBAF0Ll4czhFzDnMQepKPMBUM03fgyzaTcmHhh8mAgAAAICCWh/7lVYIcNQMMBbXBFg8wK2P++fd1l+P1Z5/fwY+x+37wXFf7tkvnCPAJAEmCTBJke5uIvvsa9wVLgwAAPzJ7GLbzl6kZ2+orRJgLK4JsHiAs2cWm5nIqDUDMRM5ljMwSYBJAkxSpHvxIn2VFQAAcITZxbadvUjP3lBbJcBYXBNg8QBnzyw2M5FRawZiJnIsZ2CSAJMEmKRI9+JF+iorAAAAAIh63rH6+l6phJhdAAAAAElFTkSuQmCC" alt="menu--v1"/>

      <div className='menu-dropdown'>
        <a href='#projects'>Projects</a>
        <a href='/'>TBD</a>
        <a href='/'>TBD</a>
        </div>
      </div>
    </div>
  )
}

export default Header
