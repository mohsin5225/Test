import React, {useState} from 'react';
import Logo from '../../assets/logo.svg';
import HamBurger from '../../assets/hamburger.svg';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuButton = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='header'>
      <div className='top-head'>
        <div className='logo'>
          <img src={Logo} alt='' />
        </div>
        <div className='hamburger' onClick={toggleMenuButton}>
          <img src={HamBurger} alt='' />
        </div>
      </div>
      <div className={`navigation ${showMenu ? 'show' : ''}`}>
        <ul>
          <li><button>Hear</button></li>
          <li><button>Latest</button></li>
          <li><button>Tour</button></li>
          <li><button>See</button></li>
          <li><button>Shop</button></li>
          <li><button>Watch</button></li>
          <li><button>Personal</button></li>
          <li><button>Aid</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header