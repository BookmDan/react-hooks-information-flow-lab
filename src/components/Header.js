import React from 'react'

const Header = ({isDarkMode, onDarkModeClick}) => {
  return (
    <div>
      <header>
        <button onClick={onDarkModeClick}>{isDarkMode ? 'Dark': 'Light'}  Mode</button>
      </header>
      Header
    </div>
  )
}

export default Header