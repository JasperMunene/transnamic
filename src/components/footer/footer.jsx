"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function Footer() {
    const [isAddressVisible, setAddressVisible] = useState(false);
    const [isQuickLinksVisible, setQuickLinksVisible] = useState(false);
    const [isUtilityPagesVisible, setUtilityPagesVisible] = useState(false);
    const [isContactVisible, setContactVisible] = useState(false);

    const toggleVisibility = (section) => {
        if (section === 'address') {
            setAddressVisible(!isAddressVisible);
        } else if (section === 'quickLinks') {
            setQuickLinksVisible(!isQuickLinksVisible);
        } else if (section === 'utilityPages') {
            setUtilityPagesVisible(!isUtilityPagesVisible);
        } else if (section === 'contact') {
            setContactVisible(!isContactVisible);
        }
    };

    return (
        <section className="footer-section mt-3">
            <div className="w-layout-blockcontainer container w-container">
                <div className="footer-main-wrapper">
                    <div className="footer-header-block">
                        <Link href="/home-pages/home-v1" aria-current="page" className="footer-brand-logo-link-block w-inline-block w--current">
                            <h1 className="text-white">Transnamic</h1>
                        </Link>
                        <div className="social-media-wrapper">
                            <a href="https://www.instagram.com/" target="_blank" className="social-link-block w-inline-block">
                                <div className="social-icon-text">IG</div>
                            </a>
                            <a href="https://x.com/" target="_blank" className="social-link-block w-inline-block">
                                <div className="social-icon-text">TW</div>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" className="social-link-block w-inline-block">
                                <div className="social-icon-text">FB</div>
                            </a>
                            <a href="https://web.whatsapp.com/" target="_blank" className="social-link-block w-inline-block">
                                <div className="social-icon-text">WS</div>
                            </a>
                        </div>
                    </div>

                    <div className="footer-upper-block">
                        <div className="footer-main-block">
                            <div className="footer-about-wrapper">
                                <div className="footer-heading" onClick={() => toggleVisibility('address')}>
                                    Address
                                </div>
                                {isAddressVisible && <p className="footer-about-paragraph"> - lucman</p>}
                            </div>

                            <div className="footer-column">
                                <div className="footer-heading" onClick={() => toggleVisibility('quickLinks')}>
                                    Quick Links
                                </div>
                                {isQuickLinksVisible && (
                                    <div className="footer-link-wrapper">
                                        <a href="/about-us" className="footer-link">About</a>
                                        <a href="/services" className="footer-link">Services</a>
                                        <a href="/project" className="footer-link">Project</a>
                                        <a href="/blog" className="footer-link">Blog</a>
                                    </div>
                                )}
                            </div>

                            <div className="footer-column">
                                <div className="footer-heading" onClick={() => toggleVisibility('utilityPages')}>
                                    Utility Pages
                                </div>
                                {isUtilityPagesVisible && (
                                    <div className="footer-link-wrapper">
                                        <a href="/401" className="footer-link">Password Protected</a>
                                        <a href="/404" className="footer-link">404 Not Found</a>
                                        <a href="/template-info/licenses" className="footer-link">Licenses</a>
                                        <a href="/template-info/changelog" className="footer-link">Changelog</a>
                                        <a href="/template-info/style-guide" className="footer-link">Style Guide</a>
                                    </div>
                                )}
                            </div>

                            <div className="footer-contact-block">
                                <div className="footer-heading" onClick={() => toggleVisibility('contact')}>
                                    Contact
                                </div>
                                {isContactVisible && (
                                    <div className="footer-contact-link-block">
                                        <p className="footer-contact-paragraph">
                                            We are dedicated to driving your business&apos;s success. With a team of experienced professionals.
                                        </p>
                                        <a href="mailto:transnamic@gmail.com" className="footer-link">transnamic@gmail.com</a>
                                        <a href="tel:(254)721150988" className="footer-link">(254) 721150988</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="footer-lower-block">
                        <div className="footer-copyright-text">
                            Copyright © Transnamic | Designed by <a href="/" target="_blank" className="footer-copyright-link"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
