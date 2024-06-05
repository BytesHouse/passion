const Burger = ({ enter }: { enter: any }) => {
    return (
        <button
            onClick={enter}
            className="bg-inherit border-none"
            type="button"
        >
            <svg
                width="100"
                height="100"
                viewBox="0 0 39 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="39" height="3" rx="1.5" fill="#686466" />
                <rect y="12" width="39" height="3" rx="1.5" fill="#686466" />
                <rect y="24" width="39" height="3" rx="1.5" fill="#686466" />
            </svg>
        </button>
    );
};

export default Burger;
