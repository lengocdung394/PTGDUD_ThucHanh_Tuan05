import { useState } from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer class="footer">
                <div className='flex-3' class="footer-content">
                    <div class="about">
                        <h3>About Us</h3>
                        <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                        <div class="email-subscription">
                            <input type="email" className='p-2.5 mr-1.5 w-64 border rounded outline-none ' placeholder="Enter your email" class="email-input" />
                            <button class="send-button">Send</button>
                        </div>
                    </div>
                    <div class="footer-bottom" className='mt-24 ml-0 fl'>
                        <img src="logo.png" alt="Chefify Logo" class="footer-logo"/>
                            <div class="footer-logo">Chefify</div>
                            <div class="footer-rights">© 2023 Chefify Company | <a href="#">Terms of Service</a> | <a href="#">Privacy
                                Policy</a></div>
                    </div>

                </div>
                <div className='flex-1' class="learn">
                    <h3>Learn More</h3>
                    <ul className='p-0'>
                        <li className='mb-3.5'><a className='text-gray-600 no-underline' href="#">Our Cooks</a></li>
                        <li className='mb-3.5'><a className='text-gray-600 no-underline' href="#">See Our Features</a></li>
                        <li className='mb-3.5'><a className='text-gray-600 no-underline' href="#">FAQ</a></li>
                    </ul>
                    <h3 id="h3">Shop</h3>
                    <ul className='p-0'>
                        <li className='mb-3.5'><a className='text-gray-600 no-underline' href="#">Thanksgiving</a></li>
                        <li className='mb-3.5'><a className='text-gray-600 no-underline' href="#">Halloween</a></li>
                    </ul>
                </div>
                <div className='flex-1' class="recipes">
                    <h3 className=''>Recipes</h3>
                    <ul className='p-0'>
                        <li className='mb-3.5'><a className='text-gray-600 no-underline' href="#">What to Cook This Week</a></li>
                        <li className='mb-3.5'><a className='text-gray-600 no-underline' href="#">Pasta</a></li>
                        <li className='mb-3.5'><a className='text-gray-600 no-underline' href="#">Dinner</a></li>
                        <li className='mb-3.5'><a className='text-gray-600 no-underline' href="#">Healthy</a></li>
                        <li className='mb-3.5'><a className='text-gray-600 no-underline' href="#">Vegetarian</a></li>
                        <li className='mb-3.5'><a className='text-gray-600 no-underline' href="#">Vegan</a></li>
                        <li className='mb-3.5'><a className='text-gray-600 no-underline' href="#">Christmas</a></li>
                    </ul>

                </div>

            </footer>
        </>
    )
}