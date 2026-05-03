import { useState, useRef, lazy, Suspense } from "react";
import { useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../Component/SEO";

// ── Lazy-load the entire Three.js scene chunk ──
// UI renders immediately; 3D downloads + initializes after.
const ContactScene = lazy(() => import("../Component/ContactScene"));



// Thin placeholder shown while the 3D chunk is downloading
function SceneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-6 h-6 rounded-full border-2 border-purple-500/40 border-t-purple-400 animate-spin" />
    </div>
  );
}

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby8CYopNlI8e_9_A0ilrsyHOeMOWdg_OPMD9x-JX4E_Goa4WWOXdXXFbL9gtlfZePm_/exec";

export default function LandingPage() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [captchaToken, setCaptchaToken] = useState("");

 useEffect(() => {
    // Script is already loaded via index.html — just register the global callbacks
    window.onCaptchaChange = (token) => setCaptchaToken(token);
    window.onCaptchaExpired = () => setCaptchaToken("");

    // If grecaptcha already loaded before this component mounted (SPA navigation),
    // explicitly render the widget into the div
    if (window.grecaptcha && window.grecaptcha.render) {
      const box = document.getElementById("recaptcha-box");
      if (box && box.childElementCount === 0) {
        window.grecaptcha.render("recaptcha-box", {
          sitekey: "6LfeztIsAAAAAPDnfiV42dmdj3JhiXNxcbkE9rsk",
          callback: "onCaptchaChange",
          "expired-callback": "onCaptchaExpired",
        });
      }
    }

    return () => {
      delete window.onCaptchaChange;
      delete window.onCaptchaExpired;
    };
  }, []);

  const container1Ref = useRef(null);
  const container2Ref = useRef(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!captchaToken) {
    alert("Please verify reCAPTCHA");
    return;
  }

  setStatus("sending");

  const body = new URLSearchParams();
  body.append("name", formState.name);
  body.append("email", formState.email);
  body.append("phone", formState.phone);
  body.append("message", formState.message);
  body.append("token", captchaToken);
  body.append("key", "IQX_PORTFOLIO_2026_SECURE");

  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const text = await res.text();
    const data = JSON.parse(text);

    console.log("SERVER RESPONSE:", data);

    if (data.status === "success") {
      setStatus("success");
      setFormState({ name: "", email: "", phone: "", message: "" });
      window.grecaptcha?.reset();
      setCaptchaToken("");
    } else {
      setStatus("error");
    }

  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};
  return (
    <div className="bg-black text-white">
      <SEO page="contact" />

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-28 sm:pt-24">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <p className="text-purple-500 tracking-widest uppercase text-[10px] sm:text-sm">
              Welcome to My World
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build <span className="text-purple-500">Modern</span>
              <br />
              Digital Experiences
            </h1>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              I design and develop high-performance websites and web apps with clean UI,
              smooth UX, and futuristic visuals.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link
                to="/Project"
                className="bg-purple-600 hover:bg-purple-500 transition-colors px-6 py-3 rounded-xl font-medium w-full sm:w-auto text-center"
              >
                Get Started
              </Link>
              <Link
                to="/Project"
                className="bg-purple-600/20 border border-purple-500/40 hover:border-purple-400 hover:text-white transition-colors px-6 py-3 rounded-xl text-purple-200 w-full sm:w-auto text-center"
              >
                View Work
              </Link>
            </div>
          </div>

          {/* RIGHT CARD — telephone model */}
          <div
            ref={container1Ref}
            style={{ position: "relative" }}
            className="hidden md:block w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100
              overflow-hidden
              bg-linear-to-br from-gray-500/50 via-purple-950/40 to-black
              border border-white/20
              rounded-[0px_200px_0px_200px]
              shadow-[0_0_60px_rgba(168,85,247,0.15)]"
          >
            <Suspense fallback={<SceneFallback />}>
              <ContactScene model="telephone" containerRef={container1Ref} />
            </Suspense>
          </div>

        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-black">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT: 3D MODEL — earth */}
          <div
            ref={container2Ref}
            style={{ position: "relative" }}
            className="w-full h-75 sm:h-100 md:h-125 rounded-full overflow-hidden bg-purple-600/10 border border-white/60"
          >
            <Suspense fallback={<SceneFallback />}>
              <ContactScene model="earth" containerRef={container2Ref} />
            </Suspense>
          </div>

          {/* RIGHT: FORM + INFO */}
          <div className="space-y-6 text-white">

            <div>
              <h2 className="text-3xl font-bold">
                Contact <span className="text-purple-400">Me</span>
              </h2>
              <p className="text-gray-400 mt-2">
                Have a project idea, collaboration, or question?
                Let's build something amazing together.
              </p>
            </div>

            {/* INFO CARD */}
            <div className="bg-linear-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <div className="space-y-4 text-gray-300 text-sm sm:text-base">

                <div className="flex items-start gap-3">
                  <Mail className="text-purple-400 w-5 h-5 sm:w-6 sm:h-6 mt-1" />
                  <a href="mailto:muhammadbinnaveed01@gmail.com" className="break-all hover:text-purple-300 transition-colors">
                    muhammadbinnaveed01@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-purple-400 w-5 h-5 sm:w-6 sm:h-6" />
                  <a href="tel:+923215081609" className="hover:text-purple-300 transition-colors">
                    +92 321 5081609
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-purple-400 w-12 h-6 sm:w-6 sm:h-6 mt-1" />
                  <span className="leading-relaxed">
                    E-858 D-2 Bilal Street, Abusar Chowk, Ali Park,
                    Badia Road, Lahore, Pakistan
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a href="https://www.linkedin.com/in/muhammad-bin-naveed-236409252" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs hover:bg-blue-600/40 transition-colors">
                    <FaLinkedinIn /> LinkedIn
                  </a>
                  <a href="https://www.facebook.com/share/1B8xo1mvwx" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-800/20 border border-blue-700/30 text-blue-200 text-xs hover:bg-blue-800/40 transition-colors">
                    <FaFacebookF /> Facebook
                  </a>
                  <a href="https://www.instagram.com/musilmuham?igsh=MTR3OXQzZmxwY2Mxdw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-600/20 border border-pink-500/30 text-pink-300 text-xs hover:bg-pink-600/40 transition-colors">
                    <FaInstagram /> Instagram
                  </a>
                  <a href="https://wa.me/923215081609" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-600/20 border border-green-500/30 text-green-300 text-xs hover:bg-green-600/40 transition-colors">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>

              </div>
            </div>

            {/* FORM */}
            <div className="bg-linear-to-br from-black/60 via-black/40 to-purple-900/10 border border-white/10 rounded-2xl shadow-2xl p-8 backdrop-blur-xl">
              <form className="space-y-5" onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                  required
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-white/30"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                  required
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-white/30"
                />

                <input
                  type="tel"
                  placeholder="Your Phone Number (optional)"
                  value={formState.phone}
                  onChange={(e) => setFormState(s => ({ ...s, phone: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-white/30"
                />

                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  value={formState.message}
                  onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                  required
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-white/30"
                />

                <div className="flex justify-center">
                  <div
                    id="recaptcha-box"
                    data-sitekey="6LfeztIsAAAAAPDnfiV42dmdj3JhiXNxcbkE9rsk"
                    data-callback="onCaptchaChange"
                    data-expired-callback="onCaptchaExpired"
                  />
                </div>

                {status === "success" && (
                  <p className="text-green-400 text-sm text-center py-2">
                    ✓ Message sent! I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center py-2">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )} 

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-xl font-medium transition-colors"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
