import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class SocialShare extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ul className="SocialShare">
                <li className="SocialShare__item SocialShare__item--facebook">
                    <Link to="https://www.facebook.com/">
                        <svg viewBox="-451 452.9 96.1 96.1">
                            <path d="M-378.9,452.9l-12.5,0c-14,0-23.1,9.3-23.1,23.7v10.9H-427c-1.1,0-2,0.9-2,2v15.8c0,1.1,0.9,2,2,2h12.5V547
                                c0,1.1,0.9,2,2,2h16.4c1.1,0,2-0.9,2-2v-39.9h14.7c1.1,0,2-0.9,2-2l0-15.8c0-0.5-0.2-1-0.6-1.4c-0.4-0.4-0.9-0.6-1.4-0.6h-14.7
                                v-9.2c0-4.4,1.1-6.7,6.8-6.7l8.4,0c1.1,0,2-0.9,2-2v-14.7C-377,453.8-377.8,452.9-378.9,452.9z"/>
                        </svg>
                    </Link>
                </li>
                <li className="SocialShare__item SocialShare__item--instagram">
                    <Link to="https://www.instagram.com/">
                        <svg viewBox="-414 416.9 169.1 169.1">
                        <g>
                            <path d="M-291.6,416.9h-75.8c-25.7,0-46.7,20.9-46.7,46.7v75.8c0,25.7,20.9,46.7,46.7,46.7h75.8
                                c25.7,0,46.7-20.9,46.7-46.7v-75.8C-244.9,437.9-265.9,416.9-291.6,416.9z M-259.9,539.3c0,17.5-14.2,31.7-31.7,31.7h-75.8
                                c-17.5,0-31.7-14.2-31.7-31.7v-75.8c0-17.5,14.2-31.7,31.7-31.7h75.8c17.5,0,31.7,14.2,31.7,31.7L-259.9,539.3L-259.9,539.3z"/>
                            <path d="M-329.5,457.9c-24,0-43.6,19.5-43.6,43.6c0,24,19.5,43.6,43.6,43.6s43.6-19.5,43.6-43.6
                                C-285.9,477.4-305.4,457.9-329.5,457.9z M-329.5,530c-15.7,0-28.6-12.8-28.6-28.6c0-15.8,12.8-28.6,28.6-28.6s28.6,12.8,28.6,28.6
                                C-300.9,517.2-313.7,530-329.5,530z"/>
                            <path d="M-284.1,445.2c-2.9,0-5.7,1.2-7.8,3.2c-2.1,2-3.2,4.9-3.2,7.8c0,2.9,1.2,5.7,3.2,7.8c2,2,4.9,3.2,7.8,3.2
                                c2.9,0,5.7-1.2,7.8-3.2c2.1-2.1,3.2-4.9,3.2-7.8c0-2.9-1.2-5.7-3.2-7.8C-278.3,446.4-281.2,445.2-284.1,445.2z"/>
                        </g>
                        </svg>
                    </Link>
                </li>
                <li className="SocialShare__item SocialShare__item--twitter">
                    <Link to="https://twitter.com/">
                        <svg viewBox="-193 195 612 612">
                            <g>
                                <g>
                                    <path d="M419,311.3c-22.5,10-46.7,16.8-72.1,19.8c25.9-15.5,45.8-40.2,55.2-69.4c-24.3,14.4-51.2,24.8-79.8,30.5
                                        c-22.9-24.4-55.5-39.7-91.6-39.7c-69.3,0-125.6,56.2-125.6,125.5c0,9.8,1.1,19.4,3.3,28.6C4.1,401.3-88.4,351.3-150.4,275.4
                                        c-10.8,18.5-17,40.1-17,63.1c0,43.6,22.2,82,55.8,104.5c-20.6-0.7-39.9-6.3-56.9-15.8v1.6c0,60.8,43.3,111.6,100.7,123.1
                                        c-10.5,2.8-21.6,4.4-33.1,4.4c-8.1,0-15.9-0.8-23.6-2.3c16,49.9,62.3,86.2,117.3,87.2c-42.9,33.7-97.1,53.7-155.9,53.7
                                        c-10.1,0-20.1-0.6-29.9-1.7c55.6,35.7,121.5,56.5,192.4,56.5c230.9,0,357.2-191.3,357.2-357.2l-0.4-16.3
                                        C380.9,358.5,402.2,336.4,419,311.3z"/>
                                </g>
                            </g>
                        </svg>
                    </Link>
                </li>
            </ul>
        )
    }
}

export default SocialShare;


