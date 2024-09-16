import { useState } from "react";

export const Options = ({ isOpen, setIsOpen, isAnimating = false, slideToggle }) => {
    const [clicked, setClicked] = useState(false);

    const toggle = () => {
        if (isAnimating) return;
        setIsOpen(prev => !prev);
        setClicked(true);
        slideToggle();
    };

    return (
        <button className={`mobile`} onClick={toggle}>
            {/* <svg width="31" height="13" viewBox="0 0 31 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect id={isOpen ? 'first' : clicked ? 'first-close' : ''} width="31" height="1" fill="white" />
                <rect id={isOpen ? 'second' : clicked ? 'second-close' : ''} x="6" y="6" width="25" height="1" fill="white" />
                <rect id={isOpen ? 'third' : clicked ? 'third-close' : ''} x="12" y="12" width="19" height="1" fill="white" />
            </svg> */}
            <svg style={{ display: isOpen ? "none" : "flex" }} width="31" height="13" viewBox="0 0 31 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="31" height="1" fill="white" />
                <rect x="6" y="6" width="25" height="1" fill="white" />
                <rect x="12" y="12" width="19" height="1" fill="white" />
            </svg>
            <svg style={{ display: isOpen ? "flex" : "none" }} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_496_937" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                    <rect width="25" height="25" rx="10" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_496_937)">
                    <path d="M7.03555 18.702C6.83196 18.9056 6.50189 18.9056 6.29831 18.702C6.09472 18.4984 6.09472 18.1683 6.29831 17.9647L8.84635 15.4167C10.4572 13.8059 10.4572 11.1942 8.84636 9.58335L6.29831 7.0353C6.09472 6.83172 6.09472 6.50165 6.29831 6.29806C6.50189 6.09448 6.83196 6.09448 7.03555 6.29806L9.58359 8.84611C11.1944 10.4569 13.8061 10.4569 15.4169 8.84611L17.965 6.29806C18.1686 6.09448 18.4986 6.09448 18.7022 6.29806C18.9058 6.50165 18.9058 6.83172 18.7022 7.0353L16.1542 9.58335C14.5433 11.1942 14.5433 13.8059 16.1542 15.4167L18.7022 17.9647C18.9058 18.1683 18.9058 18.4984 18.7022 18.702C18.4986 18.9056 18.1686 18.9056 17.965 18.702L15.4169 16.1539C13.8061 14.5431 11.1944 14.5431 9.5836 16.1539L7.03555 18.702Z" fill="white" />
                </g>
            </svg>

        </button>
    );
};

export default Options;