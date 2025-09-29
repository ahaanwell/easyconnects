'use client';

import { useState, useEffect } from 'react';

export default function RefundPolicy() {
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
                        <div className="flex items-center">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    InfoGonia
                                </div>
                            </div>
                        </div>

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
                                <a href="/refund-policy" className="group relative px-4 py-2 text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 bg-blue-50">
                                    <span>Refund Policy</span>
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                                </a>
                                <a href="/terms-conditions" className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50">
                                    <span>Terms & Conditions</span>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
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
                                <a href="/refund-policy" className="block px-3 py-2 text-blue-600 bg-blue-50 rounded-md text-base font-medium">Refund Policy</a>
                                <a href="/terms-conditions" className="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-md text-base font-medium">Terms & Conditions</a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                            Refund Policy
                        </h1>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Your satisfaction is guaranteed. Learn about our comprehensive refund policy and money-back guarantee.
                        </p>
                        <div className="flex items-center justify-center space-x-4 text-green-200">
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
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">30-Day Money-Back Guarantee</h2>
                            </div>
                            <div className="space-y-6 text-gray-700">
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                                    <p className="text-lg leading-relaxed">We stand behind the quality of InfoGonia and offer a comprehensive 30-day money-back guarantee. If you're not completely satisfied with our software, you can request a full refund within 30 days of your purchase.</p>
                                </div>

                                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-8 border border-green-200">
                                    <div className="flex items-center mb-6">
                                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-green-800">Quick Refund Process</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                            { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Submit refund request within 30 days", color: "green" },
                                            { icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", text: "Processing time: 3-5 business days", color: "blue" },
                                            { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", text: "Full refund to original payment method", color: "purple" },
                                            { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", text: "No questions asked policy", color: "emerald" }
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center space-x-3">
                                                <div className={`w-8 h-8 bg-${item.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                                                    <svg className={`w-4 h-4 text-${item.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                                    </svg>
                                                </div>
                                                <span className="text-green-700 font-medium">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility for Refunds</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>To be eligible for a refund, the following conditions must be met:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Refund request is submitted within 30 days of purchase</li>
                                    <li>Purchase was made directly through our official website</li>
                                    <li>Software has not been used for more than 30 days</li>
                                    <li>No violation of our Terms of Service</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How to Request a Refund</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>To request a refund, please follow these steps:</p>
                                <ol className="list-decimal list-inside space-y-2 ml-4">
                                    <li>Contact our support team at <strong>refunds@infogonia.com</strong></li>
                                    <li>Include your order number and purchase date</li>
                                    <li>Provide a brief reason for the refund request</li>
                                    <li>Our team will process your request within 24 hours</li>
                                </ol>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Alternative Contact Methods</h3>
                                    <ul className="space-y-2 text-blue-700">
                                        <li><strong>Email:</strong> refunds@infogonia.com</li>
                                        <li><strong>Phone:</strong> 1-800-INFO-GONIA (1-800-463-6464)</li>
                                        <li><strong>Live Chat:</strong> Available on our website</li>
                                        <li><strong>Support Ticket:</strong> Through your account dashboard</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Processing</h2>
                            <div className="space-y-4 text-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900">Processing Timeline</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Request Review:</strong> 1-2 business days</li>
                                    <li><strong>Approval:</strong> Immediate upon review completion</li>
                                    <li><strong>Refund Processing:</strong> 3-5 business days</li>
                                    <li><strong>Bank Processing:</strong> 5-10 business days (varies by bank)</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900 mt-6">Refund Methods</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Credit card refunds: Processed to original card</li>
                                    <li>PayPal refunds: Processed to original PayPal account</li>
                                    <li>Bank transfer refunds: Processed to original account</li>
                                    <li>Digital wallet refunds: Processed to original wallet</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Non-Refundable Items</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>The following items are not eligible for refunds:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Software licenses used for more than 30 days</li>
                                    <li>Custom or personalized software configurations</li>
                                    <li>Third-party add-ons or extensions</li>
                                    <li>Training or consultation services</li>
                                    <li>Software obtained through unauthorized channels</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Subscription Refunds</h2>
                            <div className="space-y-4 text-gray-700">
                                <h3 className="text-xl font-semibold text-gray-900">Monthly Subscriptions</h3>
                                <p>Monthly subscription refunds are prorated based on unused time remaining in the current billing cycle.</p>

                                <h3 className="text-xl font-semibold text-gray-900 mt-6">Annual Subscriptions</h3>
                                <p>Annual subscription refunds are calculated based on the number of months remaining in the subscription period, minus any applicable discounts.</p>

                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
                                    <p className="text-yellow-700">Subscription cancellations take effect at the end of the current billing period. You will continue to have access to the software until the subscription expires.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Technical Issues and Refunds</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>If you experience technical issues that prevent you from using InfoGonia effectively, we will:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Provide free technical support to resolve the issue</li>
                                    <li>Offer alternative solutions or workarounds</li>
                                    <li>Provide a full refund if the issue cannot be resolved</li>
                                    <li>Consider extending your trial period if appropriate</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Chargebacks and Disputes</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>We encourage customers to contact us directly before initiating chargebacks or disputes. We are committed to resolving all issues amicably and quickly.</p>

                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-red-800 mb-2">Chargeback Policy</h3>
                                    <p className="text-red-700">Filing a chargeback without first contacting our support team may result in account suspension and may affect your ability to purchase our software in the future.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Refund Exceptions</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>In exceptional circumstances, we may consider refunds beyond the 30-day period for:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Major software defects that prevent core functionality</li>
                                    <li>Significant changes to software that affect user experience</li>
                                    <li>Billing errors or duplicate charges</li>
                                    <li>Cases of fraud or unauthorized purchases</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>For refund requests or questions about this policy, please contact us:</p>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <p><strong>Refund Support Email:</strong> refunds@infogonia.com</p>
                                    <p><strong>General Support:</strong> support@infogonia.com</p>
                                    <p><strong>Phone:</strong> 1-800-INFO-GONIA (1-800-463-6464)</p>
                                    <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                                    <p><strong>Address:</strong> InfoGonia Customer Service, 123 Tech Street, Digital City, DC 12345</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Policy Updates</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>We reserve the right to update this refund policy at any time. Changes will be posted on this page with an updated revision date. Continued use of our software after changes constitutes acceptance of the new policy.</p>
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
                                <div className="text-2xl font-bold">InfoGonia</div>
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
                        <p>&copy; 2024 InfoGonia. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
