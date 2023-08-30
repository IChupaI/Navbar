import {useEffect, useState} from 'react';
import './Navbar.scss';
import {LinkData} from "../../data/data";
import useResizeScreenWidth from "../hooks/useResizeScreenWidth";
import {scroll} from "../helpers/navbarScroller";
import {useThrottle} from "../hooks/useTrottle";


type Props = {
  links: LinkData[];
};

const Navbar = ({links}: Props) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { screenWidth } = useResizeScreenWidth()
  const throttledValue = useThrottle(screenWidth, 250)



  //отключает скролл
  useEffect(() => {
    toggleMenu ? document.documentElement.style.overflow = 'hidden' : document.documentElement.style.overflow = 'initial';
    toggleMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'initial';
  }, [toggleMenu]);


  useEffect(() => {
    if (throttledValue > 768) {
      setToggleMenu(false);
    }
  }, [throttledValue])


  const handleToggleNavBar = () => {
    if (screenWidth > 768) return
    setToggleMenu(prevState => !prevState);
  }

  const handleCloseNavBar = () => {
    setToggleMenu(false);
  }

  return (
    <nav className="navbar">
      <div className="logo">cryptorium</div>
        <ul className={`list ${toggleMenu && 'list__open'}`}>
          {links.map((link) => (
            <a key={link.id}>
              <li className='item' onClick={scroll(link, handleCloseNavBar)}>{link.title}</li>
            </a>
          ))}
        </ul>
      <button className="button" onClick={handleToggleNavBar}>
        {toggleMenu ? 'X' : '='}
      </button>
    </nav>
  );
};

export default Navbar;
