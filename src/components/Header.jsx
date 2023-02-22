import React,{useRef} from 'react'
import LoginForm from './LoginForm'
import '../styles/header.css'


function Header(props) {
//    const Login = useRef("Logout");
  
    const headerBar = [
        { to: '/r/popupar', text: 'Popular' },
        { to: '/r/hot', text: 'Home' },
        { to: '/r/rising', text: 'Aboutus' },
        { to: '/r/controversial', text: 'Controversial' },
        { to: '/r/gilded', text: 'Gilded' }
    ]
    return (

        <div className='header'>
            <div className="header__left">
                <ul>
                    {
                        headerBar.map((ele) => <li><a href={ele.to}>{ele.text}</a></li>
                        )
                    }
                </ul>
            </div>
            <div className="header__right">
                <i className='fas fa-bell'></i>
                <div className="header__user">
                    <span>{props.email}</span>
                    <i className='fas fa-caret-down'></i>
                </div>
            </div>
        </div>
    )
}

export default Header
