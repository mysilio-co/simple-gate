const iconFromPath = (path) => ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20" fill="currentColor"
    className={`${className || ''}`} {...props}>
    {path}
  </svg>
)

export const FacebookIcon = ({ className = "" }) => (
  <svg className={`${className}`} fill="none" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M58.666 32C58.666 17.272 46.728 5.334 32 5.334S5.333 17.272 5.333 32c0 13.31 9.752 24.342 22.501 26.342V39.709h-6.773V32h6.773v-5.875c0-6.682 3.979-10.373 10.072-10.373 2.918 0 5.968.52 5.968.52v6.56h-3.36c-3.314 0-4.346 2.056-4.346 4.165V32h7.394l-1.181 7.707h-6.213v18.635c12.746-2 22.498-13.032 22.498-26.342z"/>
  </svg>
)

export const InstagramIcon = ({ className = "" }) => (
  <svg className={`${className}`} fill="none" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.84 5.333c6.48 0 7.424.035 10.154.16 2.838.131 4.776.582 6.472 1.24a13.073 13.073 0 0 1 4.726 3.075 13.072 13.072 0 0 1 3.074 4.726c.659 1.696 1.11 3.634 1.24 6.472.128 2.845.16 3.752.16 10.994v.214c0 7.047-.032 7.965-.16 10.78-.13 2.838-.581 4.777-1.24 6.473a13.072 13.072 0 0 1-3.074 4.725 13.074 13.074 0 0 1-4.726 3.075c-1.696.658-3.634 1.11-6.472 1.24-2.845.128-3.752.16-10.994.16h-.214c-7.048 0-7.965-.032-10.781-.16-2.837-.13-4.776-.581-6.472-1.24a13.073 13.073 0 0 1-4.725-3.075 13.073 13.073 0 0 1-3.075-4.725c-.659-1.696-1.11-3.635-1.24-6.472-.125-2.73-.16-3.677-.16-10.155v-1.68c0-6.48.035-7.424.16-10.154.13-2.838.581-4.776 1.24-6.473a13.072 13.072 0 0 1 3.075-4.725 13.072 13.072 0 0 1 4.725-3.074c1.696-.66 3.635-1.11 6.472-1.24 2.73-.126 3.677-.16 10.155-.16h1.68zm-.216 4.806h-1.248c-6.55 0-7.424.03-10.152.155-2.6.12-4.011.551-4.952.917-1.246.485-2.134 1.061-3.067 1.995-.933.933-1.51 1.82-1.995 3.066-.365.942-.8 2.352-.917 4.952-.125 2.728-.155 3.603-.155 10.152v1.248c0 6.55.03 7.424.155 10.152.12 2.6.552 4.01.917 4.952.486 1.243 1.064 2.133 1.995 3.067.933.933 1.821 1.51 3.067 1.994.941.366 2.352.8 4.952.918 2.81.128 3.653.154 10.776.154h.213c6.925 0 7.779-.026 10.56-.154 2.603-.12 4.013-.552 4.955-.918 1.242-.485 2.133-1.06 3.066-1.994.934-.934 1.51-1.822 1.995-3.067.365-.941.8-2.352.917-4.952.128-2.813.155-3.653.155-10.776v-.213c0-6.925-.027-7.779-.155-10.56-.12-2.603-.552-4.014-.917-4.955a8.26 8.26 0 0 0-1.995-3.066 8.262 8.262 0 0 0-3.066-1.995c-.942-.366-2.352-.8-4.952-.918-2.728-.125-3.603-.154-10.152-.154zM32 18.307a13.693 13.693 0 1 1 0 27.385 13.693 13.693 0 0 1 0-27.385zm0 4.805a8.888 8.888 0 1 0 0 17.776 8.888 8.888 0 0 0 0-17.776zm14.234-8.546a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4z" fill="#fff"/>
  </svg>
)

