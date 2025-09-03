import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ExternalLink, Menu, X } from "lucide-react";
import profileImg from "./assets/profile.jpg";

const PROJECTS = [
  {
    title: "Video YouTube Tutorial",
    desc: "Tutorial React & Tailwind",
    source: "youtube",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Foto Instagram",
    desc: "Proyek foto kreatif",
    source: "instagram",
    link: "https://www.instagram.com/p/CFexample/",
  },
  {
    title: "Video Instagram",
    desc: "Short video project",
    source: "instagram",
    link: "https://www.instagram.com/reel/CFexample2/",
  },
  {
    title: "Foto Lokal",
    desc: "Screenshot project",
    source: "local",
    img: "https://images.unsplash.com/photo-1604014237744-df5d99f7aa5a?q=80&w=1200",
  },
];
const SKILLS = [
  "Pemrograman",
  "Manajemen Proyek",
  "UI/UX Dasar",
  "Jaringan & Keamanan Siber",
  "Editing Foto & Video",
  "Content Spesialist",
  "Komunikasi Efektif",
  "Kerja Sama Tim",
  "Pemikiran Komputasional",
  "Manajemen Waktu",
  "Kreatif & Adaptif",
  "Softskills dan Hardskills Lainnya",
];

const CERTS = [
  { name: "Pengenalan Keamanan Siber", org: "Cisco NetAcad", year: 2025 },
  { name: "Linux Essentials", org: "Cisco NetAcad", year: 2025 },
  { name: "Visualisasi Data", org: "Dicoding", year: 2024 },
  {
    name: "Langkah Fundamental Untuk Menjadi Web Programmer",
    org: "Hacktiv8",
    year: 2022,
  },
  {
    name: "Kursus HTML & CSS",
    org: "Progate",
    year: 2022,
  },
];

function getYouTubeThumbnail(url) {
  if (!url) return "";
  let videoId = "";
  try {
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1];
    } else if (url.includes("youtube.com/watch")) {
      const params = new URL(url).searchParams;
      videoId = params.get("v");
    }
  } catch (e) {
    console.log("Invalid YouTube URL", url);
  }
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
}

export default function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [mobileNav, setMobileNav] = useState(false);

  // Typing animation
  const [typedText, setTypedText] = useState("");
  const fullText = "Muhamad Veva Ramadhan";
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const NAV_ITEMS = [
    { name: "Tentang", id: "tentang" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Sertifikasi", id: "sertifikasi" },
    { name: "Kontak", id: "kontak" },
  ];

  return (
    <div className="bg-white text-gray-900 dark:bg-black dark:text-gray-100 transition-colors duration-500">
      {/* NAV */}
      <header className="sticky h-20 top-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur border-b border-gray-300 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-wide text-xl">
            VEVA RAMADHAN
          </a>
          <nav className="hidden md:flex items-center gap-6 font-medium">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ scale: 1.1 }}
                className="relative after:block after:h-[2px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>
          {/* Hamburger Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-gray-500 bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
              whileTap={{ rotate: 90, scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5 text-gray-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5 text-black" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            <button onClick={() => setMobileNav(!mobileNav)}>
              {mobileNav ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileNav && (
          <div className="md:hidden bg-white dark:bg-black border-t border-gray-300 dark:border-gray-700">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block py-2 px-4 border-b border-gray-200 dark:border-gray-700"
                onClick={() => setMobileNav(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 sm:px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-widest text-xs text-gray-500 dark:text-gray-400">
              👋Halo, saya
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-2">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1.2 }}
              className="mt-4 text-gray-700 dark:text-gray-300 max-w-lg"
            >
              <b>Bachelor’s Student | Informatics Engineering | Dev</b>.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              className="w-full rounded-2xl object-cover shadow-2xl opacity-100"
              src={profileImg}
              alt="Profile"
            />
          </motion.div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Tentang Saya</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Halo! Saya Muhamad Veva Ramadhan, mahasiswa Teknik Informatika yang
            tertarik dengan pengembangan perangkat lunak, IoT, dan sistem
            informasi. Saya senang belajar hal baru, bekerja sama dalam tim, dan
            mengembangkan proyek yang bermanfaat.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-extrabold mb-10 text-center">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="border rounded-xl p-6 text-center shadow-md dark:border-gray-700 hover:shadow-2xl bg-white dark:bg-gray-800"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-extrabold mb-10 text-center">Project</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p, i) => {
            // Tentukan thumbnail
            let thumb = p.img || "";
            if (p.source === "youtube" && p.link) {
              thumb = getYouTubeThumbnail(p.link);
            } else if (p.source === "instagram" && p.link) {
              // Instagram: untuk demo, pakai link img placeholder
              thumb = `https://via.placeholder.com/600x400?text=Instagram+Post`;
            }
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={thumb}
                  alt={p.title}
                  className="h-56 w-full object-cover transition"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{p.desc}</p>
                  {p.link && (
                    <a
                      href={p.link}
                      className="mt-4 px-4 py-2 bg-white text-black rounded flex items-center gap-2 hover:bg-gray-200"
                    >
                      Detail <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Sertifikasi */}
      <section id="sertifikasi" className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl font-extrabold mb-10 text-center">
            Sertifikasi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTS.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="border rounded-xl p-6 shadow-md dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <h3 className="font-bold">{c.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {c.org}
                </p>
                <p className="text-xs text-gray-400 mt-1">{c.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section
        id="kontak"
        className="bg-gradient-to-r from-black to-gray-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold">Mari Bekerja Sama</h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-3 text-gray-300"
          >
            Saya terbuka untuk peluang magang, kerja, maupun kolaborasi project.
          </motion.p>
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:vevaramadhan@gmail.com"
              className="px-6 py-3 bg-white text-black rounded transition"
            >
              Email Saya
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/vevaramadhan"
              className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Muhamad Veva Ramadhan
        </div>
      </footer>
    </div>
  );
}
