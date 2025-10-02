'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PrivacyPolicy() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
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

    const sections = [
        { id: 'information-collection', title: 'Information We Collect' },
        { id: 'how-we-use', title: 'How We Use Your Information' },
        { id: 'information-sharing', title: 'Information Sharing' },
        { id: 'data-security', title: 'Data Security' },
        { id: 'your-rights', title: 'Your Rights' },
        { id: 'cookies', title: 'Cookies & Tracking' },
        { id: 'data-retention', title: 'Data Retention' },
        { id: 'international-transfers', title: 'International Transfers' },
        { id: 'children-privacy', title: 'Children\'s Privacy' },
        { id: 'policy-changes', title: 'Policy Changes' },
        { id: 'contact-us', title: 'Contact Us' }
    ];

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
                                <a href="/privacy-policy" className="group relative px-4 py-2 text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 bg-blue-50">
                                    <span>Privacy Policy</span>
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                                </a>
                                <a href="/refund-policy" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    <span>Refund Policy</span>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                                </a>
                                <a href="/terms-conditions" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    <span>Terms & Conditions</span>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
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
                                <a href="/privacy-policy" className="block px-3 py-2 text-blue-600 bg-blue-50 rounded-md text-base font-medium">Privacy Policy</a>
                                <a href="/refund-policy" className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium">Refund Policy</a>
                                <a href="/terms-conditions" className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium">Terms & Conditions</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Your privacy is our priority. Learn how we protect and handle your personal information.
                        </p>
                        <div className="flex items-center justify-center space-x-4 text-blue-200">
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
            <main className="relative -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
                            <nav className="space-y-2">
                                {sections.map((section, index) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className={`block px-3 py-2 text-sm rounded-lg transition-all duration-200 ${activeSection === section.id
                                                ? 'bg-blue-100 text-blue-700 font-medium'
                                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                            }`}
                                        onClick={() => setActiveSection(section.id)}
                                    >
                                        {section.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-3">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">

                            {/* Content */}
                            <div className="p-8 space-y-12">
                                <section id="information-collection" className="scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
                                    </div>
                                    <div className="space-y-6 text-gray-700">
                                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                                            <p className="text-lg leading-relaxed">NowStart Solution ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our PC optimization software.</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                    </div>
                                                    Personal Information
                                                </h3>
                                                <ul className="space-y-3">
                                                    <li className="flex items-start">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                        <span>Name and email address when you register for an account</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                        <span>Payment information (processed securely through third-party payment processors)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                        <span>Support communications and feedback</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                                        </svg>
                                                    </div>
                                                    Technical Information
                                                </h3>
                                                <ul className="space-y-3">
                                                    <li className="flex items-start">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                        <span>System specifications and performance metrics</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                        <span>Software usage patterns and preferences</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                        <span>Error logs and diagnostic information</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                        <span>IP address and device identifiers</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="how-we-use" className="scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
                                    </div>
                                    <div className="space-y-6 text-gray-700">
                                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                                            <p className="text-lg leading-relaxed">We use the collected information for the following purposes:</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {[
                                                { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "Provide and maintain our software services", color: "blue" },
                                                { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", text: "Process payments and manage subscriptions", color: "green" },
                                                { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "Improve software performance and user experience", color: "purple" },
                                                { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z", text: "Provide customer support and technical assistance", color: "indigo" },
                                                { icon: "M15 17h5l-5 5v-5zM4.5 19.5L15 9l-4.5-4.5L4.5 19.5z", text: "Send important updates and security notifications", color: "red" },
                                                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "Comply with legal obligations", color: "yellow" }
                                            ].map((item, index) => (
                                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                                                    <div className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                                                        <svg className={`w-5 h-5 text-${item.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                                        </svg>
                                                    </div>
                                                    <p className="text-gray-700 font-medium">{item.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                <section id="information-sharing" className="scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900">Information Sharing & Disclosure</h2>
                                    </div>
                                    <div className="space-y-6 text-gray-700">
                                        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                                            <p className="text-lg leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {[
                                                { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "With your explicit consent", color: "green" },
                                                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "To comply with legal requirements or court orders", color: "blue" },
                                                { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", text: "To protect our rights, property, or safety", color: "red" },
                                                { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", text: "With trusted service providers (under strict confidentiality agreements)", color: "purple" },
                                                { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", text: "In connection with a business transfer or acquisition", color: "indigo" }
                                            ].map((item, index) => (
                                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                                                    <div className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                                                        <svg className={`w-5 h-5 text-${item.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                                        </svg>
                                                    </div>
                                                    <p className="text-gray-700 font-medium">{item.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                                    <div className="space-y-4 text-gray-700">
                                        <p>We implement industry-standard security measures to protect your information:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Encryption of data in transit and at rest</li>
                                            <li>Regular security audits and updates</li>
                                            <li>Access controls and authentication protocols</li>
                                            <li>Secure data centers with physical security measures</li>
                                        </ul>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
                                    <div className="space-y-4 text-gray-700">
                                        <p>You have the following rights regarding your personal information:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Access and review your personal data</li>
                                            <li>Request correction of inaccurate information</li>
                                            <li>Request deletion of your personal data</li>
                                            <li>Object to processing of your personal data</li>
                                            <li>Data portability rights</li>
                                            <li>Withdraw consent at any time</li>
                                        </ul>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
                                    <div className="space-y-4 text-gray-700">
                                        <p>We use cookies and similar technologies to enhance your experience:</p>
                                        <ul className="list-disc list-inside space-y-2 ml-4">
                                            <li>Essential cookies for software functionality</li>
                                            <li>Analytics cookies to understand usage patterns</li>
                                            <li>Preference cookies to remember your settings</li>
                                        </ul>
                                        <p>You can control cookie settings through your browser preferences.</p>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                                    <div className="space-y-4 text-gray-700">
                                        <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.</p>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                                    <div className="space-y-4 text-gray-700">
                                        <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers.</p>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                                    <div className="space-y-4 text-gray-700">
                                        <p>Our software is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                                    <div className="space-y-4 text-gray-700">
                                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
                                    </div>
                                </section>

                                <section id="contact-us" className="scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
                                    </div>
                                    <div className="space-y-6 text-gray-700">
                                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                                            <p className="text-lg leading-relaxed">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                                <div className="flex items-center mb-4">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-gray-900">Email Support</h3>
                                                </div>
                                                <p className="text-gray-600">support@nowstart.co</p>
                                            </div>

                                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                                <div className="flex items-center mb-4">
                                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-gray-900">Office Address</h3>
                                                </div>
                                                <p className="text-gray-600">NowStart Solution Privacy Team<br />IDENTY, 164, 1st, RMV Stage 2, Sanjaynagar, Bengaluru, Urban, Karnataka, 560094</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
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
