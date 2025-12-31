'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Dashboard', icon: 'bx-grid-alt', href: '/' },
        { name: 'Facturas', icon: 'bx-receipt', href: '/facturas' },
        { name: 'Clientes', icon: 'bx-group', href: '/clientes' },
        { name: 'Reportes', icon: 'bx-line-chart', href: '/reportes' },
        { name: 'Configuración', icon: 'bx-cog', href: '/configuracion' },
    ];

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 lg:hidden"
                aria-label="Toggle menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Overlay para móvil */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-screen w-72 bg-gradient-to-b from-black via-black to-black text-white z-40 transition-transform duration-300 ease-in-out shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0`}
            >
                <div className="flex flex-col h-full p-6">
                    {/* Logo/Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold bg-white bg-clip-text text-transparent">
                            Contabtech
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">Sistema Contable</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-2">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200 group relative overflow-hidden outline-none focus:outline-none"
                            >
                                <i className={`bx ${item.icon} text-2xl relative z-10`}></i>
                                <span className="font-medium relative z-10">{item.name}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Footer */}
                    <div className="pt-6 border-t border-slate-700">
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                            <div className="w-10 h-10 rounded-full bg-blue flex items-center justify-center text-lg font-bold">
                                U
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">Usuario</p>
                                <p className="text-xs text-slate-400">usuario@contabtech.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
