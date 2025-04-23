"use client";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Thermometer,
  Code,
  Building2,
  LineChart,
  Mail,
  Phone,
  MapPin,
  PlayCircle, // Added for Podcast placeholder
  X, // For closing dialogs
} from "lucide-react";
import Navbar from "@/components/Navbar";
import TeamMemberDialog from "@/components/ui/teammemberdialog";
import AboutUsDialog from "@/components/ui/aboutusdialog";

// Define the TeamMember interface (keep as is)
interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  links?: string[];
}

// Basic Dialog Structure (Example - replace with your actual Dialog component if available)
const BasicDialog = ({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {" "}
      {/* Added p-4 for padding on small screens */}
      {/* --- START EDITING THIS DIV --- */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative m-4 flex flex-col max-h-[90vh]">
        {" "}
        {/* Increased max-w, added flex, flex-col, max-h */}
        <div className="p-6 flex items-center justify-between border-b">
          {" "}
          {/* Header section */}
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* --- Content Area (Scrollable) --- */}
        <div className="p-6 overflow-y-auto flex-grow">
          {" "}
          {/* Added overflow-y-auto and flex-grow */}
          {children}
        </div>
        {/* --- End Content Area --- */}
        <div className="p-4 text-right border-t bg-gray-50 rounded-b-lg">
          {" "}
          {/* Footer section */}
          <button onClick={onClose} className="btn-secondary">
            Close
          </button>
        </div>
      </div>
      {/* --- STOP EDITING THIS DIV --- */}
    </div>
  );
};

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isAboutUsDialogOpen, setIsAboutUsDialogOpen] = useState(false);
  const [isPodcastDialogOpen, setIsPodcastDialogOpen] = useState(false); // <-- State for Podcast dialog
  const [isProjectsDialogOpen, setIsProjectsDialogOpen] = useState(false); // <-- State for Projects dialog

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

  // Function to open the Team Member dialog
  const openMemberDialog = (member: TeamMember) => {
    setSelectedMember(member);
  };

  // Functions to control the About Us dialog
  const openAboutUsDialog = () => setIsAboutUsDialogOpen(true);
  const closeAboutUsDialog = () => setIsAboutUsDialogOpen(false);

  // <-- Functions to control the Podcast dialog -->
  const openPodcastDialog = () => setIsPodcastDialogOpen(true);
  const closePodcastDialog = () => setIsPodcastDialogOpen(false);

  // <-- Functions to control the Projects dialog -->
  const openProjectsDialog = () => setIsProjectsDialogOpen(true);
  const closeProjectsDialog = () => setIsProjectsDialogOpen(false);

  // --- Keep this Project Data Definition ---
  const completedProjects = [
    {
      id: 1,
      nepaliTitle:
        "१. सामाजिक सञ्जालबाट प्रवाह हुने भ्रामक सूचनाले पार्ने प्रभाव सम्बन्धी अनुसन्धान",
      nepaliCitation: "(नेपाल दुरसंचार प्राधिकरण - २०७९-०८०)",
      englishTitle:
        "1. A Study on the Impact of Misinformation Spread through Social Media",
      englishCitation: "(Nepal Telecommunications Authority – 2022/23)",
    },
    {
      id: 2,
      nepaliTitle: "२. नेपालमा ऊर्जा, जर्नल प्रकाशन",
      nepaliCitation: "(ऊर्जा, सिचाई तथा जलश्रोत मन्त्रालय - २०८०-०८१)",
      englishTitle: "2. Journal Publication on Energy in Nepal",
      englishCitation:
        "(Ministry of Energy, Irrigation, and Water Resources – 2023/24)",
    },
  ];

  const ongoingProjects = [
    {
      id: 1,
      nepaliTitle:
        "१. बिद्युत क्षेत्रको बिकासमा बिद्युत सम्बन्धि कम्पनीबाट हुने हकप्रद शेयरको सार्बजनिक निष्कासनको आवश्यकता, निष्कासनको उपयुक्त आधार, निहित जोखिम लगायतका विषयको अध्ययन",
      nepaliCitation: "(बिद्युत नियमन आयोग - २०८१-०८२)",
      englishTitle:
        "1. A Study on the Need, Proper Basis, and Associated Risks of Public Issuance of Rights Shares by Electricity-related Companies for the Development of the Power Sector",
      englishCitation: "(Electricity Regulatory Commission – 2024/25)",
    },
  ];
  // --- End Project Data Definition ---

  // Team member data arrays (Keep as is)
  const advisors: TeamMember[] = [
    {
      name: "Ramesh Kumar Malla",
      role: "Advisor",
      image: "/ramesh.jpg",
      description: `Ramesh Malla is a central committee member of the Communist Party of Nepal (Maoist Centre). He formerly served as the central president of the All Nepal National Independent Students' Union (Revolutionary), a prominent student organization that played a significant role in Nepal’s student movement.

Malla was a key figure in supporting Pushpa Kamal Dahal ‘Prachanda’, the first Prime Minister of the Federal Democratic Republic of Nepal, serving as his Private Secretary during both his second and third terms in office. Prior to that, he also held the position of Advisor to the Minister of Education, then led by Dinanath Sharma.

In academia, Malla is a former Senate member of Tribhuvan University, Nepal's oldest and largest university. During his years in the student movement, he contributed to political discourse as an editor of influential publications such as Janasangram, Sangeen, and Yoddha. He is also the author of Chimek Yatra (2074 B.S.), a book reflecting his personal insights and experiences on Nepal’s neighborhood relations.

As part of the Prime Minister’s official delegation, Malla has represented Nepal on several international visits, including to India, China, Italy, and the United Arab Emirates. He participated as a delegate in the United Nations Food Systems Summit 2023 in Italy and attended the COP28 international conference on climate change in the UAE.

Malla was actively involved in Nepal’s historic Maoist People’s War and the People’s Movement of 2005/06 (2062/63 B.S.), both of which were instrumental in the country’s political transformation. He has led numerous social and educational campaigns throughout his career.

He holds a Master’s degree in Political Science from Tribhuvan University and was born in Salyan, Nepal.`,
      links: ["https://rameshmalla.com.np/"],
    },
    {
      name: "Popular Gentle Bhusal",
      role: "Advisor",
      image: "/pgb.png",
      description: `Popular has over 25 years of experience at the intersection of research, policy, and program implementation, with a primary focus on climate change adaptation, natural resource governance, livelihoods, poverty reduction, and gender equality and social inclusion (GESI).

He holds a PhD in Climate Change Adaptation from Charles Sturt University, Australia, where he has also served as an Adjunct Senior Research Fellow since 2014. In addition, he earned a Master’s degree in Forestry from the University of Canterbury, New Zealand, and a Master’s in Ecology from Tribhuvan University, Nepal.

From June 2023 to July 2024, Popular served as the Climate Change and Environment Advisor to the Rt. Hon. Prime Minister of Nepal. His professional background includes several leadership roles, such as:

1. Deputy Country Director, CARE International in Nepal
2. Team Leader, Oxford Policy Management
3. Country Director, Ipas USA in Nepal

Popular’s work has been widely published, with a strong body of research covering climate change adaptation, livelihoods, natural resource governance, poverty alleviation, and gender equality. His contributions have made a meaningful impact on both national and international platforms addressing development and environmental resilience.`,
      links: [
        "https://www.researchgate.net/profile/Popular-Gentle?ev=hdr_xprf",
        "https://scholar.google.com/citations?hl=en&user=oYmpREwAAAAJ&view_op=list_works",
      ],
    },
    {
      name: "Bim Bahadur Shrestha",
      role: "Advisor",
      image: "/bim.jpg",
      description: `Prof. Bim Prasad Shrestha, PhD brings over 30 years of multidisciplinary experience in biosystems and agricultural engineering, with a particular emphasis on automation, image‑based quality assessment, energy applications, and sanitation technologies. He is a Professor at Kathmandu University’s School of Engineering and has served as an Affiliate Professor in Bioengineering at the University of Washington since 2021. 
      
Prof. Shrestha earned his BTech in Agricultural Engineering (Kerala Agricultural University, USAID), MSc in Agricultural Mechanization (University of Miyazaki, Japan), PhD in Agricultural Engineering (Kagoshima University, Japan), and completed a USDA‑supported postdoctoral fellowship at Michigan State University.

He has led high‑profile grants totaling tens of millions of dollars from institutions including KOICA, the World Bank, the Bill & Melinda Gates Foundation, and the U.S. Department of State. His past leadership roles span Associate Dean, Department Head, Director for Student Welfare, and Global Engagement Office Founder at Kathmandu University, as well as coordinating foreign‑aid efforts at Nepal’s Prime Minister’s Office.

Prof. Shrestha has authored numerous book chapters, peer‑reviewed journal articles, and conference presentations on topics ranging from near‑infrared spectroscopy for biomass analysis to GIS‑based disaster assessments. He actively fosters international collaborations across Asia, North America, and Europe and is fluent in Nepal Bhasa, Nepali, Hindi, Japanese, and English.`,
    },
  ];

  const leadership: TeamMember[] = [
    {
      name: "Tilak Raj Bhandari",
      role: "Chairman",
      image: "/tilakraj.png",
      description: `Tilak Raj Bhandari is a dedicated communist leader and central committee member of the Nepal Communist Party (Maoist Centre), with a remarkable journey from a modest farming background to a prominent political figure. 
        
Overcoming early hardships through labor work to fund his education, he earned a Master’s in political science and an LLB, becoming a lawyer. His political career began in student activism, evolving into a key role in Nepal’s underground People’s War and the establishment of a federal democratic republic. Alongside his political work, Bhandari runs Everest Associates, a law firm, and Research for Nepal, advocating for education, self-reliance, and dynamic leadership to address modern societal challenges. Known for his integrity and simplicity, he remains a respected and approachable leader.`,
      links: ["https://www.tilakrajbhandari.com.np/"],
    },
  ];

  const researchers: TeamMember[] = [
    {
      name: "Arbind Chaudhari",
      role: "Economics and Climate Change",
      image: "/ac.png",
      description: `Arbind Chaudhary is a development economist and policy consultant with extensive experience at the intersection of climate change, environmental economics, and public policy. With over a decade of applied research and consulting practice, Arbind has worked with both international and national policy institutions, including the International Food Policy Research Institute (IFPRI), Washington D.C., and the National Planning Commission (NPC), Government of Nepal. His work has contributed directly to national planning and climate change strategies, including SDG 3 (Good Health and Well-Being) and coordination across key federal ministries and provinces.

He holds a Master’s degree in Economics from Tribhuvan University, where he also completed undergraduate studies in both Economics and Forestry Science. His research focuses on climate change, environment and resource economics, development and planning economics, and political economy.

From April to August 2024, Arbind served as a Consultant at IFPRI, contributing to forward-looking research on methane emissions, climate policy integration in agriculture, and stakeholder mapping for climate action in Nepal. His recent peer-reviewed work includes publications in Cogent Social Sciences and submissions under review at the Journal of Economic Issues. He is also contributing a forthcoming chapter on spatial analysis for climate policy.

In previous roles, he has coordinated development activities in Madhes Province and supported multiple ministries under Nepal’s federal structure through evidence-based research and planning. He also served as Lead Researcher at the Research Center for Development Studies (RCDS) from 2018 to 2021 and Research Associate at the Center for Social Inclusion and Federalism in 2018.

Arbind is a recognized peer reviewer for several academic journals including Regional Sustainability, China Agricultural Economic Review, and Asian Journal of Economics, Business and Accounting. He is also a Life Member of the Nepal Economic Association and serves on the Advisory Committee of the Federation of Nepali Consumer Protection (FNCP), Bagmati Province.

He brings proficiency in R, EViews, LaTeX, and advanced GIS and Remote Sensing tools like Google Earth Engine, especially applied to climate change impact assessment, spatial econometrics, and carbon and GHG inventory.`,
      links: ["https://www.researchgate.net/profile/Arbind-Chaudhary-2"],
    },
    {
      name: "Mahendra Bahadur Chand",
      role: "Economics Policy",
      image: "/mc.png",
      description: `Mahendra Bahadur Chand is a driven Research Intern at Research For Nepal and a Lecturer at Padma Kanya Multiple Campus, where he integrates academic expertise in economics with emerging technologies to design sustainable policy solutions. Holding an MA in Economics from Tribhuvan University with a focus on financial literacy and inclusion, he is skilled in STATA, econometric modeling, and data-driven strategy development.

Mahendra’s experience spans leading research initiatives, presenting at international conferences (CAICE, FICE, NECS), and mentoring youth entrepreneurs through the Youth Self-Employment Fund. At Bhandari IT, he contributes to projects at the nexus of economics and technology, aiming to create actionable, scalable solutions for Nepal’s socio-economic development. A collaborative team player, he brings academic rigor and grassroots insight to promote inclusive growth and institutional reform.`,
      links: [
        "https://www.nepjol.info/index.php/tjec?utm",
        "https://elibrary.tucl.edu.np/bitstreams/3f73757c-f0aa-41ee-98be-a02a6131638f/download?utm",
        "https://www.researchgate.net/profile/Mahendra-Chand?",
      ],
    },
  ];

  // Reusable function to render team member cards (Keep as is)
  const renderTeamMemberCard = (member: TeamMember) => (
    <div key={member.name} className="team-card fade-in text-center">
      <div className="w-48 h-64 mx-auto mb-4 overflow-hidden rounded-lg shadow-lg">
        <img
          src={member.image}
          alt={`Portrait of ${member.name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-xl font-bold mb-2">{member.name}</h4>
      <p className="text-gray-600 mb-2">{member.role}</p>
      <button
        onClick={() => openMemberDialog(member)}
        className="text-primary hover:text-primary/80 underline text-sm transition-colors"
      >
        Read more
      </button>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col">
      {/* Pass scrollToSection to Navbar if needed for link handling */}
      <Navbar />

      {/* Hero Section (Unchanged) */}
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
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 fade-in">
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
          onClick={() => scrollToSection("faculties")} // Scrolls to Focus Areas
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </section>

      {/* Faculties Section (Unchanged) */}
      <section id="faculties" className="section bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12 fade-in">
            Our Focus Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cards remain the same */}
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

      {/* About Section - MODIFIED */}
      <section id="about" className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12 fade-in">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto space-y-8 fade-in">
            <p className="text-lg text-gray-600 mb-6 text-justify">
              Research for Nepal (RfN) is a pioneering non-profit research
              institute, established in 2023 with the vision of fostering
              knowledge-driven national development. Our motto, "Diverse Nepal,
              Prosperous Nepali," reflects our commitment to utilizing Nepal's
              rich technological, industrial, cultural, environmental, and
              economic diversity to drive inclusive and sustainable progress.
            </p>

            {/* Add the "Read More" button for About Us Dialog */}
            <button
              onClick={openAboutUsDialog}
              className="btn-secondary mx-auto block"
            >
              Read More About Us
            </button>

            {/* Stats section - MODIFIED */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 text-center">
              <div className="stat-card p-4 border rounded-lg shadow-sm fade-in">
                <h4 className="text-3xl font-bold text-primary">5+</h4>
                <p className="text-gray-600 mb-2">Active Projects</p>
                {/* <-- Add Read More Button for Projects --> */}
                <button
                  onClick={openProjectsDialog}
                  className="text-sm text-primary hover:underline"
                >
                  Read More
                </button>
              </div>
              <div className="stat-card p-4 border rounded-lg shadow-sm fade-in">
                <h4 className="text-3xl font-bold text-primary">10+</h4>
                <p className="text-gray-600">Research Fellows</p>
                {/* Optional: Add a link/button here if needed in the future */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Unchanged Structure, data remains) */}
      <section id="team" className="section bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12 fade-in">
            Our Team
          </h2>

          {/* Advisors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 fade-in">
              Advisors
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {" "}
              {/* Added justify-center */}
              {advisors.map((advisor) => renderTeamMemberCard(advisor))}
            </div>
          </div>

          {/* Chairman */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 fade-in">
              Chairman
            </h3>
            <div className="grid md:grid-cols-1 gap-6 max-w-xs mx-auto">
              {" "}
              {/* Adjusted max-w */}
              {leadership.map((leader) => renderTeamMemberCard(leader))}
            </div>
          </div>

          {/* Researchers */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 fade-in">
              Research Fellows
            </h3>
            <div className="grid md:grid-cols-2 gap-6 justify-center">
              {" "}
              {/* Added justify-center */}
              {researchers.map((researcher) =>
                renderTeamMemberCard(researcher)
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW Podcast Section --- */}
      <section id="podcast" className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12 fade-in">
            Podcast
          </h2>
          <div className="max-w-3xl mx-auto text-center fade-in">
            <p className="text-lg text-gray-600 mb-8">
              Stay tuned for insightful discussions on Nepal's development,
              policy, and innovation.
            </p>
            {/* Video Placeholder/Trigger */}
            <div
              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              onClick={openPodcastDialog} // Open dialog on click
            >
              {/* You can use an actual iframe commented out or a placeholder */}
              {/* <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID`} // Replace with your video ID
                    title="Research For Nepal Podcast (Coming Soon)"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                 ></iframe> */}
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                <p className="mt-2 text-white font-semibold">
                  Watch Our Podcast (Coming Soon)
                </p>
              </div>
              {/* Optional: Add a background image */}
              {/* <img src="/podcast-placeholder.jpg" alt="Podcast Placeholder" className="w-full h-full object-cover"/> */}
            </div>
          </div>
        </div>
      </section>
      {/* --- END Podcast Section --- */}

      {/* Contact Section (Unchanged) */}
      <section id="contact" className="section bg-muted">
        {" "}
        {/* Changed bg for alternation */}
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-center mb-12 fade-in">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Contact Cards remain the same */}
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

      {/* Footer - MODIFIED */}
      <footer className="bg-gray-100 py-12">
        {" "}
        {/* Slightly different bg */}
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {" "}
            {/* Changed to 4 cols */}
            {/* Logo and Description */}
            <div className="space-y-4 md:col-span-1">
              {" "}
              {/* Adjusted span */}
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
              <p className="text-gray-600 text-sm">
                {" "}
                {/* Slightly smaller text */}
                Fostering knowledge-driven national development through research
                and innovation.
              </p>
            </div>
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("faculties")}
                  className="text-gray-600 hover:text-primary text-left text-sm"
                >
                  Focus Areas
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-600 hover:text-primary text-left text-sm"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-gray-600 hover:text-primary text-left text-sm"
                >
                  Our Team
                </button>
                {/* <-- Add Podcast Link --> */}
                <button
                  onClick={() => scrollToSection("podcast")}
                  className="text-gray-600 hover:text-primary text-left text-sm"
                >
                  Podcast
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-600 hover:text-primary text-left text-sm"
                >
                  Contact
                </button>
              </div>
            </div>
            {/* Added an empty div for spacing or future content if needed */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <div className="flex flex-col space-y-2">
                {/* Add resource links here if needed */}
                <span className="text-gray-500 text-sm">Coming Soon</span>
              </div>
            </div>
            {/* Working Hours */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Working Hours</h3>
              <div className="text-gray-600 text-sm">
                {" "}
                {/* Slightly smaller text */}
                <p>Sunday - Friday</p>
                <p>9:00 AM - 5:00 PM NPT</p> {/* Added Timezone */}
                <p className="mt-2">Saturday: Closed</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              {" "}
              {/* Slightly smaller text */}© {new Date().getFullYear()} Research
              For Nepal. All rights reserved. {/* Dynamic Year */}
            </p>
          </div>
        </div>
      </footer>

      {/* --- Render Dialogs --- */}

      {/* Team Member Dialog */}
      {selectedMember && (
        <TeamMemberDialog
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          member={selectedMember}
        />
      )}

      {/* About Us Dialog */}
      <AboutUsDialog
        isOpen={isAboutUsDialogOpen}
        onClose={closeAboutUsDialog}
      />

      {/* --- NEW Podcast Dialog --- */}
      <BasicDialog
        isOpen={isPodcastDialogOpen}
        onClose={closePodcastDialog}
        title="Podcast"
      >
        <p className="text-center text-gray-700">
          Our podcast is launching soon. Stay tuned!
        </p>
      </BasicDialog>

      {/* --- NEW Projects Dialog --- */}
      <BasicDialog
        isOpen={isProjectsDialogOpen}
        onClose={closeProjectsDialog}
        title="Active Projects Status"
      >
        {/* --- START: List Content using Project Arrays --- */}
        <div className="space-y-6 text-sm text-gray-700">
          {" "}
          {/* Outer container */}
          {/* Completed Projects Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              सम्पन्न प्रोजेक्ट (Completed Projects)
            </h4>
            {/* Check if there are completed projects before mapping */}
            {completedProjects.length > 0 ? (
              <ul className="list-none space-y-4 pl-2">
                {" "}
                {/* Use list-none for bullet removal */}
                {/* Map over the completedProjects array */}
                {completedProjects.map((project) => (
                  <li key={`completed-${project.id}`}>
                    {" "}
                    {/* Unique key for each list item */}
                    <p className="font-medium">{project.nepaliTitle}</p>
                    <p className="text-xs text-gray-500 mb-1">
                      {project.nepaliCitation}
                    </p>
                    <p>{project.englishTitle}</p>
                    <p className="text-xs text-gray-500">
                      {project.englishCitation}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 pl-2 italic">
                No completed projects to display.
              </p> // Placeholder if array is empty
            )}
          </div>
          {/* Ongoing Projects Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-800">
              चालू प्रोजेक्ट (Ongoing Project)
            </h4>
            {/* Check if there are ongoing projects before mapping */}
            {ongoingProjects.length > 0 ? (
              <ul className="list-none space-y-4 pl-2">
                {" "}
                {/* Use list-none for bullet removal */}
                {/* Map over the ongoingProjects array */}
                {ongoingProjects.map((project) => (
                  <li key={`ongoing-${project.id}`}>
                    {" "}
                    {/* Unique key for each list item */}
                    <p className="font-medium">{project.nepaliTitle}</p>
                    <p className="text-xs text-gray-500 mb-1">
                      {project.nepaliCitation}
                    </p>
                    <p>{project.englishTitle}</p>
                    <p className="text-xs text-gray-500">
                      {project.englishCitation}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 pl-2 italic">
                No ongoing projects to display.
              </p> // Placeholder if array is empty
            )}
          </div>
        </div>
        {/* --- END: List Content --- */}
      </BasicDialog>

      {/* Scroll to Top Button (Unchanged) */}
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
