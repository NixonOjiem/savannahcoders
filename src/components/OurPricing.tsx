import React from 'react'
import { motion } from 'framer-motion'

function OurPricing() {
    return (
        <div className="bg-white text-black py-24 flex flex-col items-center min-h-screen" id="pricing">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 px-4"
            >
                <h3 className="text-5xl font-bold text-black mb-4">Simple Pricing</h3>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                    Transparent plans with enterprise-grade features. Start small, scale big.
                </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-30 w-full max-w-7xl px-4">
                {/* Basic Plan */}
                <motion.div
                    whileHover={{ y: -10 }}
                    className="relative bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-100 hover:border-yellow-400 transition-all"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-sm px-6 py-2 rounded-full">
                        Perfect for starters
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-3xl font-bold py-6 rounded-t-xl">
                        Basic
                    </div>
                    <ul className="text-center space-y-4 my-8">
                        <li className="flex items-center justify-center gap-2">
                            <span className="bg-yellow-100 p-2 rounded-full">🏗️</span>
                            <b>10GB</b> Storage
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="bg-yellow-100 p-2 rounded-full">📧</span>
                            <b>10</b> Emails
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="bg-yellow-100 p-2 rounded-full">🌐</span>
                            <b>10</b> Domains
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="bg-yellow-100 p-2 rounded-full">🛡️</span>
                            24/7 Support
                        </li>
                    </ul>
                    <div className="text-center mb-8">
                        <span className="text-5xl font-bold">$10</span>
                        <span className="text-gray-500 text-lg">/month</span>
                    </div>
                    <button className="w-full py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors font-semibold">
                        Get Started
                    </button>
                </motion.div>

                {/* Pro Plan - Featured */}
                <motion.div
                    whileHover={{ y: -10 }}
                    className="relative bg-black text-white rounded-2xl shadow-2xl p-8 border-2 border-yellow-400 transform scale-105"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black text-sm px-6 py-2 rounded-full">
                        Most Popular
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-3xl font-bold py-6 rounded-t-xl">
                        Pro
                    </div>
                    <ul className="text-center space-y-4 my-8">
                        <li className="flex items-center justify-center gap-2">
                            <span className="bg-yellow-100 p-2 rounded-full">🏗️</span>
                            <b>25GB</b> Storage
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="bg-yellow-100 p-2 rounded-full">📧</span>
                            <b>25</b> Emails
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="bg-yellow-100 p-2 rounded-full">🌐</span>
                            <b>25</b> Domains
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="bg-yellow-100 p-2 rounded-full">🛡️</span>
                            Priority Support
                        </li>
                    </ul>
                    <div className="text-center mb-8">
                        <span className="text-5xl font-bold">$25</span>
                        <span className="text-gray-400 text-lg">/month</span>
                    </div>
                    <button className="w-full py-4 bg-yellow-400 text-black rounded-xl hover:bg-yellow-500 transition-colors font-semibold">
                        Try it Free
                    </button>
                </motion.div>

                {/* Premium Plan */}
                <motion.div
                    whileHover={{ y: -10 }}
                    className="relative bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-100 hover:border-yellow-400 transition-all"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-sm px-6 py-2 rounded-full">
                        Enterprise Grade
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-3xl font-bold py-6 rounded-t-xl">
                        Premium
                    </div>
                    <ul className="text-center space-y-4 my-8">
                        <li className="flex items-center justify-center gap-2">
                            <span className="bg-yellow-100 p-2 rounded-full">🏗️</span>
                            <b>50GB</b> Storage
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="bg-yellow-100 p-2 rounded-full">📧</span>
                            <b>50</b> Emails
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="bg-yellow-100 p-2 rounded-full">🌐</span>
                            <b>50</b> Domains
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="bg-yellow-100 p-2 rounded-full">🛡️</span>
                            VIP Support
                        </li>
                    </ul>
                    <div className="text-center mb-8">
                        <span className="text-5xl font-bold">$50</span>
                        <span className="text-gray-500 text-lg">/month</span>
                    </div>
                    <button className="w-full py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors font-semibold">
                        Contact Sales
                    </button>
                </motion.div>
            </div>

            {/* Additional CTA */}
            <p className="mt-16 text-gray-600 text-center px-4">
                Need custom solutions? <span className="text-yellow-500 font-semibold cursor-pointer">Contact our team</span>
            </p>
        </div>
    )
}

export default OurPricing