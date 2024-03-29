import Logo from "../Logo/Logo";
import styles from './Footer.module.css';

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
                    <p>Остались вопросы? А мы всегда на связи:</p>
                    <div>
                        <div>Viber</div>
                        <div>Skype</div>
                        <div>Messeger</div>
                        <div>Telegram</div>
                        <div>FaceBook</div>
                        <div>ВКонтакте</div>
                    </div>
                </div>
                <p>Created by S-Terra-Soft</p>

            </div>
        </div>
    );
};

export default Footer;