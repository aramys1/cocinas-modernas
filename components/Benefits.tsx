import {
    Clock,
    Tag,
    Pencil,
    Droplets
} from 'lucide-react';
import { ImInsertTemplate } from 'react-icons/im';

const benefits = [
    { icon: Clock, title: "RAPIDA INSTALACION" },
    { icon: Tag, title: "PRECIO COMPETITIVO" },
    { icon: Pencil, title: "VARIEDAD DE DISENOS" },
    { icon: Droplets, title: "FACIL MANTENIMIENTO" }
];

export default function Benefits() {
    return (
        <section className="bg-white py-20 px-8 md:px-24 text-black">
            <h2 className="text-center text-2xl md:text-2xl font-bold tracking-widest mb-26">
                PORQUÉ ELEGIR NUESTROS MUEBLES
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {benefits.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center group">
                <item.icon 
                size={72} 
                strokeWidth={1} 
                className="mb-6 group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="text-sm:text-sm font-bold uppercase tracking-tighter">
                {item.title}
                </span>
            </div>
            ))}
        </div>
        </section>
    );
}