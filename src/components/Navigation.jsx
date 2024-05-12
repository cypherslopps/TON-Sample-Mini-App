import PropTypes from "prop-types";
import { navigationLinks } from '../lib/constants'
import { Link, useLocation } from 'react-router-dom'

const NavigationLink = ({ title, image, Icon, route }) => {
  const { pathname } = useLocation();
  const isLinkActive = pathname === route;
  const activeLink = isLinkActive ? "bg-[#1C1F24]/70 backdrop-blur-lg font-medium" : "text-[#878A8F]"

  return (
    <li>
      <Link
        key={title}
        to={route}
        className={`text-[.73rem] flex flex-col items-center ${activeLink} px-2 py-1 rounded-md overflow-hidden h-7`}
      >
        {image && (
          <img 
            src={image}
            alt={title}
            className={`${title.toLowerCase() === "airdrop" ? "h-6" : "h-8"} ${isLinkActive ? "-translate-y-10" : `${title.toLowerCase() === "airdrop" ? "-translate-y-0.5" : "-translate-y-1.5"}`} transition-transform duration-500`}
          />
        )}

        {Icon && (
          <Icon className={`h-5 shrink-0 ${isLinkActive ? "-translate-y-10" : "-translate-y-0"} transition-transform duration-500`} />
        )}

        <span className={`${isLinkActive ? `${title.toLowerCase() === "exchange" ? "-translate-y-[1.95rem]" : title.toLowerCase() === "airdrop" ? 
        "-translate-y-[1.50rem]" : "-translate-y-[1.2rem]"}` : "translate-y-5"} transition-transform duration-500 text-purple-500`}>{title}</span>
      </Link>
    </li>
  )
}

NavigationLink.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  Icon: PropTypes.any,
  route: PropTypes.string
}

const Navigation = () => {
  return (
    <nav className="bg-progress-bg fixed bottom-2 left-1/2 -translate-x-1/2 w-[95%] rounded-lg p-1.5">
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