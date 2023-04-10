import react from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer__container footer">
                <div className="inner__container mt-4">
                    <div className="footer__layout row wrap">
                        <div className="flex md4 xs12">
                            <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDIgMjYuNzkiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZTYzNzhmO30uY2xzLTJ7ZmlsbDojNDRkM2Y0O30uY2xzLTN7ZmlsbDojMTcyNTM4O30uY2xzLTR7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+RWdvX0xvZ29fMTwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTYuOTMsMy41MWw0LjI1LDIuNGE4LjQ5LDguNDksMCwwLDEsLjE1LDE0LjcxbC00LjIsMi40OUwxMi45MiwyNS42QTguNSw4LjUsMCwwLDEsLjEsMTguMzdsMC00Ljg5TDAsOC42QTguNSw4LjUsMCwwLDEsMTIuNjcsMS4xMVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik05Ljc5LDIzLjI4LDUuNTQsMjAuODlBOC41LDguNSwwLDAsMSw1LjM4LDYuMTdMOS41OSwzLjY4LDEzLjgsMS4yQTguNDksOC40OSwwLDAsMSwyNi42Miw4LjQybC4wNSw0Ljg5LDAsNC44OGE4LjQ5LDguNDksMCwwLDEtMTIuNjcsNy40OVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0yMS4xOCw1LjksMTYuOTMsMy41MWwtMy42MS0yTDkuNTksMy42OCw1LjM4LDYuMTdhOC41LDguNSwwLDAsMCwuMTYsMTQuNzJsNC4yNSwyLjM5LDMuNjEsMiwzLjczLTIuMjEsNC4yLTIuNDlBOC41LDguNSwwLDAsMCwyMS4xOCw1LjlaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTksMTMuNTZoMGE1Ljg0LDUuODQsMCwwLDAsMC0uNzNoMGE1LjQ1LDUuNDUsMCwwLDAtLjI1LTEuNjNoMGE1LjYzLDUuNjMsMCwwLDAtNC44MS0zLjk1aC0uNTlhNS42MSw1LjYxLDAsMCwwLTUuNTIsNC41N2gwYTIuNTYsMi41NiwwLDAsMCwwLC4yN3YwbDAsLjIzYS4xOS4xOSwwLDAsMSwwLC4wOGMwLC4wNywwLC4xMywwLC4ydi4zM2gwQTUuNTgsNS41OCwwLDAsMCw4LDE0LjU3SDhhNC42NSw0LjY1LDAsMCwwLC4yOC43LDEzLjI2LDEzLjI2LDAsMCwwLDUuMDUsNS42N2wwLDBoMEExMy4xMSwxMy4xMSwwLDAsMCwxOC41NSwxNWE1LjUyLDUuNTIsMCwwLDAsLjM5LTEuNDJBLjA2LjA2LDAsMCwxLDE5LDEzLjU2WiIvPjxjaXJjbGUgY2xhc3M9ImNscy0zIiBjeD0iMTMuMzYiIGN5PSIxMi44NiIgcj0iMS45NiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTUyLjQzLDYuM2ExLjc2LDEuNzYsMCwwLDAtMS43Ni0xLjc2SDQwLjE1YTguODksOC44OSwwLDEsMCwwLDE3Ljc4SDUwLjY3YTEuNzYsMS43NiwwLDEsMCwwLTMuNTFINDAuMTVhNS4zOCw1LjM4LDAsMSwxLDAtMTAuNzZINTAuNjdBMS43NSwxLjc1LDAsMCwwLDUyLjQzLDYuM1oiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik05My4xLDQuNTRoLTVhOC44OSw4Ljg5LDAsMCwwLDAsMTcuNzhoNWE4Ljg5LDguODksMCwxLDAsMC0xNy43OFptMCwxNC4yN2gtNWE1LjM4LDUuMzgsMCwxLDEsMC0xMC43Nmg1YTUuMzgsNS4zOCwwLDEsMSwwLDEwLjc2WiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTcxLjQ2LDExLjY3SDYzLjI5YTEuNzYsMS43NiwwLDEsMCwwLDMuNTJoOC4xN2ExLjgxLDEuODEsMCwwLDEsMCwzLjYySDYyLjZhNS4zOCw1LjM4LDAsMCwxLDAtMTAuNzZoOS44NmExLjc2LDEuNzYsMCwxLDAsMC0zLjUxSDYyLjZhOC44OSw4Ljg5LDAsMSwwLDAsMTcuNzhoOC44NmE1LjMzLDUuMzMsMCwwLDAsMC0xMC42NVoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik00MC42OSwxMS42N2ExLjc2LDEuNzYsMCwxLDAsMCwzLjUyaDcuNzhhMS43NiwxLjc2LDAsMCwwLDAtMy41MloiLz48L3N2Zz4=" alt="" />
                        </div>
                        <div className="flex align-center my-3 md1 xs12 offset-md1">
                            <a href="https://twitter.com/Ego_Now" target="_blank" style={{textDecoration: 'none'}}>
                                <div className="social-container">
                                    {/* <i className="flaticon flaticon-twitter-social-outlined-logo"></i> */}
                                    <FontAwesomeIcon icon="fa-brands fa-twitter" className='flaticon' />
                                </div>
                            </a>
                        </div>
                        <div className="flex align-center md2 xs6 offset-md2">
                            <a href="https://play.google.com/store/apps/details?id=ego.now.client" target="_blank" className="social-media-btn android-client">
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM1Q0RBREQ7IiBwb2ludHM9IjI5LjUzLDAgMjkuNTMsMjUxLjUwOSAyOS41Myw1MTIgMjk5LjAwNCwyNTEuNTA5ICIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0JERUNDNDsiIHBvaW50cz0iMzY5LjA2NywxODAuNTQ3IDI2Mi4xNzUsMTE5LjQ2NyAyOS41MywwIDI5OS4wMDQsMjUxLjUwOSAiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkNBOTY7IiBkPSJNMzY5LjA2NywxODAuNTQ3bC03MC4wNjMsNzAuOTYxbDcwLjA2Myw3MC45NjFsMTA4LjY4OC02Mi44NzdjNi4yODgtMy41OTMsNi4yODgtMTEuNjc3LDAtMTUuMjcNCglMMzY5LjA2NywxODAuNTQ3eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" alt="" className="icon" />
                                <div className="btn-content">
                                    <span className="btn-top">Get in on</span>
                                    <span className="btn-bottom">Google Play</span>
                                </div>
                            </a>
                        </div>
                        <div className="flex align-center md2 xs6">
                            <a href="https://itunes.apple.com/us/app/ego-now/id1378953127?mt=8" target="_blank" className="social-media-btn ios-client">
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTM5NS43NDgsMjcyLjA0NmMtMC42NDYtNjQuODQxLDUyLjg4LTk1LjkzOCw1NS4yNzEtOTcuNDgzYy0zMC4wNzUtNDQuMDEtNzYuOTI1LTUwLjAzOS05My42Mi01MC43MzYNCgkJYy0zOS44NzEtNC4wMzctNzcuNzk4LDIzLjQ3NC05OC4wMzMsMjMuNDc0Yy0yMC4xODQsMC01MS40MDktMjIuODc3LTg0LjQ3Ni0yMi4yNzZjLTQzLjQ1OCwwLjY0Ni04My41MjksMjUuMjY5LTEwNS45MDYsNjQuMTkNCgkJYy00NS4xNTIsNzguMzUtMTEuNTYzLDE5NC40MiwzMi40NDUsMjU3Ljk2M2MyMS41MDQsMzEuMTA0LDQ3LjE0Niw2Ni4wMzgsODAuODEzLDY0Ljc5YzMyLjQyMS0xLjI5NCw0NC42ODEtMjAuOTc5LDgzLjg3OC0yMC45NzkNCgkJYzM5LjE5NiwwLDUwLjIxNSwyMC45NzksODQuNTI0LDIwLjMzNWMzNC44ODgtMC42NDgsNTYuOTkxLTMxLjY5OSw3OC4zNDctNjIuODk4YzI0LjY5NC0zNi4wODQsMzQuODYyLTcxLjAxOSwzNS40NjItNzIuODEyDQoJCUM0NjMuNjc4LDM3NS4yNiwzOTYuNDIyLDM0OS40OTUsMzk1Ljc0OCwyNzIuMDQ2eiBNMzMxLjI4LDgxLjc2MUMzNDkuMTQ5LDYwLjA4MiwzNjEuMjEsMzAuMDA1LDM1Ny45MiwwDQoJCWMtMjUuNzM5LDEuMDQ4LTU2LjkzOCwxNy4xNDUtNzUuNDA1LDM4Ljc3NWMtMTYuNTcsMTkuMTg4LTMxLjA3NSw0OS44MTMtMjcuMTg4LDc5LjIxOA0KCQlDMjg0LjA2MSwxMjAuMjM1LDMxMy4zOTIsMTAzLjM5MSwzMzEuMjgsODEuNzYxeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" alt="" className="icon" />
                                <div className="btn-content">
                                    <span className="btn-top">Available on</span>
                                    <span className="btn-bottom">App Store</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="footer__layout my-5 text-xs-center row wrap">
                        <div className="flex xs12 md5">
                            <p className="text">
                                With Ego, every single ride is a new adventure. Are you ready for a new one?
                            </p>
                        </div>
                        <div className="flex xs12 md4">
                            <a href="/en/privacy" className="footer-link">Privacy Policy </a>
                            <br />
                            <a href="/en/terms" className="footer-link">Terms and Conditions</a>
                        </div>
                        <div className="flex xs12 md3">
                            <a href="https://www.youtube.com/watch?v=NZ8rj4f1p0g" target="_blank" className="footer-link">
                                How to use Ego Driver
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-after mt-2"></div>
        </>
    )
}

export default Footer