import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Upload, SortAsc, FileAudio, Folder, Mic, MoreVertical, Heart, Play, Home, Library as LibraryIcon, Smartphone } from 'lucide-react';

export default function Library() {
  return (
    <div className="bg-background-light dark:bg-library-bg-dark text-slate-900 dark:text-slate-100 font-vietnam overflow-x-hidden antialiased">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto">
        <header className="sticky top-0 z-20 w-full bg-library-bg-dark/95 backdrop-blur-md pt-4 pb-2 border-b border-library-primary/10">
          <div className="flex items-center justify-between px-4 pb-4">
            <button className="flex size-10 items-center justify-center rounded-full text-slate-100 hover:bg-white/10 transition-colors">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-lg font-bold text-slate-100">Biblioteca</h1>
            <button className="flex size-10 items-center justify-center rounded-full text-slate-100 hover:bg-white/10 transition-colors">
              <Search size={24} />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto px-4 pb-2 pt-2 scrollbar-hide">
            <button className="shrink-0 rounded-full bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-300 hover:bg-slate-700">Playlists</button>
            <button className="shrink-0 rounded-full bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-300 hover:bg-slate-700">Álbuns</button>
            <button className="shrink-0 rounded-full bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-300 hover:bg-slate-700">Artistas</button>
            <button className="shrink-0 rounded-full bg-library-primary px-4 py-1.5 text-sm font-semibold text-background-dark">Arquivos Locais</button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto pb-32 pt-4">
          <section className="px-4 mb-6">
            <button className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-library-primary border border-library-primary/20 rounded-xl py-3 px-4 transition-all shadow-lg shadow-black/20">
              <Upload />
              <span className="font-bold">Importar MP3</span>
            </button>
            <p className="text-center text-xs text-slate-500 mt-2">Adicione seus arquivos de áudio locais à biblioteca.</p>
          </section>

          <section className="mb-8">
            <div className="flex items-center justify-between px-4 pb-4">
              <h2 className="text-xl font-bold text-white">Arquivos Locais</h2>
              <div className="flex gap-2">
                <button className="text-slate-400 hover:text-white">
                  <SortAsc size={20} />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="group flex items-center justify-between px-4 py-3 hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer border-l-2 border-transparent hover:border-library-primary">
                <div className="flex items-center gap-4 flex-1 overflow-hidden">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-slate-800 flex items-center justify-center text-slate-500">
                    <FileAudio size={24} />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-base font-semibold text-slate-100 group-hover:text-library-primary transition-colors">Gravação de Ensaio #4</h3>
                      <Smartphone size={14} className="text-library-primary/70" />
                    </div>
                    <p className="truncate text-sm text-slate-400">Desconhecido • 4.5 MB</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-4">
                  <span className="text-xs text-slate-500">2:14</span>
                  <button className="text-slate-400 hover:text-white">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
              <div className="group flex items-center justify-between px-4 py-3 hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer border-l-2 border-transparent hover:border-library-primary">
                <div className="flex items-center gap-4 flex-1 overflow-hidden">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-slate-800">
                    <img alt="Abstract gradient teal and dark blue" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9PPUnnLfgJfyBQa27fjbRg3wus-_kOxqaJDg7tDRovn6ka9K_E-KxvqRomJ2pWcSuQ4vpFbonwstXl2mTEE33sdKPiiGgYolmpkWKlzflaxiFwx4XUHf7CQc5bcD-gEi_aJlTKSCEi1gU8M4m_DcG4kzQfrIggnpSLdaAMJOWOzknVp-aKk9LT38jMEylr2rWkehvdaQRb7kiER-myIY08p83yoyMwMjV0JnhV7Oq3PMXk5effp0e4BXWbNtmFMzf2jSDNPwwxJuZ"/>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <h3 className="truncate text-base font-semibold text-slate-100 group-hover:text-library-primary transition-colors">Inexplicável Amor</h3>
                    <p className="truncate text-sm text-slate-400">Dinney Silva</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-4">
                  <span className="text-xs text-slate-500">3:42</span>
                  <button className="text-slate-400 hover:text-white">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
              <div className="group flex items-center justify-between px-4 py-3 hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer border-l-2 border-transparent hover:border-library-primary">
                <div className="flex items-center gap-4 flex-1 overflow-hidden">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-slate-800 flex items-center justify-center text-slate-500">
                    <Folder size={24} />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-base font-semibold text-slate-100 group-hover:text-library-primary transition-colors">Demo_Voz_Violão.mp3</h3>
                      <Smartphone size={14} className="text-library-primary/70" />
                    </div>
                    <p className="truncate text-sm text-slate-400">Importado em 12/05/2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-4">
                  <span className="text-xs text-slate-500">3:58</span>
                  <button className="text-slate-400 hover:text-white">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
              <div className="group flex items-center justify-between px-4 py-3 hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer border-l-2 border-transparent hover:border-library-primary">
                <div className="flex items-center gap-4 flex-1 overflow-hidden">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-slate-800 flex items-center justify-center text-slate-500">
                    <Mic size={24} />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-base font-semibold text-slate-100 group-hover:text-library-primary transition-colors">Ideia Nova - Refrão</h3>
                      <Smartphone size={14} className="text-library-primary/70" />
                    </div>
                    <p className="truncate text-sm text-slate-400">Memo de Voz • 0:45</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-4">
                  <span className="text-xs text-slate-500">0:45</span>
                  <button className="text-slate-400 hover:text-white">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
              <div className="group flex items-center justify-between px-4 py-3 hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer border-l-2 border-transparent hover:border-library-primary">
                <div className="flex items-center gap-4 flex-1 overflow-hidden">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-slate-800">
                    <img alt="Deep blue abstract light trails" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7PhQpI-RNgj_EanwXBxRB2gl57ukEXEN4mg-Zy5TFrrOJECNh5c1Y-vXhlUC9S-00hAi7xNCTSQozxCY0xHAkQmkEW-yfIQ-spjiLHm6g9-0ldz4poaqU0wuo6DsxTg1hWcw2BcDYYqzNNpj6b51F5YyfUX56YQ-nrXXKT8FMpzuvceWn2A9Z8oJECiIuolqI4Ew30wBJVId57cN6n4S-59Yy2z3wgFWcaXDMrbRpfyJTmq-SjI_vsur6KPEbWp-vWT4NBDsgC_G8"/>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <h3 className="truncate text-base font-semibold text-slate-100 group-hover:text-library-primary transition-colors">Puro Amor (Remix)</h3>
                    <p className="truncate text-sm text-slate-400">Dinney Silva • DJ Kaleb</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-4">
                  <span className="text-xs text-slate-500">3:20</span>
                  <button className="text-slate-400 hover:text-white">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="fixed bottom-0 z-30 w-full max-w-md bg-gradient-to-t from-library-bg-dark via-library-bg-dark to-transparent pt-6">
            {/* Floating Player */}
            <div className="mx-2 mb-2">
                <div className="relative flex items-center justify-between overflow-hidden rounded-xl bg-[#193133] border border-white/5 p-2 pr-4 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-md bg-slate-700">
                    <img alt="Abstract dark teal swirl" className="h-full w-full object-cover animate-[spin_10s_linear_infinite]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASHY-wPOqF5kDfMTMYdlqS3uz1A-cVC2C1qJmNe_4UUysR4TZCXGJBv99WTFjEWCRth8i5imaDVsKxybqiT5KJk-bwjvk9owwevSsT1BhP2I7-4w-nWYGCpi89IKMO_YbswG3_k2A_W-klZsLZyugrnjUiqNKOpld2pT_rOLjRx-jjcjxLDjPh5qhQfQuVAZgRKO5Q3xwDThWwuLIkjlDuHUm22dklqK0y1GOXz_W-6BX05dbq1EQe_Nr-_2VFErNXMIB2vbGorEWV" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <p className="truncate text-sm font-bold text-white">Nunca É Tarde</p>
                    <p className="truncate text-xs text-library-primary/80">Dinney Silva</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <button className="text-white hover:text-library-primary transition-colors">
                    <Heart size={28} />
                  </button>
                  <button className="text-white hover:text-library-primary transition-colors">
                    <Play size={32} fill="currentColor" />
                  </button>
                </div>
                </div>
            </div>
            {/* Bottom Nav */}
            <nav className="flex w-full items-center justify-around border-t border-white/5 bg-[#112122]/95 pb-6 pt-2 backdrop-blur-lg">
                <Link to="/music" className="group flex flex-col items-center gap-1 p-2">
                    <Home size={24} />
                    <span className="text-[10px] font-medium text-slate-400 group-hover:text-library-primary">Início</span>
                </Link>
                <button className="group flex flex-col items-center gap-1 p-2">
                    <Search size={24} />
                    <span className="text-[10px] font-medium text-slate-400 group-hover:text-library-primary">Buscar</span>
                </button>
                <Link to="/library" className="group flex flex-col items-center gap-1 p-2">
                    <LibraryIcon size={24} fill="currentColor" />
                    <span className="text-[10px] font-medium text-white group-hover:text-library-primary">Biblioteca</span>
                </Link>
            </nav>
        </div>
      </div>
    </div>
  );
}
