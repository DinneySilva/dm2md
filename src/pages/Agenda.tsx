import { Link } from 'react-router-dom';
import { ChevronLeft, Calendar, MapPin, Home, Search, CalendarCheck, Music as MusicIcon, Signal, Wifi, BatteryFull, Pause, Heart } from 'lucide-react';

export default function Agenda() {
  return (
    <div className="relative w-full h-screen max-w-md mx-auto bg-white dark:bg-[#0f1520] shadow-2xl overflow-hidden flex flex-col bg-[url('https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c3a4f]/95 via-[#101e2b]/95 to-[#080d14]/98 z-0"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-center px-6 pt-12 pb-4 text-white">
          <div className="text-[15px] font-semibold">9:41</div>
          <div className="flex items-center gap-2 text-[12px]">
            <Signal size={12} />
            <Wifi size={12} />
            <BatteryFull size={16} />
          </div>
        </div>

        <header className="flex items-center justify-between px-4 pb-6 text-white border-b border-white/5">
          <button className="p-2 active:opacity-70">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-lg font-medium tracking-wide">Agenda de Shows</h1>
          <button className="p-2 active:opacity-70">
            <Calendar size={20} />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto px-4 py-6 space-y-4 hide-scrollbar pb-40">
          <div className="glass-panel rounded-2xl p-4 flex flex-col gap-4 bg-[#132030]/60 hover:bg-[#132030]/80 transition-colors">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center bg-primary w-16 h-16 rounded-xl border border-white/10 shadow-lg">
                <span className="text-2xl font-bold text-white leading-none">25</span>
                <span className="text-xs font-medium text-white/80 uppercase tracking-wider mt-0.5">OUT</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-lg font-semibold truncate">Espaço das Américas</h3>
                <div className="flex items-center gap-2 text-gray-400 mt-1">
                  <MapPin size={12} className="text-secondary" />
                  <span className="text-sm truncate">São Paulo, SP</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-white/5">
              <span className="text-xs text-gray-400">Sábado, 22:00</span>
              <button className="bg-secondary hover:bg-[#3b8db5] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-md active:scale-95">
                Comprar Ingresso
              </button>
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-4 flex flex-col gap-4 bg-[#132030]/60 hover:bg-[#132030]/80 transition-colors">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center bg-primary w-16 h-16 rounded-xl border border-white/10 shadow-lg">
                <span className="text-2xl font-bold text-white leading-none">02</span>
                <span className="text-xs font-medium text-white/80 uppercase tracking-wider mt-0.5">NOV</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-lg font-semibold truncate">Vivo Rio</h3>
                <div className="flex items-center gap-2 text-gray-400 mt-1">
                  <MapPin size={12} className="text-secondary" />
                  <span className="text-sm truncate">Rio de Janeiro, RJ</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-white/5">
              <span className="text-xs text-gray-400">Domingo, 20:00</span>
              <button className="bg-secondary hover:bg-[#3b8db5] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-md active:scale-95">
                Comprar Ingresso
              </button>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-4 flex flex-col gap-4 bg-[#132030]/60 hover:bg-[#132030]/80 transition-colors">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center justify-center bg-primary w-16 h-16 rounded-xl border border-white/10 shadow-lg">
                <span className="text-2xl font-bold text-white leading-none">15</span>
                <span className="text-xs font-medium text-white/80 uppercase tracking-wider mt-0.5">NOV</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-lg font-semibold truncate">Arena Hall</h3>
                <div className="flex items-center gap-2 text-gray-400 mt-1">
                  <MapPin size={12} className="text-secondary" />
                  <span className="text-sm truncate">Belo Horizonte, MG</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-white/5">
              <span className="text-xs text-gray-400">Sexta, 23:00</span>
              <button className="bg-secondary hover:bg-[#3b8db5] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-md active:scale-95">
                Comprar Ingresso
              </button>
            </div>
          </div>
        </main>

        {/* Floating Mini Player */}
        <div className="absolute bottom-[80px] left-4 right-4 rounded-2xl bg-[#1e293b]/90 backdrop-blur-xl border border-white/10 p-3 shadow-2xl z-20">
           <div className="flex items-center gap-3">
                <img alt="Now Playing" className="w-12 h-12 rounded-lg object-cover border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7G0DSVEZQA9xBJYMavyydzR5feVYIBv_xIEXcy1yTRT9pEt8sTCz5evp6pOyN-w472dS458SOOeHnZaKqOMiPok4bEp8X1vgo-zXwkcwylRMwQnH6IaiqZ_AioDW-dQuLxAAkAC21I8UJl72s5CjXG4H1N4RzErrmLB5Q4aDsWG-pJFisEm7eDRo66UG1hOuTj3jnwvhBjffGB7UM3ystm1alvEGOZY133pZZ2XLcLVfrmN41QexqHzi_4rfId0Aqu2Ubgj9h_LAW"/>
                <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-medium truncate">Nunca É Tarde</h4>
                    <div className="flex items-center gap-3 mt-1">
                        <button className="w-6 h-6 rounded-full bg-[#3b7ea1] flex items-center justify-center text-white active:scale-90 transition-transform">
                            <Pause size={8} />
                        </button>
                        <div className="flex-1 h-1 bg-white/20 rounded-full relative">
                            <div className="absolute left-0 top-0 h-full w-1/3 bg-[#6ab0d3] rounded-full"></div>
                            <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-md"></div>
                        </div>
                        <span className="text-[10px] text-gray-400 tabular-nums">0:10 / 3:45</span>
                    </div>
                </div>
                <button className="text-gray-400 p-1 active:text-white transition-colors">
                    <Heart />
                </button>
            </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 w-full bg-[#0a1018]/95 backdrop-blur-md border-t border-white/5 px-6 pt-3 pb-8 flex justify-between items-center z-30">
            <Link to="/music" className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors group">
                <Home className="text-xl group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium">Início</span>
            </Link>
            <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors group">
                <Search className="text-xl group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium">Buscar</span>
            </button>
            <Link to="/agenda" className="flex flex-col items-center gap-1 text-[#6ab0d3] group">
                <CalendarCheck className="text-xl group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium">Agenda</span>
            </Link>
            <Link to="/playlist" className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors group">
                <MusicIcon className="text-xl group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium">Playlist</span>
            </Link>
        </nav>
      </div>
    </div>
  );
}
