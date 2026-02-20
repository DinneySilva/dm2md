import { Link } from 'react-router-dom';
import { ArrowLeft, Cast, Play, MoreVertical, ExternalLink, Share, Heart, Pause, Home, Music, Calendar, User, Volume2 } from 'lucide-react';

export default function Videos() {
    return (
        <div className="bg-background-light dark:bg-videos-bg-dark font-spline text-slate-900 dark:text-slate-100 antialiased overflow-hidden h-screen w-full flex flex-col relative selection:bg-videos-primary selection:text-white">
            {/* Header */}
            <header className="flex-none flex items-center justify-between px-6 pt-12 pb-4 bg-background-light/95 dark:bg-videos-bg-dark/95 backdrop-blur-md sticky top-0 z-20 border-b border-slate-200 dark:border-[#233f48]">
                <button className="p-2 -ml-2 rounded-full hover:bg-slate-200 dark:hover:bg-videos-surface-dark transition-colors text-slate-500 dark:text-[#92bbc9]">
                    <ArrowLeft size={24} />
                </button>
                <h1 className="text-lg font-bold tracking-tight text-center flex-1">Vídeos do YouTube</h1>
                <button className="p-2 -mr-2 rounded-full hover:bg-slate-200 dark:hover:bg-videos-surface-dark transition-colors text-slate-500 dark:text-[#92bbc9]">
                    <Cast size={24} />
                </button>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto pb-40 px-4 pt-2 space-y-6">
                {/* Featured Video (Larger) */}
                <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-surface-light dark:bg-videos-surface-dark">
                    <div className="aspect-video w-full bg-cover bg-center relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1TC9ZFYsGoaxKlDBXbINhFFJLEmmvUgSxx1LDhRzE0Ulrr02LgqPf3qEQt7u75ukqxeWH6pjA9UArznivE0qKznva87Fb-MmLQdnLuEAeCzQFQukeN5cZY_LiqDC29WePypyB1uMFOEz8DkVpkoONXhmkhiz7PDv7tnkLGLP0dAFpN71nCIbq9yFFyVn8tG2qLMChq-x0lg03hNjPo46B3ZAAZZ3-TTK2Cgd8K2Kq1QRrU1d_N6Al60RvUEwk_7AH-E3V15g0fmAf')" }}>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-videos-primary/90 text-background-dark flex items-center justify-center pl-1 shadow-lg shadow-videos-primary/20 scale-100 group-hover:scale-110 transition-transform duration-200">
                                <Play size={40} fill="currentColor" />
                            </div>
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-medium text-white">4:12</div>
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                        <h3 className="text-xl font-bold leading-tight">Clipe Oficial - Nunca É Tarde</h3>
                        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-[#92bbc9]">
                            <span>1.2M visualizações • há 2 meses</span>
                            <MoreVertical size={18} className="cursor-pointer hover:text-videos-primary" />
                        </div>
                        <button className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-slate-100 dark:bg-[#233f48] text-videos-primary font-semibold text-sm hover:bg-videos-primary/10 transition-colors">
                            <ExternalLink size={18} />
                            Assista no YouTube
                        </button>
                    </div>
                </div>

                {/* Video Item 2 */}
                <div className="flex flex-col sm:flex-row gap-4 p-3 rounded-2xl bg-surface-light dark:bg-videos-surface-dark shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative w-full sm:w-40 aspect-video sm:aspect-[16/10] shrink-0 rounded-xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiwh7xyt6BGGOe44iMXrOCgS70k-YhEFl7d-zFQZORWi71OvfJvOSKq9kNWsg2te_ekzAy1n9_fXqGgBJIbiM_4iY_hprGDMG5S3uLmpF-6xrwDzIy7Kiz1k7XmP1FYNdgNF5Gk0ibuaQlBesUmJGTHxbMNIxqE1bIb-8RchJVMJb8mDTHHSZYtfyhhF7ctQUgV6FIwQ_-QfX3q4eJnV5qQ7EUA5v_j24on2Ctt97ZhxmyxT4GvIlBWGjgPa7gCEITbiyScP8PK462')" }}>
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center pl-0.5">
                                <Play size={24} fill="currentColor" />
                            </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-medium text-white">3:45</div>
                    </div>
                    <div className="flex flex-col flex-1 justify-center gap-1">
                        <h4 className="text-base font-bold line-clamp-2">Live Inexplicável Amor - Ao Vivo em São Paulo</h4>
                        <p className="text-xs text-slate-500 dark:text-[#92bbc9]">500K visualizações • há 1 ano</p>
                        <div className="mt-2 flex items-center gap-3">
                            <button className="flex-1 sm:flex-none px-4 py-1.5 rounded-full bg-videos-primary text-background-dark text-xs font-bold hover:bg-videos-primary/90 transition-colors text-center">
                                YouTube
                            </button>
                            <button className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-[#233f48] text-slate-400 dark:text-[#92bbc9]">
                                <Share size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 p-3 rounded-2xl bg-surface-light dark:bg-videos-surface-dark shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative w-full sm:w-40 aspect-video sm:aspect-[16/10] shrink-0 rounded-xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBV2eWNPhJi0XRJhPM0xGcIWZb6vvz57uBYHRAIPVbp-8zr8vSuvIpjrTr1eD3UFaMhftWnUayKwdSi6EVP2Zs3v7SbKQ5GffuG8aenwmiT9iQ9XKxS9v-KA1_dBTzsIHLwc6hsCGvbidm4ZzIvPQB09xbD9qR4AFcj-5QhFw8nIAL03A-6r08BUWz2ZPRi3RuZXu_K1YaoiXpOAb-aqNGkoip2VVp9MbXMQafnfo5K8OC0ENQDikTlTUxb41Cuf8kl5vl7WDfVkrQ')" }}>
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center pl-0.5">
                                <Play size={24} fill="currentColor" />
                            </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-medium text-white">12:30</div>
                    </div>
                    <div className="flex flex-col flex-1 justify-center gap-1">
                        <h4 className="text-base font-bold line-clamp-2">Bastidores - Tour 2023: A Jornada</h4>
                        <p className="text-xs text-slate-500 dark:text-[#92bbc9]">200K visualizações • há 3 meses</p>
                        <div className="mt-2 flex items-center gap-3">
                            <button className="flex-1 sm:flex-none px-4 py-1.5 rounded-full bg-videos-primary text-background-dark text-xs font-bold hover:bg-videos-primary/90 transition-colors text-center">
                                YouTube
                            </button>
                            <button className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-[#233f48] text-slate-400 dark:text-[#92bbc9]">
                                <Share size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 p-3 rounded-2xl bg-surface-light dark:bg-videos-surface-dark shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative w-full sm:w-40 aspect-video sm:aspect-[16/10] shrink-0 rounded-xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDK_Szr6TR9gf7DWDAzpobP7-vbliQDSgQUUc6mvOR9_zdlmHCq-mzBTRpKKaPFGe5HTth7EF2o2sOxFDb6-tRX5W-ZJF_MybBqZ-VeEtyeYQu_8-2QlQeJL_71ubMfPzTPX-DIjNL8WV8lGWhg9IqeNmY-OARzqSAJniItOezgLZVa4h3U0JhC7bTOeq4sMEWzDDSdYRngrgqIW7aYxHqZaYn_KTRpU3mJdHsG6IfAyZk9YwHPJSag4JqBuVDpBcThWVkW_ecKKO_5')" }}>
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center pl-0.5">
                                <Play size={24} fill="currentColor" />
                            </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-medium text-white">5:15</div>
                    </div>
                    <div className="flex flex-col flex-1 justify-center gap-1">
                        <h4 className="text-base font-bold line-clamp-2">Sessão Acústica - Nunca É Tarde (Versão Estúdio)</h4>
                        <p className="text-xs text-slate-500 dark:text-[#92bbc9]">850K visualizações • há 5 meses</p>
                        <div className="mt-2 flex items-center gap-3">
                            <button className="flex-1 sm:flex-none px-4 py-1.5 rounded-full bg-videos-primary text-background-dark text-xs font-bold hover:bg-videos-primary/90 transition-colors text-center">
                                YouTube
                            </button>
                            <button className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-[#233f48] text-slate-400 dark:text-[#92bbc9]">
                                <Share size={20} />
                            </button>
                        </div>
                    </div>
                </div>

            </main>

            {/* Floating Mini Player (Persistent) */}
            <div className="fixed bottom-[86px] left-4 right-4 z-30">
                <div className="bg-slate-900/90 dark:bg-[#15262b]/95 backdrop-blur-lg rounded-full p-2 pr-4 shadow-xl border border-white/10 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-cover bg-center shrink-0 animate-[spin_8s_linear_infinite]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcYh5ld3Mn1tptlpVg5nTYeHvaXnr0ik1UxzgICG-7Dy3v-8fKUtHjdF_otA9vehQmhtffZpFflWOWTbnDbZgsegQVQcNAv3FJta4vZug3V8zbq0FIVPlox1BYggJdnrksukd8oSh98H1g-U_L0zRPkIzTDo-FncierIA6QoOGU7D5FqsUiDkJ0KniAeYtwUDVzkVxCdx-GB0n7O6OeD441rteaBc69KUxxpsXXHIWW4KF1yqVrIPRnTgWRjFVZ2JYizsFcSuS8mse')" }}></div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-white truncate">Nunca É Tarde</p>
                        <p className="text-xs text-videos-primary truncate">Dinney Silva</p>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                        <button className="hover:text-videos-primary transition-colors">
                            <Heart size={24} />
                        </button>
                        <button className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                            <Pause size={20} fill="currentColor" />
                        </button>
                        <div className="flex items-center gap-2">
                            <Volume2 size={20} />
                            <input type="range" className="w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-videos-primary w-[65%] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <nav className="flex-none bg-background-light dark:bg-[#192d33] border-t border-slate-200 dark:border-[#233f48] pb-6 pt-2 px-4 z-40 relative">
                <div className="flex justify-between items-center max-w-md mx-auto">
                    <Link to="/music" className="flex flex-1 flex-col items-center gap-1 group">
                        <div className="h-8 flex items-center text-slate-400 dark:text-[#92bbc9] group-hover:text-videos-primary transition-colors">
                            <Home size={24} />
                        </div>
                        <span className="text-[10px] font-medium text-slate-400 dark:text-[#92bbc9] group-hover:text-videos-primary">Início</span>
                    </Link>
                    <Link to="/music" className="flex flex-1 flex-col items-center gap-1 group">
                         <div className="h-8 flex items-center text-slate-400 dark:text-[#92bbc9] group-hover:text-videos-primary transition-colors">
                            <Music size={24} />
                        </div>
                        <span className="text-[10px] font-medium text-slate-400 dark:text-[#92bbc9] group-hover:text-videos-primary">Músicas</span>
                    </Link>
                    <Link to="/videos" className="flex flex-1 flex-col items-center gap-1 group relative">
                        <div className="absolute -top-10 bg-videos-primary/20 blur-xl w-10 h-10 rounded-full"></div>
                        <div className="h-8 flex items-center text-videos-primary dark:text-white transition-colors">
                            <Play size={24} fill="currentColor" />
                        </div>
                        <span className="text-[10px] font-medium text-videos-primary dark:text-white">Vídeos</span>
                    </Link>
                    <Link to="/agenda" className="flex flex-1 flex-col items-center gap-1 group">
                        <div className="h-8 flex items-center text-slate-400 dark:text-[#92bbc9] group-hover:text-videos-primary transition-colors">
                            <Calendar size={24} />
                        </div>
                        <span className="text-[10px] font-medium text-slate-400 dark:text-[#92bbc9] group-hover:text-videos-primary">Agenda</span>
                    </Link>
                    <Link to="/library" className="flex flex-1 flex-col items-center gap-1 group">
                         <div className="h-8 flex items-center text-slate-400 dark:text-[#92bbc9] group-hover:text-videos-primary transition-colors">
                            <User size={24} />
                        </div>
                        <span className="text-[10px] font-medium text-slate-400 dark:text-[#92bbc9] group-hover:text-videos-primary">Perfil</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
