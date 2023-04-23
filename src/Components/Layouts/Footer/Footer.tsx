import Insta from '../../../Assets/Icons/Insta.png';
import Logo from '../../../Assets/Icons/B-day-logo.png';
import WhatsApp from '../../../Assets/Icons/WhatsApp.png';
import Telega from '../../../Assets/Icons/Telega.png';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.right}>
                        <div className={s.logo}>
                            <img src={Logo} alt="" />
                        </div>
                        <p className={s.welcome}>Двери нашей студии красоты открыты для Вас</p>
                        <div className={s.address}>
                            <p >г. Москва</p>
                            <h4 >Черноморский бульвар, д .10, корп. 1</h4>
                        </div>
                    </div>
                    <div className={s.left}>
                        <div className={s.address}>
                            <p>Контакты</p>
                            <a href="tel:+7(499) 490-04-13" className='footer__tel'>+7 (499) 490-04-13</a>
                        </div>
                        <div className={s.social}>
                            <div className={s.icons}>
                                <a href="https://www.instagram.com/" target={'_blank'}><img src={Insta} alt="Link to Instagram" className='footer__mediaImage' /></a>
                            </div>
                            <div className={s.icons}>
                                <a href="https://www.whatsapp.com/?lang=ru" target={'_blank'}> <img src={WhatsApp} alt="Link to Whatsapp" className='footer__mediaImage' /></a>
                            </div>
                            <div className={s.icons}>
                                <a href="https://web.telegram.org/k/" target={'_blank'}> <img src={Telega} alt="Link to Telegram" className='footer__mediaImage' /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;