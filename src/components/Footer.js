import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='details-and-links'>
            <div className='address'>
                <img src='https://startupz.world/images/white-logo.png' alt='logo' />
                <p>101 Relcon Enclave, NH-48</p>
                <p>Surat, Gujarat</p>
                <p>India - 394325</p>
            </div>
            <div className='company'>
                <h2>Company</h2>
                <ul>
                    <li>
                        <NavLink to='/about'>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactus'>Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/pricing'>Pricing</NavLink>
                    </li>
                </ul>
            </div>
            <div className='quick-links'>
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <NavLink to='/policy/guidelines'>Community Guidelines</NavLink>
                    </li>
                    <li>
                        <NavLink to='/policy'>Privacy Policy</NavLink>
                    </li>
                    <li>
                        <NavLink to='/policy/terms'>Term of uses</NavLink>
                    </li>
                    <li>
                        <NavLink to='/policy/cancellation'>Cancellation & Refund</NavLink>
                    </li>
                    <li>
                        <NavLink to='/policy/shipping'>Shipping & Exchange</NavLink>
                    </li>
                </ul>
            </div>
            <div className='faqs'>
                <h2>FAQs</h2>
                <ul>
                    <li>
                        <NavLink to='/faq'>Startup FAQs</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <div className='social-link-and-rights'>
            <div className='social-link'>
                <ul>
                    <li>
                        <NavLink to='_blank'>
                            <img src='https://cdn-icons-png.flaticon.com/512/733/733635.png' alt='twitter' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='_blank'>
                            <img src='https://cdn-icons-png.flaticon.com/512/20/20673.png' alt='facebook' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='_blank'>
                            <img src='https://cdn-icons-png.flaticon.com/512/1384/1384031.png' alt='instagram' />
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='rights'>
                <p>&#169;</p>
                <NavLink to='/'>StartupzWorld,</NavLink>
                <p>All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer