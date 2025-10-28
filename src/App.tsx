import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import RoadmapSection from './components/RoadmapSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-brand-dark text-brand-text">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="vision">
        <ProblemSolutionSection />
      </div>
      <RoadmapSection />
      <div id="contact">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default App;