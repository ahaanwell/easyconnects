'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TermsConditions() {
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
            {/* Modern Navigation */}
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

                        {/* Desktop Navigation */}
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-center space-x-1">
                                <a href="/" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    <span>Home</span>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                                </a>
                                <a href="/privacy-policy" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    <span>Privacy Policy</span>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                                </a>
                                <a href="/refund-policy" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    <span>Refund Policy</span>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                                </a>
                                <a href="/terms-conditions" className="group relative px-4 py-2 text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 bg-blue-50">
                                    <span>Terms & Conditions</span>
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                                </a>
                                <a href="/eula" className="group relative px-4 py-2 text-gray-700 rounded-lg text-sm font-medium transition-all duration-300">
                                    EULA
                                </a>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                                <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium">Home</a>
                                <a href="/privacy-policy" className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium">Privacy Policy</a>
                                <a href="/refund-policy" className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium">Refund Policy</a>
                                <a href="/terms-conditions" className="block px-3 py-2 text-blue-600 bg-blue-50 rounded-md text-base font-medium">Terms & Conditions</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
                            Terms & Conditions
                        </h1>
                        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                            Please read these terms carefully. By using NowStart Solution, you agree to be bound by these terms.
                        </p>
                        <div className="flex items-center justify-center space-x-4 text-purple-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Last updated: {new Date().toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </div>

            {/* Main Content */}
            <main className="relative -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">

                    {/* Content */}
                    <div className="p-8 space-y-12">
                        <section>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
                            </div>
                            <div className="space-y-6 text-gray-700">
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                                    <p className="text-lg leading-relaxed">Welcome to NowStart Solution. These Terms and Conditions ("Terms") govern your use of our PC optimization softwares and services. By downloading, installing, or using NowStart Solution, you agree to be bound by these Terms.</p>
                                </div>

                                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-8 border border-blue-200">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-blue-800">Important Notice</h3>
                                    </div>
                                    <p className="text-blue-700 text-lg">If you do not agree to these Terms, please do not use our softwares. Your continued use of NowStart Solution constitutes acceptance of any updates to these Terms.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>NowStart Solution is a comprehensive PC optimization softwares that provides:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>System cleaning and maintenance tools</li>
                                    <li>Performance optimization features</li>
                                    <li>Security scanning and protection</li>
                                    <li>Registry cleaning and repair</li>
                                    <li>Disk defragmentation and optimization</li>
                                    <li>Startup management and system monitoring</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. License and Usage Rights</h2>
                            <div className="space-y-4 text-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900">Softwares License</h3>
                                <p>NowStart Solution grants you a limited, non-exclusive, non-transferable license to use the softwarse on a single computer for personal or commercial use.</p>

                                <h3 className="text-xl font-semibold text-gray-900 mt-6">Permitted Uses</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Install and use the softwares on one computer per license</li>
                                    <li>Create backup copies for personal use</li>
                                    <li>Use the softwares for its intended optimization purposes</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900 mt-6">Prohibited Uses</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Reverse engineer, decompile, or disassemble the softwares</li>
                                    <li>Distribute, sell, or sublicense the softwares</li>
                                    <li>Use the softwares for illegal or unauthorized purposes</li>
                                    <li>Remove or modify copyright notices or proprietary labels</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>As a user of NowStart Solution, you agree to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Provide accurate and complete registration information</li>
                                    <li>Maintain the confidentiality of your account credentials</li>
                                    <li>Use the softwares in compliance with all applicable laws</li>
                                    <li>Not interfere with or disrupt the software's operation</li>
                                    <li>Report any security vulnerabilities or bugs to our support team</li>
                                    <li>Backup important data before using optimization features</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment and Billing</h2>
                            <div className="space-y-4 text-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900">Payment Terms</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>All fees are due in advance and are non-refundable except as specified in our Refund Policy</li>
                                    <li>Subscription fees are automatically renewed unless cancelled</li>
                                    <li>Price changes will be communicated with 30 days notice</li>
                                    <li>Taxes and fees may apply based on your location</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900 mt-6">Billing Information</h3>
                                <p>You are responsible for providing accurate billing information and notifying us of any changes. Failure to provide valid payment information may result in service suspension.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-green-800 mb-2">Data Security</h3>
                                    <p className="text-green-700">We implement industry-standard security measures to protect your data. However, no system is 100% secure, and you use our softwares at your own risk.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property Rights</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>NowStart Solution and all related trademarks, copyrights, and intellectual property are owned by Start Solution Inc. You may not use our intellectual property without written permission.</p>

                                <h3 className="text-xl font-semibold text-gray-900">User Content</h3>
                                <p>You retain ownership of any content you create or upload. By using our softwares, you grant us a limited license to use such content for service provision and improvement.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers and Limitations</h2>
                            <div className="space-y-4 text-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900">Softwares Disclaimer</h3>
                                <p>Start Solution is provided "as is" without warranties of any kind. We do not guarantee that the softwares will be error-free or that it will meet your specific requirements.</p>

                                <h3 className="text-xl font-semibold text-gray-900 mt-6">Limitation of Liability</h3>
                                <p>To the maximum extent permitted by law, NowStart Solution shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the software.</p>

                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Warning</h3>
                                    <p className="text-yellow-700">Always backup your important data before using system optimization features. While we strive for safety, system modifications carry inherent risks.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                            <div className="space-y-4 text-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900">Termination by You</h3>
                                <p>You may terminate your use of NowStart Solution at any time by uninstalling the softwares and cancelling any active subscriptions.</p>

                                <h3 className="text-xl font-semibold text-gray-900 mt-6">Termination by Us</h3>
                                <p>We may terminate or suspend your access to NowStart Solution immediately, without prior notice, for any violation of these Terms or for any other reason at our sole discretion.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Updates and Modifications</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>We may update NowStart Solution and these Terms from time to time. Updates to the softwares may be automatic, while changes to these Terms will be posted on our website.</p>

                                <h3 className="text-xl font-semibold text-gray-900">Acceptance of Updates</h3>
                                <p>Continued use of NowStart Solution after updates constitutes acceptance of the new terms. If you do not agree to updated terms, you must stop using the software.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law and Disputes</h2>
                            <div className="space-y-4 text-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900">Governing Law</h3>
                                <p>These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.</p>

                                <h3 className="text-xl font-semibold text-gray-900 mt-6">Dispute Resolution</h3>
                                <p>Any disputes arising from these Terms or your use of NowStart Solution shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. System Requirements</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>NowStart Solution requires the following minimum system specifications:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Windows 10 or later (64-bit)</li>
                                    <li>4 GB RAM minimum (8 GB recommended)</li>
                                    <li>500 MB free disk space</li>
                                    <li>Internet connection for updates and activation</li>
                                    <li>Administrator privileges for system optimization features</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Support and Maintenance</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>We provide technical support for NowStart Solution through various channels:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Email support: support@nowstart.co</li>
                                    <li>Online knowledge base and documentation</li>
                                    <li>Community forums and user guides</li>
                                    <li>Regular softwares updates and security patches</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>For questions about these Terms or NowStart Solution, please contact us:</p>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <p><strong>Legal Department:</strong> support@nowstart.co</p>
                                    <p><strong>General Support:</strong> support@nowstart.co</p>
                                    <p><strong>Address:</strong> NowStart Solution., IDENTY, 164, 1st, RMV Stage 2, Sanjaynagar, Bengaluru, Urban, Karnataka, 560094</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Severability and Entire Agreement</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect. These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and NowStart Solution.</p>
                            </div>
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
                            <p className="text-gray-400 mb-4">Advanced PC optimization softwares for cleaning, speeding up, and protecting your computer.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
                                <li><a href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">System Requirements</a></li>
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
