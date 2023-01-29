import Link from 'next/link';
import NavLinks from '../../misc/json/NavigateLinks.json'

const NavigateLinks = () => {
  return (
    <>
        {NavLinks.map(NavLink =>
          <Link 
            href={NavLink.Link} 
            key={NavLink.id}>
              {NavLink.Text}
          </Link>
        )}
    </> 
    );
}
export default NavigateLinks