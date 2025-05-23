import React from 'react'
import { motion } from 'framer-motion'

function OurPricing() {
    return (
        <div className="Pricin-Container" id="pricing">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="Header-encloser"
            >
                <h3 className="pricing-Header">Simple Pricing</h3>
                <p className="pricing-intro">
                    Transparent plans with enterprise-grade features. Start small, scale big.
                </p>
            </motion.div>

            {/* Pricing Cards */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-8">
                {/* Basic Plan */}
                <motion.div
                    whileHover={{ y: -10 }}
                    className="relative bg-white rounded-2xl shadow-2xl p-10 border-2 border-gray-100 hover:border-yellow-400 transition-all min-h-[600px] min-w-[280px] flex flex-col justify-between"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-sm px-6 py-2 rounded-full">
                        Perfect for starters
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-4xl font-bold py-8 rounded-t-xl">
                        Basic
                    </div>
                    <ul className="text-center space-y-6 my-10">
                        <li className="flex items-center justify-center gap-3 text-lg">
                            <span className="bg-yellow-100 p-2 rounded-full">🏗️</span>
                            <b>10GB</b> Storage
                        </li>
                        <li className="flex items-center justify-center gap-3 text-lg">
                            <span className="bg-yellow-100 p-2 rounded-full">📧</span>
                            <b>10</b> Emails
                        </li>
                        <li className="flex items-center justify-center gap-3 text-lg">
                            <span className="bg-yellow-100 p-2 rounded-full">🌐</span>
                            <b>10</b> Domains
                        </li>
                        <li className="flex items-center justify-center gap-3 text-lg">
                            <span className="bg-yellow-100 p-2 rounded-full">🛡️</span>
                            24/7 Support
                        </li>
                    </ul>
                    <div className="text-center mb-10">
                        <span className="text-6xl font-bold">$10</span>
                        <span className="text-gray-500 text-xl">/month</span>
                    </div>
                    <button className="w-full py-5 text-xl bg-black text-white rounded-xl hover:bg-gray-900 transition-colors font-semibold">
                        Get Started
                    </button>
                </motion.div>

                {/* Pro Plan - Featured */}
                <motion.div
                    whileHover={{ y: -10 }}
                    className="relative bg-black text-white rounded-2xl shadow-2xl p-10 border-2 border-yellow-400 transform scale-110 min-h-[650px] min-w-[300px] flex flex-col justify-between"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black text-sm px-6 py-2 rounded-full">
                        Most Popular
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-4xl font-bold py-8 rounded-t-xl">
                        Pro
                    </div>
                    <ul className="text-center space-y-6 my-10">
                        <li className="flex items-center justify-center gap-3 text-lg">
                            <span className="bg-yellow-100 p-2 rounded-full">🏗️</span>
                            <b>25GB</b> Storage
                        </li>
                        <li className="flex items-center justify-center gap-3 text-lg">
                            <span className="bg-yellow-100 p-2 rounded-full">📧</span>
                            <b>25</b> Emails
                        </li>
                        <li className="flex items-center justify-center gap-3 text-lg">
                            <span className="bg-yellow-100 p-2 rounded-full">🌐</span>
                            <b>25</b> Domains
                        </li>
                        <li className="flex items-center justify-center gap-3 text-lg">
                            <span className="bg-yellow-100 p-2 rounded-full">🛡️</span>
                            Priority Support
                        </li>
                    </ul>
                    <div className="text-center mb-10">
                        <span className="text-6xl font-bold">$25</span>
                        <span className="text-gray-400 text-xl">/month</span>
                    </div>
                    <button className="w-full py-5 text-xl bg-yellow-400 text-black rounded-xl hover:bg-yellow-500 transition-colors font-semibold">
                        Try it Free
                    </button>
                </motion.div>

                {/* Premium Plan */}
                <motion.div
                    whileHover={{ y: -10 }}
                    className="relative bg-white rounded-2xl shadow-2xl p-10 border-2 border-gray-100 hover:border-yellow-400 transition-all min-h-[600px] min-w-[280px] flex flex-col justify-between"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-sm px-6 py-2 rounded-full">
                        Enterprise Grade
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-4xl font-bold py-8 rounded-t-xl">
                        Premium
                    </div>
                    <ul className="text-center space-y-6 my-10">
                        <li className="flex items-center justify-center gap-3 text-lg">
                            <span className="bg-yellow-100 p-2 rounded-full">🏗️</span>
                            <b>50GB</b> Storage
                        </li>
                        <li className="flex items-center justify-center gap-3 text-lg">
                            <span className="bg-yellow-100 p-2 rounded-full">📧</span>
                            <b>50</b> Emails
                        </li>
                        <li className="flex items-center justify-center gap-3 text-lg">
                            <span className="bg-yellow-100 p-2 rounded-full">🌐</span>
                            <b>50</b> Domains
                        </li>
                        <li className="flex items-center justify-center gap-3 text-lg">
                            <span className="bg-yellow-100 p-2 rounded-full">🛡️</span>
                            VIP Support
                        </li>
                    </ul>
                    <div className="text-center mb-10">
                        <span className="text-6xl font-bold">$50</span>
                        <span className="text-gray-500 text-xl">/month</span>
                    </div>
                    <button className="w-full py-5 text-xl bg-black text-white rounded-xl hover:bg-gray-900 transition-colors font-semibold">
                        Contact Sales
                    </button>
                </motion.div>
            </div>
        </div>
    )
}

export default OurPricing
