import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.scss';

// Автор жестко запутался, помогите ему, пожалуйста

// Тип каждого элемента передаваемого массива/объекта
type dataType = {
  id: string;
  title: string;
};

// Тип передаваемых в навбар данных
type NavbarProps = {
  data: dataType[];
};

const Navbar: React.FC<NavbarProps> = ({ data }: NavbarProps) => {
  // Переменная состояния списка
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);  
  //  Переменная текущей ширины окна
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  //  Установка текущей ширины окна
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  /* Не знаю, если нужно
    Назначает toggleMenu значение false при screenWidth > 768, 
    чтобы при повторном scrennWidth <= 768 
    значение toggleMenu было false (т.е. список был скрытым) */
  useEffect(() => {
    if (screenWidth > 768) {
      setToggleMenu(false);
    }
  }, [screenWidth])

  // Проверка состояния меню при изменении ширины окна
  // Нужна помощь, чтобы мне разобраться, как оно работает
  useEffect(() => {
    console.log('check condition')
    checkCondition()
  }, [toggleMenu && screenWidth])

  /* Меню не раскрыто или ширина окна больше 768 
    =>  скроллить страницу возможно*/ 
  const checkCondition = () => {
    if (!toggleMenu) {
      if (screenWidth > 768) {
        document.body.style.overflow = 'scroll'
      }
    }
  }

  // Изменение состояний меню и скроллинга
  const toggleNav = () => {
    toggleMenu ? document.body.style.overflow = 'scroll' : document.body.style.overflow = 'hidden';
    setToggleMenu(!toggleMenu);
  }

 /// Всё вместе
  const changeScroll = () => {
      toggleNav();
      checkCondition();
  }

  return (
    <nav className="navbar">
      <div className="logo">cryptorium</div>

      {(toggleMenu || screenWidth > 768) && (
        <ul
        className='list'>
        {data.map((n) => (
          <Link
            activeClass="active"
            to={n.id}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            <li className='item' onClick={changeScroll}>{n.title}</li>
          </Link>
        ))}
      </ul>
      )}

      <button className="button" onClick={changeScroll}>
        {toggleMenu ? 'X' : '='}
      </button>
    </nav>
  );
};

export default Navbar;
