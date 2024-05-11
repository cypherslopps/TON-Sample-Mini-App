import PropTypes from "prop-types";
import { navigationLinks } from '../lib/constants'
import { Link, useLocation } from 'react-router-dom'

const NavigationLink = ({ title, image, route }) => {
  const { pathname } = useLocation();
  const activeLink = pathname === route ? "bg-[#1C1F24] font-medium" : "text-[#878A8F]"

  return (
    <li>
      <Link
        key={title}
        to={route}
        className={`text-[.73rem] flex flex-col items-center ${activeLink} px-2 py-1 rounded-md`}
      >
        {image && (
          <img 
            src={image}
            alt={title}
            className='h-8'
          />
        )}

        {title}
      </Link>
    </li>
  )
}

NavigationLink.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  route: PropTypes.string
}

const Navigation = () => {
  return (
    <nav className="bg-progress-bg fixed bottom-0 left-0 w-full p-1.5">
      <ul className="flex items-center justify-between gap-x-1">
        {navigationLinks.map(link => (
          <NavigationLink 
            key={link.title}
            {...link}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation