import { motion } from 'framer-motion';

interface ProblemSolutionCardProps {
  icon: string;
  problemTitle: string;
  problemDesc: string;
  solutionDesc: string;
  tagline: string;
}

const ProblemSolutionCard = ({ icon, problemTitle, problemDesc, solutionDesc, tagline }: ProblemSolutionCardProps) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="bg-brand-indigo/80 rounded-2xl p-6 text-brand-text transition-all duration-300 hover:shadow-[0_0_25px_rgba(74,243,247,0.4)]"
  >
    {/* Problem */}
    <div className="text-center mb-4">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold text-brand-teal">{problemTitle}</h3>
      <p className="text-brand-muted text-sm mt-1">{problemDesc}</p>
    </div>

    {/* Divider */}
    <motion.div
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="h-[2px] w-16 mx-auto bg-gradient-to-r from-brand-teal to-brand-purple my-4 rounded-full"
    />

    {/* Solution */}
    <div className="bg-brand-dark/40 rounded-xl border border-brand-purple/40 p-4 text-center shadow-[0_0_10px_rgba(140,95,255,0.2)]">
      <h4 className="text-lg font-semibold text-brand-purple">✅ Solution</h4>
      <p className="text-brand-text text-sm mt-1">{solutionDesc}</p>
      <p className="italic text-brand-accent mt-3 text-xs">{tagline}</p>
    </div>
  </motion.div>
);

export default function ProblemSolutionSection() {
  const problems = [
    {
      icon: "🕒",
      problemTitle: "Long Waits",
      problemDesc:
        "Peak-hour congestion and limited staff capacity create bottlenecks in customer flow, inefficient order handling, and lower table turnover.",
      solutionDesc:
        "Samee introduces AI-driven conversational automation that delivers instant order capture and real-time POS synchronization — boosting throughput and guest satisfaction through intelligent workflow optimization.",
      tagline: "Turn downtime into delight with instant AI ordering.",
    },
    {
      icon: "💬",
      problemTitle: "Order Mistakes",
      problemDesc:
        "Manual order-taking leads to communication gaps, inconsistent notes, and dissatisfied customers during high traffic hours.",
      solutionDesc:
        "Our LLM-powered ordering assistant ensures context-aware accuracy, allergy recognition, and personalized engagement. Samee eliminates ambiguity, driving data-backed precision across every interaction.",
      tagline: "Zero confusion. 100% confidence.",
    },
    {
      icon: "📉",
      problemTitle: "Lost Revenue",
      problemDesc:
        "Restaurants lose up to 20% in potential revenue due to missed upsells, inattentive service, and limited analytics.",
      solutionDesc:
        "Samee leverages predictive analytics and AI-based recommendation engines to increase AOV and CLV. Every interaction becomes an upsell opportunity driven by dynamic, data-informed menu optimization.",
      tagline: "Every chat becomes a sales opportunity.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-brand-dark text-brand-text">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        The problems restaurants face — and how we solve them.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((p, i) => (
          <ProblemSolutionCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}