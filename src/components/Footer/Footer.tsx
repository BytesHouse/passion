import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTelegram,
    faViber,
    // faVk,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import LogoMaracuya from "../LogoMaracuya/LogoMaracuya";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer}>
                <div className={styles.flexPhone}>
                    <LogoMaracuya enter={undefined} />
                    <div className={styles.actionBlock}>
                        <a
                            href="tel: +37368762427"
                            className={styles.phoneNumber}
                        >
                            +373(68)76-24-27
                        </a>
                        <a href="tel: +37368762427" className={styles.button}>
                            Позвонить
                        </a>
                    </div>
                </div>
                <div className={styles.flexP}>
                    <div className={styles.flexInfo}>
                        <p>
                            <strong>Правовая информация</strong>
                        </p>
                        <div>
                            <p>Дубоссары</p>
                            <p>ул. Ленина 101</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`${styles.container} ${styles.flexCol}`}>
                        <p>
                            <strong>
                                Остались вопросы? А мы всегда на связи:
                            </strong>
                        </p>
                        <span>Время работы с 8:00 до 22:00</span>
                    </div>

                    <div className={styles.footerLinks}>
                        <Link to="/">Главная страница</Link>
                        <Link to="/privacy">Политика конфициальности</Link>
                    </div>

                    <div className={styles.flexSocial}>
                        <FontAwesomeIcon
                            icon={faTelegram}
                            size="3x"
                            className={styles.telegramIcon}
                        />
                        <FontAwesomeIcon
                            icon={faViber}
                            size="3x"
                            className={styles.viberIcon}
                        />
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            size="3x"
                            className={styles.whatsAppIcon}
                        />
                    </div>
                </div>
                <p className={styles.cop}>
                    Created by{" "}
                    <a
                        className={styles.link}
                        href="https://sterrasoft.com/"
                        target="blanc"
                    >
                        S-Terra-Soft
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
