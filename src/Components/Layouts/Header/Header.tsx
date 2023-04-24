import { Link } from "react-router-dom";
import s from './Header.module.scss'
import Logo from '../../../Assets/Icons/B-day-logo.png';
import Insta from '../../../Assets/Icons/Insta.png';
import WhatsApp from '../../../Assets/Icons/WhatsApp.png';
import Telega from '../../../Assets/Icons/Telega.png';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.image}>
                        <img src={Logo} alt="logo"/>
                    </div>
                    <nav>
                        <Link className={s.link} to="service">Услуги и цены</Link>
                        <Link className={s.link} to="gallery" >Галерея</Link>
                        <Link className={s.link} to="reviews" >Отзывы</Link>
                        <Link className={s.link} to="articles">Статьи</Link>
                        <Link className={s.link} to="contacts">Контакты</Link>
                        <Link className={s.link} to="team">Команда</Link>
                    </nav>
                    <div className={s.call}>
                        <p>Контакты</p>
                        <a href="tel:+7(499) 490-04-13">+7 (499) 490-04-13</a>
                    </div>
                    <div className={s.social}>
                        <div className={s.icons}>
                            <a href="https://www.instagram.com/" target={'_blank'}><img src={Insta} alt="Link to Instagram" /></a>
                        </div>
                        <div className={s.icons}>
                            <a href="https://www.whatsapp.com/?lang=ru" target={'_blank'}> <img src={WhatsApp} alt="Link to Whatsapp" /></a>
                        </div>
                        <div className={s.icons}>
                            <a href="https://web.telegram.org/k/" target={'_blank'}> <img src={Telega} alt="Link to Telegram" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;