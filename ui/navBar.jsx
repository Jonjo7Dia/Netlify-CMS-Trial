import classes from '../styles/navBar.module.scss'
import Link from 'next/link';
export default function NavBar(props){
    const logo = props.logo; 
    const navLinks = props.links;

    return (
        <div className={classes['navBar']}>
            <div className={classes['navBar--logo']}>
                <Link href={logo.url} className={classes['navBar--logo-link']}>
                    {logo.name}
                </Link>
            </div>
            <div className={classes['navBar--menu-items']}>
            </div>
        </div>
    )
}