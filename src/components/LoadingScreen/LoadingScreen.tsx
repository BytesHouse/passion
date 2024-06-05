import cls from "./LoadingScreen.module.css";
const LoadingScreen = () => {
    return (
        <div className={cls.loading}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                width="200"
                height="200"
                style={{
                    shapeRendering: "auto",
                    display: "block",
                    background: "rgb(255, 255, 255)",
                }}
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <g transform="translate(50,50)">
                        <g transform="scale(0.7)">
                            <circle
                                cx="0"
                                cy="0"
                                r="50"
                                fill="#e90c59"
                            ></circle>
                            <circle cx="0" cy="-28" r="15" fill="#f6d678">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    dur="1s"
                                    repeatCount="indefinite"
                                    keyTimes="0;1"
                                    values="0 0 0;360 0 0"
                                ></animateTransform>
                            </circle>
                        </g>
                    </g>
                    <g></g>
                </g>
            </svg>
            <p>неГрузимся!!!</p>
        </div>
    );
};

export default LoadingScreen;
