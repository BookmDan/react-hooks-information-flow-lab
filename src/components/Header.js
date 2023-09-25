import React from 'react'

const Header = ({isDarkMode, onDarkModeClick}) => {
  return (
    <div>
      <header>
        <button onClick={onDarkModeClick}>{isDarkMode ? 'Dark': 'Light'}  Mode</button>
      </header>
    </div>
  )
}

export default Header