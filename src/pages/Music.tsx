import { Link } from 'react-router-dom';
import { Home, Search, Music as MusicIcon, Play, Heart, ChevronLeft, Settings, Signal, Wifi, BatteryFull, ChevronRight, Pause, MoreHorizontal, Image as ImageIcon } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Music() {
  return (
    <div className="relative w-full h-screen max-w-md mx-auto bg-white dark:bg-[#0f1520] shadow-2xl overflow-hidden flex flex-col bg-[url('https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
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

        <div className="flex items-center justify-between px-4 pb-4 text-white">
          <button className="p-2 active:opacity-70">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-lg font-medium tracking-wide">Minhas Músicas</h1>
          <button className="p-2 active:opacity-70">
            <Settings size={20} />
          </button>
        </div>

        <main className="flex-1 overflow-y-auto px-4 pb-32 space-y-4 hide-scrollbar">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border border-white/10 group">
            <img alt="Artist Dinney Silva Portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoBEjoI5EoAq6LGH_SWYg_5aA7tth0F0kb4wWqSV-g3ezZHR9p7aEsVYLpK7zR33dhYXfeSXluMJMRho8E5mxWb4i61GcpJtd1pn6NPDDmzW3FOkGxIqkDsHbTxW9oQQLTKVLKupmbSLq6kG95evIj5t4EqACOIqxe1JxRuxrtshTuivzj6mX-DjQ2YonUh2J1Scvj032p-iZlmzu_AF-VusyGIz1jzbH3rgPlN9HhzQq0nm1l7wEMhpdEcx56LacIbfQfB1-cza5Y" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-right">
              <h2 className="font-display text-3xl text-[#e8d5b5] font-bold text-shadow leading-none tracking-wide uppercase drop-shadow-lg">Dinney<br />Silva</h2>
              <p className="text-white text-xs tracking-[0.2em] font-light mt-1 text-shadow-sm uppercase">Minhas Músicas</p>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button className="bg-[#1f4b63] hover:bg-[#2a6485] text-white px-6 py-2 rounded-full flex items-center gap-2 backdrop-blur-md border border-white/20 shadow-lg active:scale-95 transition-transform">
                <Play size={14} />
                <span className="font-medium text-sm">Play</span>
              </button>
              <button className="bg-[#1f4b63]/80 hover:bg-[#1f4b63] text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg active:scale-95 transition-transform">
                <Heart size={14} />
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <a className="flex-1 bg-[#2a5b75]/90 hover:bg-[#346e8c] text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md border border-white/5 active:opacity-90 transition-all" href="#">
              <FaWhatsapp color="#4ade80" size="1.125rem" />
              <span className="text-sm font-medium">(11) 93228-6004</span>
            </a>
            <div className="bg-[#1e293b]/80 text-white py-3 px-4 rounded-xl flex items-center gap-3 shadow-md border border-white/5">
              <FaFacebookF color="rgba(255, 255, 255, 0.8)" size="0.875rem" />
              <div className="w-px h-4 bg-white/20"></div>
              <FaInstagram color="rgba(255, 255, 255, 0.8)" size="0.875rem" />
              <div className="w-px h-4 bg-white/20"></div>
              <FaYoutube color="#ef4444" size="0.875rem" />
              <span className="text-xs font-medium ml-1">Seguir</span>
            </div>
          </div>

          <a className="block w-full bg-[#1e293b]/60 hover:bg-[#1e293b]/80 backdrop-blur-sm text-gray-300 py-3 px-4 rounded-xl flex items-center justify-between border border-white/5 text-sm transition-colors" href="#">
            <span className="truncate">www.facebook.com/dinneysilvaoficial</span>
            <ChevronRight size={12} className="opacity-60" />
          </a>

          <div className="pt-2">
            <div className="flex items-center justify-between mb-3 px-1">
              <h3 className="text-white text-sm font-semibold tracking-wide flex items-center gap-2">
                <FaYoutube color="#ef4444" /> Vídeos do YouTube
              </h3>
              <Link to="/videos" className="text-xs text-[#6ab0d3] hover:text-white transition-colors">Ver todos</Link>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 hide-scrollbar snap-x">
              <div className="flex-shrink-0 w-36 snap-start">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 group">
                  <img alt="Clipe Oficial" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN5ivz6brUKyetvD7Y0GBsmQLd0lOiNLW7T5Wn_DQTDt0xVTKPL0WjTQyPqtNN7MbRyu_ktKe3FTGfX7jBOGdZoQJMc0ukVRCJFfcPcDL_ECO6cYtPLoA8F2CVDiBX9j0fXZ9CVAwoj7ulaChTB0Lh1zP7jVwX42VGL4yWRRYWDi1VLyE0wDrNodGqTESqPd1N0mXFcMJgQeZLYloL2aZop_PFLNRyvJnEkQjkk1lDiSRUU1faL1SOiqlcYlAhmlO-1AqC1H5t1Ik5" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Play size={10} className="text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <p className="text-white text-xs font-medium mt-1.5 truncate pl-0.5">Clipe Oficial</p>
              </div>
              <div className="flex-shrink-0 w-36 snap-start">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 group">
                  <img alt="Show ao Vivo" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJff4Jbn2MnL0MdZtKoM_zznbWe-zWT88y1WJz-NXqQ2jjhk3Pk7Xtzl5idacQilVmLW90Y-LK4NxK6tqW8Zs0MP572qDax1WUdTfPdrygLB-7W0fm0ekJshf0rr2quGI9C729DrAAqT8QSjziR-pbTIJlHOzWsHl0AB8NVxGccQLCjS8DMDxRR4fa6B9pq6SLe1e8lwE1L4wV-KNMlXitEb9723uskonRJ3XppmQVzP5D9sI2bq99QHrLCtNJeWbaUyrcxq_TVyV-" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Play size={10} className="text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <p className="text-white text-xs font-medium mt-1.5 truncate pl-0.5">Show ao Vivo</p>
              </div>
              <div className="flex-shrink-0 w-36 snap-start">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 group">
                  <img alt="Bastidores" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE3usN8K7A3K9G-h4crLdWYToUEhnpQw5wLu17J5IiG9kFaOxnuwVngkr0dkiPMdZASl6N0i6w8XHF4FTBAs2Wx1OdQo0HrGhuVUBO6MR5bDdt7p0wUgdl9ScnrEtSCF8bwPdnF1aifnyU8MwCtY6fo-MpekBWswVEG688FzfpBy54D_dHNBxcRJ3hqevOQcn6U87qrgkqy0Q3qH49cgSxEmCxdT2l1NbOH6R1hEEr-Q1XpKfiWPE1L0L3qJg7D_ExwyKkdUjij_PB" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <Play size={10} className="text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <p className="text-white text-xs font-medium mt-1.5 truncate pl-0.5">Bastidores</p>
              </div>
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <div className="glass-panel rounded-xl p-3 flex items-center justify-between group active:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3b7ea1] flex items-center justify-center shadow-inner text-white">
                  <Play size={10} className="ml-0.5" />
                </div>
                <span className="text-white font-medium text-[15px]">Nunca É Tarde</span>
              </div>
              <button className="text-gray-400 p-2">
                <MoreHorizontal />
              </button>
            </div>
            <div className="glass-panel rounded-xl p-3 flex items-center justify-between group active:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3b7ea1] flex items-center justify-center shadow-inner text-white">
                  <Play size={10} className="ml-0.5" />
                </div>
                <span className="text-white font-medium text-[15px]">Te Encontrei</span>
              </div>
              <button className="text-gray-400 p-2">
                <MoreHorizontal />
              </button>
            </div>
            <div className="glass-panel rounded-xl p-3 flex items-center justify-between group active:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3b7ea1] flex items-center justify-center shadow-inner text-white">
                  <Play size={10} className="ml-0.5" />
                </div>
                <span className="text-white font-medium text-[15px]">Sonhos de Amor</span>
              </div>
              <button className="text-gray-400 p-2">
                <MoreHorizontal />
              </button>
            </div>
            <div className="glass-panel rounded-xl p-3 flex items-center justify-between group active:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3b7ea1] flex items-center justify-center shadow-inner text-white">
                  <Play size={10} className="ml-0.5" />
                </div>
                <span className="text-white font-medium text-[15px]">Além do Horizonte</span>
              </div>
              <button className="text-gray-400 p-2">
                <MoreHorizontal />
              </button>
            </div>
            <div className="glass-panel rounded-xl p-3 flex items-center justify-between group active:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3b7ea1] flex items-center justify-center shadow-inner text-white">
                  <Play size={10} className="ml-0.5" />
                </div>
                <span className="text-white font-medium text-[15px]">Inexplicável Amor</span>
              </div>
              <button className="text-gray-400 p-2">
                <MoreHorizontal />
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
            <Link to="/music" className="flex flex-col items-center gap-1 text-[#6ab0d3] group">
                <Home className="text-xl group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium">Início</span>
            </Link>
            <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors group">
                <Search className="text-xl group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium">Buscar</span>
            </button>
            <Link to="/playlist" className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors group">
                <MusicIcon className="text-xl group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium">Minha Playlist</span>
            </Link>
            <Link to="/image-edit" className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors group">
                <ImageIcon className="text-xl group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-medium">Image Edit</span>
            </Link>
        </nav>
      </div>
    </div>
  );
}