export const TwitterIcon = ({ className = "" }) => (
  <svg className={`${className}`} fill="none" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.106 54.009c20.126 0 31.134-16.675 31.134-31.133 0-.475 0-.947-.032-1.414a22.26 22.26 0 0 0 5.458-5.67 21.843 21.843 0 0 1-6.285 1.724 10.982 10.982 0 0 0 4.81-6.054 21.93 21.93 0 0 1-6.946 2.656A10.952 10.952 0 0 0 31.597 24.1 31.068 31.068 0 0 1 9.045 12.668a10.95 10.95 0 0 0 3.387 14.605 10.86 10.86 0 0 1-4.966-1.365v.138a10.947 10.947 0 0 0 8.779 10.726 10.92 10.92 0 0 1-4.941.186 10.955 10.955 0 0 0 10.224 7.6 21.955 21.955 0 0 1-16.195 4.534 30.976 30.976 0 0 0 16.773 4.906" fill="#fff"/>
  </svg>
)

export const GithubIcon = ({ className = "" }) => (
  <svg className={`${className}`} fill="none" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M32 5.333c-14.728 0-26.667 11.958-26.667 26.712 0 11.8 7.64 21.814 18.237 25.344 1.334.246 1.819-.578 1.819-1.288 0-.632-.021-2.314-.035-4.54-7.418 1.612-8.984-3.582-8.984-3.582-1.21-3.088-2.96-3.91-2.96-3.91-2.421-1.653.184-1.62.184-1.62 2.675.186 4.083 2.751 4.083 2.751 2.379 4.08 6.243 2.901 7.76 2.219.245-1.725.933-2.901 1.696-3.568-5.92-.675-12.147-2.968-12.147-13.203 0-2.915 1.04-5.301 2.744-7.168-.274-.675-1.189-3.392.262-7.067 0 0 2.24-.72 7.333 2.736A25.505 25.505 0 0 1 32 18.252c2.266.01 4.546.306 6.677.898 5.09-3.456 7.325-2.738 7.325-2.738 1.456 3.677.539 6.394.267 7.07 1.707 1.866 2.741 4.252 2.741 7.167 0 10.262-6.237 12.52-12.176 13.182.958.824 1.808 2.453 1.808 4.946 0 3.568-.032 6.45-.032 7.325 0 .715.48 1.547 1.835 1.286a26.717 26.717 0 0 0 18.221-25.342C58.666 17.291 46.725 5.333 32 5.333z" fill="#fff"/>
  </svg>
)

export const DribbleIcon = ({ className = "" }) => (
  <svg className={`${className}`} fill="none" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M32 5.333C17.28 5.333 5.333 17.28 5.333 32 5.333 46.72 17.28 58.667 32 58.667c14.693 0 26.666-11.947 26.666-26.667C58.666 17.28 46.693 5.334 32 5.334zm17.613 12.294a22.672 22.672 0 0 1 5.147 14.17c-.75-.143-8.27-1.677-15.848-.722-.174-.376-.32-.781-.491-1.187a67.771 67.771 0 0 0-1.504-3.296c8.387-3.413 12.205-8.33 12.696-8.965zM32 9.267a22.715 22.715 0 0 1 15.098 5.728c-.405.576-3.848 5.176-11.946 8.213-3.731-6.853-7.867-12.466-8.504-13.333 1.754-.41 3.55-.614 5.352-.608zm-9.688 2.141a143.713 143.713 0 0 1 8.445 13.16c-10.645 2.835-20.045 2.773-21.056 2.773a22.883 22.883 0 0 1 12.61-15.933zM9.208 32.027v-.694c.986.027 12.032.174 23.4-3.24a66.764 66.764 0 0 1 1.85 3.875c-.29.088-.608.174-.896.262C21.818 36.016 15.57 46.37 15.05 47.24a22.728 22.728 0 0 1-5.842-15.213zM32 54.792a22.62 22.62 0 0 1-13.971-4.8c.405-.84 5.035-9.75 17.875-14.232.058-.026.088-.026.144-.058a94.183 94.183 0 0 1 4.861 17.266 22.4 22.4 0 0 1-8.91 1.824zm12.696-3.907c-.23-1.386-1.446-8.04-4.424-16.224 7.144-1.128 13.392.723 14.17.984a22.581 22.581 0 0 1-9.746 15.24z" fill="#fff"/>
  </svg>
)