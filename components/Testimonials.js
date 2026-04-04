import { copy } from "@/lib/copy";
import { Star, User, Quote } from "lucide-react";

export default function Testimonials() {
  const { testimonials } = copy;

  return (
    <section className="w-full bg-[#fffdf7] py-14 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-[#0B533E] text-2xl md:text-4xl font-black text-center mb-12">
          {testimonials.headline}
        </h2>

        <div className="space-y-6">
          {testimonials.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-50 relative overflow-hidden"
            >
              {/* Decorative quote */}
              <Quote className="absolute top-4 right-4 w-10 h-10 text-[#0B533E]/5" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Title */}
              <h3 className="text-gray-800 text-lg font-bold mb-3 text-center">
                {item.title}
              </h3>

              {/* Quote */}
              <p className="text-gray-600 text-base leading-relaxed mb-5 max-w-2xl mx-auto text-center italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Optional Photo */}
              {item.image && (
                <div className="flex justify-center mb-5">
                  <img
                    src={item.image}
                    alt={`${item.name} result`}
                    className="w-48 h-auto rounded-2xl object-cover shadow-lg"
                  />
                </div>
              )}

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0B533E] to-[#1a7a4f] rounded-full flex items-center justify-center shadow-md">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-semibold">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
