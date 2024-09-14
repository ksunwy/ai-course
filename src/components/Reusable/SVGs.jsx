export const TopLineSVG = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 1227 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1226 128V51C1226 23.3858 1203.61 1 1176 1H0" stroke="url(#paint0_linear_483_5169)" />
            <defs>
                <linearGradient id="paint0_linear_483_5169" x1="979" y1="-8.00002" x2="1226" y2="133.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#616161" />
                    <stop offset="1" stop-color="#C7C7C7" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export const BottomLineSVG = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 1228 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00003 0V77C1.00003 104.614 23.3858 127 51 127H1228" stroke="url(#paint0_linear_483_5168)" />
            <defs>
                <linearGradient id="paint0_linear_483_5168" x1="1.00005" y1="-3.49996" x2="235.5" y2="127" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#C7C7C7" stop-opacity="0" />
                    <stop offset="1" stop-color="#616161" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const QuotationsMarks = ({rotation, className}) => {
    return (
        <svg style={{transform: `rotate(${rotation}deg)`}} className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.88877 1L1 8.99989L9.88877 16.9998" stroke="white" stroke-width="0.5" />
            <path d="M16.9981 1L8.10938 8.99989L16.9981 16.9998" stroke="white" stroke-width="0.5" />
        </svg>

    )
}