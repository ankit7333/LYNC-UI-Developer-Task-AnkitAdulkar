import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.scss'
import Button from '../Button'
export default function Nav() {
    const menus = [
        {
            to : '/',
            name : 'Home'
        },
        {
            to : '/documentation',
            name : 'Documentation'
        },
        {
            to : '/blogs',
            name : 'Blogs'
        },
        {
            to : '/lyncportal',
            name : 'LYNC Portal'
        },
        {
            to : '/requestademo',
            name : 'Request a demo'
        }
    ];
    const [isOpen, setIsOpen] = useState(false)
    function handleNav(){
        setIsOpen(!isOpen);
    }
    return (
        <nav className={styles.nav}>
            <Button onClick={handleNav} type={`button icon icon--hamburger`} />
            <ul className={`${!isOpen ? 'dn' : ''}`}>
                {
                    menus && menus.map((menu, index) => {
                        return <li key={menu}>
                            <NavLink to={menu.to}>{menu.name}</NavLink>
                        </li>
                    })
                }
                <li>
                    <Button onClick={handleNav} type={`button button--transparent close`}>Close</Button>
                </li>
            </ul>
        </nav>
    )
}
