import classes from '../styles/navBar.module.scss'
import Link from 'next/link';
export default function NavBar(props){
    const logo = props.logo; 
    const navLinks = props.links;

    return (
        <div className={classes['navBar']}>
            <div className={classes['navBar__logo']}>
                <Link href={logo.url} className={classes['navBar__logo-link']}>
                    {logo.name}
                </Link>
            </div>
            <div className={classes['navBar__menu-items']}>
                {navLinks.map((item, index)=>{
                    return (<Link href={item.url} key={index} className={`${classes['navBar__menu-item']} ${item.button ? classes[`navBar__menu-item--button`] : ''}`}>
                        {item.name}
                    </Link>)
                })}
            </div>
        </div>
    )
}