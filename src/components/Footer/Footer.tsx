import { fas } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSkype, faTelegram, faViber, faVk, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer}>
                <div className={styles.flexPhone}>
                    <Logo />
                    <div className={styles.actionBlock}>
                        <p>000-000-000-001</p>
                        <button className={styles.button}>Заказать звонок</button>
                    </div>

                </div>
                <div className={styles.flexP}>
                    <div className={styles.flexInfo}>
                        <p><strong>Калорийность и состав</strong></p>
                        <div>
                        <p><strong>Мы в соцсетях</strong></p>
                        <div className={styles.grid2x2}>
                            <p>YouTube</p>
                            <p>FaceBook</p>
                            <p>Instagram</p>
                            <p>ВКонтакте</p>
                        </div>
                        </div>
                        
                    </div>
                    <div className={styles.flexInfo}>
                        <p><strong>Правовая информация</strong></p>
                        <div>
                            <p>Дубоссары</p>
                            <p>ул. Ленина 101</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={styles.container}><strong>Остались вопросы? А мы всегда на связи:</strong></p>
                    <div className={styles.flexSocial}>
                    <FontAwesomeIcon icon={faSkype} size="2x" className={styles.skypeIcon} />
                    <FontAwesomeIcon icon={faVk} size="2x" className={styles.skypeIcon} />
                    <FontAwesomeIcon icon={faTelegram} size="2x" className={styles.skypeIcon} />
                    <FontAwesomeIcon icon={faFacebook} size="2x" className={styles.skypeIcon} />
                    <FontAwesomeIcon icon={faViber} size="2x" className={styles.skypeIcon} />
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" className={styles.skypeIcon} />
                    </div>
                </div>
                {/* <div className={styles.button2}><button>Написать нам</button></div> */}
                <p className={styles.cop}>Created by <a href="https://sterrasoft.com/" target="blanc">S-Terra-Soft</a></p>

            </div>
        </div>
    );
};

export default Footer;