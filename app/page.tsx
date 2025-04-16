"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Thermometer,
  Code,
  Building2,
  LineChart,
  Users,
  Mail,
  Phone,
  MapPin,
  BookOpen,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((element) => {
      observerRef.current?.observe(element);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in">
            Diverse Nepal, Prosperous Nepali
          </h1>
          <p className="text-lg md:text-xl max-w-2x1 mx-auto mb-8 fade-in">
            Fostering knowledge-driven national development through research and
            innovation.
          </p>
          <div className="space-x-4 fade-in">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary"
            >
              Contact Us
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="btn-secondary"
            >
              Learn More
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("faculties")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </section>

      {/* Faculties Section */}
      <section id="faculties" className="section bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12 fade-in">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="faculty-card fade-in">
              <Thermometer className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Climate Change</h3>
              <p className="text-gray-600">
                Global warming, climate diplomacy, and policy research.
              </p>
            </div>
            <div className="faculty-card fade-in">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Science & Technology</h3>
              <p className="text-gray-600">
                IT, AI, hardware/software, and multimedia innovation.
              </p>
            </div>
            <div className="faculty-card fade-in">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">National Development</h3>
              <p className="text-gray-600">
                Political ideology and national values research.
              </p>
            </div>
            <div className="faculty-card fade-in">
              <LineChart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">National Economics</h3>
              <p className="text-gray-600">
                Budgetary systems, FDI, and economic diplomacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12 fade-in">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto space-y-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                Research for Nepal (RfN) is a pioneering non-profit research
                institute, established in 2023 with the vision of fostering
                knowledge-driven national development. Our motto, "Diverse
                Nepal, Prosperous Nepali," reflects our commitment to utilizing
                Nepal's rich technological, industrial, cultural, environmental,
                and economic diversity to drive inclusive and sustainable
                progress.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                In an era of rapid global transformation, Nepal encounters both
                challenges and opportunities in critical areas such as climate
                change adaptation, technological innovation, industrial growth,
                economic sustainability, and policy modernization. To tackle
                these issues, Research for Nepal was established with the
                following goals:
              </p>

              <ul className="space-y-4 text-gray-600 list-decimal pl-6 mb-8">
                <li>
                  Promoting innovation, modernization, expansion, and
                  competitiveness within Nepal's industrial and technological
                  sectors.
                </li>
                <li>
                  Strengthening the international standing of Nepal's research
                  community through collaboration and knowledge exchange.
                </li>
                <li>
                  Providing cutting-edge solutions and technologies to meet
                  emerging public and private sector needs.
                </li>
                <li>
                  Advising the government and other public institutions on
                  policy formulation, governance, investment and strategic
                  decision-making.
                </li>
                <li>
                  Developing human capital by empowering researchers,
                  technologists, and scholars through training, mentorship, and
                  academic collaboration.
                </li>
              </ul>

              <p className="text-lg text-gray-600 mb-6">
                At Research for Nepal, our greatest asset is knowledge—driven by
                the people who create, refine, and apply it. Our team consists
                of:
              </p>

              <ul className="space-y-4 text-gray-600 list-decimal pl-6 mb-8">
                <li>
                  Dedicated researchers and technologists committed to advancing
                  Nepal's research landscape.
                </li>
                <li>
                  Aspiring young scholars from diverse academic backgrounds,
                  actively engaged in graduate and postgraduate studies at
                  leading universities in Nepal.
                </li>
                <li>
                  Research associates from universities, private firms, and
                  research institutions who actively contribute to our
                  initiatives.
                </li>
              </ul>

              <p className="text-lg text-gray-600 mb-6">
                Through interdisciplinary research, policy advocacy, and
                capacity-building programs, RfN aims to bridge the gap between
                academic research and real-world application, ensuring that
                knowledge leads to tangible societal progress. We believe that
                by investing in research, innovation, and human capital, Nepal
                can emerge as a globally recognized hub of knowledge and
                sustainable development.
              </p>

              <p className="text-lg text-gray-600">
                We invite researchers, policymakers, students, and organizations
                to collaborate with us in shaping a stronger, more resilient,
                and prosperous Nepal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="stat-card">
                <h4 className="text-3xl font-bold text-primary">5+</h4>
                <p className="text-gray-600">Active Projects</p>
              </div>
              <div className="stat-card">
                <h4 className="text-3xl font-bold text-primary">10+</h4>
                <p className="text-gray-600">Research Fellows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12 fade-in">
            Our Team
          </h2>

          {/* Leadership */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 fade-in">
              Leadership
            </h3>
            <div className="team-card fade-in mx-auto max-w-[24rem]">
              <div className="w-48 h-64 mx-auto mb-4 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/tilakraj.png"
                  alt="Portrait of Tilak Raj Bhandari"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mb-2 text-center">
                Tilak Raj Bhandari
              </h4>
              <p className="text-gray-600 text-center">Chairman</p>
            </div>
          </div>

          {/* Advisors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 fade-in">
              Advisors
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Ramesh Kumar Malla",
                  role: "Advisor",
                  img: "/ramesh.jpg",
                },
                {
                  name: "Popular Gentle Bhusal",
                  role: "Advisor",
                  img: "/pgb.png",
                },
                {
                  name: "Bim Bahadur Shrestha",
                  role: "Advisor",
                  img: "/bim.jpg",
                },
              ].map((member, index) => (
                <div key={index} className="team-card fade-in text-center">
                  <div className="w-48 h-64 mx-auto mb-4 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={member.img}
                      alt={`Portrait of ${member.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Researchers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 fade-in">
              Research Fellows
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-start gap-8">
              {[
                {
                  name: "Arbind Chaudhari",
                  role: "Economics and Climate Change",
                  img: "/ac.png",
                },
                {
                  name: "Mahendra Bahadur Chand",
                  role: "Economics Policy",
                  img: "/mc.png",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="team-card fade-in mx-auto max-w-[25rem] text-center"
                >
                  <div className="w-48 h-64 mx-auto mb-4 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={member.img}
                      alt={`Portrait of ${member.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12 fade-in">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="contact-card text-center fade-in">
              <div className="contact-icon-wrapper mx-auto">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a
                href="mailto:research.nepal2023@gmail.com"
                className="contact-text hover:underline"
              >
                research.nepal2023@gmail.com
              </a>
            </div>

            <div className="contact-card text-center fade-in">
              <div className="contact-icon-wrapper mx-auto">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <a
                href="tel:+9779851122331"
                className="contact-text hover:underline"
              >
                +977 9851122331
              </a>
            </div>

            <div className="contact-card text-center fade-in">
              <div className="contact-icon-wrapper mx-auto">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="contact-text">
                Buddhanagar, Kathmandu
                <br />
                Nepal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/logo.png"
                  alt="Research For Nepal Logo"
                  className={`w-14 h-14 object-contain`}
                />
                <span className="text-xl font-bold text-foreground">
                  Research For Nepal
                </span>
              </div>
              <p className="text-gray-600">
                Fostering knowledge-driven national development through research
                and innovation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("faculties")}
                  className="text-gray-600 hover:text-primary text-left"
                >
                  Focus Areas
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-600 hover:text-primary text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-gray-600 hover:text-primary text-left"
                >
                  Our Team
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-600 hover:text-primary text-left"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Working Hours</h3>
              <div className="text-gray-600">
                <p>Sunday - Friday</p>
                <p>9:00 AM - 5:00 PM</p>
                <p className="mt-2">Saturday: Closed</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600">
              © 2025 Research For Nepal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-200 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </main>
  );
}
