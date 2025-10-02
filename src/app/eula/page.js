'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function EULA() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg'
                : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    NowStart Solution
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-center space-x-1">
                                <a href="/" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    Home
                                </a>
                                <a href="/privacy-policy" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    Privacy Policy
                                </a>
                                <a href="/refund-policy" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    Refund Policy
                                </a>
                                <a href="/terms-conditions" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    Terms & Conditions
                                </a>
                                <a href="/eula" className="group relative px-4 py-2 text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 bg-blue-50">
                                    EULA
                                </a>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Nav */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                                <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
                                <a href="/privacy-policy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy Policy</a>
                                <a href="/refund-policy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Refund Policy</a>
                                <a href="/terms-conditions" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms & Conditions</a>
                                <a href="/eula" className="block px-3 py-2 text-blue-600 bg-blue-50 rounded-md">EULA</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero */}
            <div className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">End User License Agreement (EULA)</h1>
                    <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                        This EULA is a legal agreement between you and NowStart Solution regarding the use of our software.
                    </p>
                    <div className="flex items-center justify-center mt-4 text-purple-200">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Last updated: {new Date().toLocaleDateString()}</span>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </div>

            {/* Main Content */}
            <main className="relative -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
                    <div className="p-8 space-y-12 text-gray-700">
                        
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Grant of License</h2>
                            <p>You are granted a non-transferable, non-exclusive license to install and use NowStart Solution on a single device, subject to compliance with this EULA.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Restrictions</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>You may not copy, modify, or distribute the software except as expressly allowed.</li>
                                <li>You may not reverse engineer, decompile, or disassemble the software.</li>
                                <li>You may not rent, lease, or lend the software to third parties.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Ownership</h2>
                            <p>All intellectual property rights in NowStart Solution remain with NowStart Solution Inc. This license does not grant you ownership of the software.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Updates</h2>
                            <p>We may provide updates or patches. Continued use after updates constitutes acceptance of revised terms.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Termination</h2>
                            <p>This license is effective until terminated. You may terminate by uninstalling the software. We may terminate if you fail to comply with terms.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer</h2>
                            <p>The software is provided "as is" without warranties of any kind. We disclaim all implied warranties to the maximum extent permitted by law.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                            <p>We are not liable for any damages arising from use or inability to use the software, except as required by law.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                            <p>This agreement is governed by the laws of the State of Delaware, United States.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
                            <p>For questions regarding this EULA, please contact us at: support@nowstart.co</p>
                        </section>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="text-2xl font-bold">NowStart Solution</div>
                            </div>
                            <p className="text-gray-400 mb-4">Advanced PC optimization software for cleaning, speeding up, and protecting your computer.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                                <li><a href="/refund-policy" className="text-gray-400 hover:text-white">Refund Policy</a></li>
                                <li><a href="/terms-conditions" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                                <li><a href="/eula" className="text-gray-400 hover:text-white">EULA</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 NowStart Solution. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
