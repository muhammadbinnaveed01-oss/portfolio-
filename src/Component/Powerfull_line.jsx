import { motion } from "framer-motion";

function Powerfull_line() {
  const text =
    "I don't just build websites — I build experiences that feel alive.";
  const words = text.split(" ");

  return (
    <section className="bg-black z-10 relative py-16 sm:py-20 px-5 sm:px-8 md:px-12">
      <motion.div className="flex flex-col items-center justify-center text-center">

        <h1 className="text-white font-semibold leading-relaxed text-base sm:text-xl md:text-2xl lg:text-3xl max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-2">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Accent underline — light blue 2% */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 h-px w-48 sm:w-64 md:w-80 bg-linear-to-r from-transparent via-sky-400/60 to-transparent rounded-full origin-center"
        />

      </motion.div>
    </section>
  );
}

export default Powerfull_line;
