import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto space-y-24">
                    <div className="space-y-8">
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter text-center">
                            Misi Kami Sederhana: <br /> <span className="text-indigo-600 underline underline-offset-8 decoration-indigo-100 decoration-8 font-black italic">Menciptakan Ketenangan.</span>
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 items-center">
                            <div className="space-y-6">
                                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                    TenangIn lahir dari kebutuhan akan sistem pendukung kesehatan mental yang benar-benar bisa diakses, aman, dan tanpa stigma. Kami percaya setiap orang berhak mendapatkan ruang aman untuk bercerita.
                                </p>
                                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                                    Dengan menggabungkan kecanggihan AI dan empati konselor manusia, kami membangun jembatan menuju pemulihan dan ketahanan emosional yang berkelanjutan.
                                </p>
                                <Button className="rounded-full px-8 py-6 font-bold bg-slate-900">Bergabung dengan Perjalanan Kami</Button>
                            </div>
                            <div className="bg-slate-100 aspect-square rounded-[60px] flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                                <span className="text-9xl grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110">🏔️</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
