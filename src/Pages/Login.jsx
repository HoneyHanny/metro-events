import { ThemeProvider } from '@emotion/react'
import React from 'react'
import '../css/login.css'

// const defaultTheme = createTheme()

// NOTE(hans): Login template
// https://github.com/mui/material-ui/tree/v5.15.12/docs/data/material/getting-started/templates/sign-up
const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
    }

    return (
        <>
            <svg
                width='561'
                height='568'
                viewBox='0 0 561 568'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='gray-vector'
            >
                <g filter='url(#filter0_b_19_187)'>
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M303.536 0.0648212C377.508 -2.68965 419.217 82.9355 461.935 143.388C495.454 190.822 505.602 244.784 516.745 301.787C532.462 382.19 592.955 475.593 538.913 537.164C485.081 598.495 385.052 548.516 303.536 544.699C228.692 541.196 147.475 563.221 89.2121 516.111C26.9744 465.788 -11.5433 380.471 3.11087 301.787C16.5918 229.403 104.559 206.937 156.51 154.761C208.691 102.355 229.633 2.81675 303.536 0.0648212Z'
                        fill='#F0F0F0'
                    />
                </g>
                <defs>
                    <filter
                        id='filter0_b_19_187'
                        x='-50'
                        y='-50'
                        width='660.929'
                        height='667.507'
                        filterUnits='userSpaceOnUse'
                        color-interpolation-filters='sRGB'
                    >
                        <feFlood
                            flood-opacity='0'
                            result='BackgroundImageFix'
                        />
                        <feGaussianBlur
                            in='BackgroundImageFix'
                            stdDeviation='25'
                        />
                        <feComposite
                            in2='SourceAlpha'
                            operator='in'
                            result='effect1_backgroundBlur_19_187'
                        />
                        <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='effect1_backgroundBlur_19_187'
                            result='shape'
                        />
                    </filter>
                </defs>
            </svg>
            <svg
                width='640'
                height='614'
                viewBox='0 0 640 614'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='blue-vector'
            >
                <g filter='url(#filter0_b_19_188)'>
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M435.162 33.577C510.256 65.2688 571.441 122.07 604.934 196.378C638.67 271.229 656.262 361.973 615.231 433.087C577.015 499.322 484.823 494.678 414.926 525.695C344.86 556.786 287.053 624.472 211.371 612.298C124.57 598.336 38.3746 542.872 8.24597 460.278C-20.9721 380.181 35.9197 300.443 68.9377 221.836C100.425 146.874 119.937 59.3868 192.25 22.2144C267.194 -16.311 357.526 0.812541 435.162 33.577Z'
                        fill='#596EC6'
                    />
                </g>
                <defs>
                    <filter
                        id='filter0_b_19_188'
                        x='-49.8395'
                        y='-49.8682'
                        width='738.903'
                        height='713.615'
                        filterUnits='userSpaceOnUse'
                        color-interpolation-filters='sRGB'
                    >
                        <feFlood
                            flood-opacity='0'
                            result='BackgroundImageFix'
                        />
                        <feGaussianBlur
                            in='BackgroundImageFix'
                            stdDeviation='25'
                        />
                        <feComposite
                            in2='SourceAlpha'
                            operator='in'
                            result='effect1_backgroundBlur_19_188'
                        />
                        <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='effect1_backgroundBlur_19_188'
                            result='shape'
                        />
                    </filter>
                </defs>
            </svg>
            {/* <svg
                width='597'
                height='359'
                viewBox='0 0 597 359'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='container'
            >
                <g filter='url(#filter0_bd_19_186)'>
                    <rect x='4' width='589' height='351' rx='49' fill='white' />
                </g>
                <defs>
                    <filter
                        id='filter0_bd_19_186'
                        x='-46'
                        y='-50'
                        width='689'
                        height='451'
                        filterUnits='userSpaceOnUse'
                        color-interpolation-filters='sRGB'
                    >
                        <feFlood
                            flood-opacity='0'
                            result='BackgroundImageFix'
                        />
                        <feGaussianBlur
                            in='BackgroundImageFix'
                            stdDeviation='25'
                        />
                        <feComposite
                            in2='SourceAlpha'
                            operator='in'
                            result='effect1_backgroundBlur_19_186'
                        />
                        <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                        />
                        <feOffset dy='4' />
                        <feGaussianBlur stdDeviation='2' />
                        <feComposite in2='hardAlpha' operator='out' />
                        <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                        />
                        <feBlend
                            mode='normal'
                            in2='effect1_backgroundBlur_19_186'
                            result='effect2_dropShadow_19_186'
                        />
                        <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='effect2_dropShadow_19_186'
                            result='shape'
                        />
                    </filter>
                </defs>
            </svg> */}

            {/* <div>
                <div className='input-fields'>
                    <h2>Log In</h2>
                    Username
                    <input></input>
                    Password
                    <input></input>
                    <button></button>
                    Don't have an account yet? <link>Sign up</link>
                </div>
                <div className='app-name'>MetroEvent</div>
            </div> */}
        </>
    )
}

export default Login
