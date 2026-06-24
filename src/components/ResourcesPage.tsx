import { motion } from "motion/react";
import {
  Search,
  ChevronRight,
  Download,
  Play,
  Printer,
  Check,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState, useMemo } from "react";
import { ActionLink } from "./ui/ActionLink";
import { ListItemCard } from "./ui/ListItemCard";
import { FadeInScroll } from "./ui/FadeInScroll";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { FilterTab } from "./ui/FilterTab";
import { GuideCard } from "./ui/GuideCard";
import { LockerItem } from "./ui/LockerItem";
import { HeroQuoteCard } from "./ui/HeroQuoteCard";

import img2912 from "../assets/images/IMG_2912.jpeg";
import img2947 from "../assets/images/IMG_2947.jpeg";

const ALL_GUIDES = [
  {
    category: "Tools & Templates",
    catId: "tools",
    title: "Developing a Calming Bedtime Wind-Down",
    description:
      "A visual template with calming colour shifts — steps to swap screen time for sensory, hands-on cues that help Maya settle.",
    readTime: "8 min read",
    image: img2912,
  },
  {
    category: "Health & Clinical",
    catId: "health",
    title: "How Sleep and ADHD Interact in Growing Brains",
    description:
      "Clear, reassuring neuroscience on why dopamine profiles affect circadian rhythms — and how to work with Maya's natural bedtime schedule rather than against it.",
    readTime: "6 min read",
    image: img2947,
  },
  {
    category: "Tools & Templates",
    catId: "tools",
    title: "Questions to Discuss With Your Pediatrician",
    description:
      "A simple printable question list to bring to your next check-up, prompting useful conversations about the biological factors affecting Maya's sleep.",
    readTime: "5 min read",
    image: img2912,
  },
  {
    category: "Classroom Strategies",
    catId: "classroom",
    title: "Classroom Accommodation Strategies for ADHD Fatigue",
    description:
      "Creative, respectful options the school can use to help Maya restabilise — without feeling singled out — when fatigue spikes around 10:30 AM.",
    readTime: "10 min read",
    image: img2947,
  },
  {
    category: "Emotional Regulation",
    catId: "emotional",
    title: "Deep Breathing & Co-Regulation for Bedtime Resistance",
    description:
      "Short audio prompts and play-based breathing — like blowing out imaginary stars — for a calm, cooperative parent-child bedtime ritual.",
    readTime: "7 min read",
    image: img2912,
  },
];

export default function ResourcesPage({ currentChild }: { currentChild: any }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const isLiam = currentChild.name === "Liam";

  const guidesWithDynamicName = useMemo(() => {
    return ALL_GUIDES.map(g => ({
      ...g,
      description: g.description.replace(/Maya/g, currentChild.name)
    }));
  }, [currentChild.name]);

  const filteredGuides = useMemo(() => {
    return guidesWithDynamicName.filter((g) => {
      const matchSearch =
        g.title.toLowerCase().includes(search.toLowerCase()) ||
        g.description.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === "all" || g.catId === filter;
      return matchSearch && matchFilter;
    });
  }, [search, filter, guidesWithDynamicName]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-[1000px] mx-auto pt-16 px-11 pb-16 max-md:px-5"
    >
      <div className="mb-24">
        <span className="text-[0.66rem] tracking-[0.2em] uppercase text-slate-500 font-semibold mb-6 block">
          Resource library · Clinical-grade guidance
        </span>
        <h1 className="font-semibold text-4xl tracking-tighter leading-[1.08] max-w-[16ch]">
          Personalised resources.
        </h1>
        <p className="text-[1.05rem] text-slate-500 leading-relaxed max-w-[58ch] mt-8">
          Short, practical, clinical-grade guides — tailored to {currentChild.name}'s current
          focus areas, so what you see first is what's most useful right now.
        </p>
        <div className="flex items-center gap-2 text-[0.8rem] text-slate-500 mt-3.5">
          <Check className="w-3.5 h-3.5 text-[var(--color-thread-mid-green)] stroke-[1.8]" /> Sorted
          by clinical focus matching
        </div>
      </div>

      <HeroQuoteCard
        kicker="Featured guide"
        quote={isLiam ? "Fostering long-term developmental velocity." : "Starting the upcoming school term with confidence."}
        showQuotes={false}
        className="mb-24"
        description={
          isLiam ? (
            `Advanced strategies for ${currentChild.name} to generalise his social integration wins into diverse, unstructured environments.`
          ) : (
            `Strategies to manage ADHD-linked morning fatigue and prepare sensory transitions before ${currentChild.name} steps into the new classroom.`
          )
        }
        action={
          <Button
            variant="mint"
            className="relative"
            rightIcon={<ChevronRight className="w-3.5 h-3.5 stroke-[2]" />}
          >
            Read article
          </Button>
        }
      />

      {/* Modules Section */}
      <FadeInScroll className="mb-24">
        <div className="mb-5.5">
          <span className="text-[0.66rem] tracking-[0.2em] uppercase text-slate-500 font-semibold mb-2.5 block text-uppercase">
            Available modules
          </span>
          <h2 className="font-semibold text-[1.4rem] tracking-tight">
            Personalised to {currentChild.name}'s focus.
          </h2>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[17px] h-[17px] text-slate-400 stroke-[1.8]" />
          <Input
            type="text"
            placeholder="Search guides…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="search"
          />
        </div>

        <div className="flex gap-2 flex-wrap mb-6">
          <FilterTab
            active={filter === "all"}
            label="All guides"
            onClick={() => setFilter("all")}
          />
          <FilterTab
            active={filter === "tools"}
            label="Tools & Templates"
            onClick={() => setFilter("tools")}
          />
          <FilterTab
            active={filter === "health"}
            label="Health & Clinical"
            onClick={() => setFilter("health")}
          />
          <FilterTab
            active={filter === "classroom"}
            label="Classroom Strategies"
            onClick={() => setFilter("classroom")}
          />
          <FilterTab
            active={filter === "emotional"}
            label="Emotional Regulation"
            onClick={() => setFilter("emotional")}
          />
        </div>

        <span className="text-[0.66rem] tracking-[0.16em] uppercase text-slate-400 font-semibold mb-6 block">
          {filteredGuides.length}{" "}
          {filteredGuides.length === 1 ? "article" : "articles"} found
        </span>

        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {filteredGuides.map((guide, i) => {
              const cornerClasses = [
                "rounded-tr-[32px]",
                "rounded-tl-[32px]",
                "rounded-br-[32px]",
                "rounded-bl-[32px]",
              ];
              const cornerClass = cornerClasses[i % cornerClasses.length];
              return <GuideCard key={i} {...guide} cornerClass={cornerClass} childName={currentChild.name} />;
            })}
          </div>
        ) : (
          <div className="text-center py-10 border border-dashed border-black/10 rounded-2xl text-slate-500">
            No guides match your search.
            <ActionLink
              variant="default"
              as="button"
              onClick={() => {
                setSearch("");
                setFilter("all");
              }}
              className="mt-3 block mx-auto font-semibold"
            >
              Clear search
            </ActionLink>
          </div>
        )}
      </FadeInScroll>

      {/* Directory Section */}
      <FadeInScroll className="mb-24">
        <div className="mb-5.5">
          <span className="text-[0.66rem] tracking-[0.2em] uppercase text-slate-500 font-semibold mb-2.5 block text-uppercase">
            Browse directory
          </span>
          <h2 className="font-semibold text-[1.4rem] tracking-tight">
            Browse by topic.
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-2.5 max-md:grid-cols-1">
          {[
            "Understanding ADHD",
            "Emotional Regulation",
            "School Support",
            "Learning & Cognition",
            "Daily Routines",
            "Working with Professionals",
          ].map((t, i) => (
            <ListItemCard key={i}>{t}</ListItemCard>
          ))}
        </div>
      </FadeInScroll>

      {/* Locker Section */}
      <FadeInScroll className="mb-24">
        <div className="mb-5.5">
          <span className="text-[0.66rem] tracking-[0.2em] uppercase text-slate-500 font-semibold mb-2.5 block text-uppercase">
            Aids & exercises locker
          </span>
          <h2 className="font-semibold text-[1.4rem] tracking-tight">
            Quick activities locker.
          </h2>
        </div>

        <div className="relative rounded-br-[36px] p-7.5 bg-watercolor">
          <div className="grid grid-cols-3 gap-3.5 max-md:grid-cols-1">
            <LockerItem
              icon={<Download className="w-[19px] h-[19px] stroke-[1.8]" />}
              title="Download templates"
              description="Editable letter templates, transition checklists and customisable behaviour journals."
              action="Download printable PDFs"
              cornerClass="rounded-tl-[32px]"
            />
            <LockerItem
              icon={<Play className="w-[19px] h-[19px] stroke-[1.8]" />}
              title="Watch short videos"
              description="5-minute play-based co-regulation tactics designed for real parents."
              action="Launch video player"
              cornerClass="rounded-tr-[32px]"
            />
            <LockerItem
              icon={<Printer className="w-[19px] h-[19px] stroke-[1.8]" />}
              title="Print classroom guides"
              description="Double-sided sheets designed for teachers, tutors and clinical aides."
              action="Generate print format"
              cornerClass="rounded-br-[32px]"
            />
          </div>
        </div>
      </FadeInScroll>
    </motion.div>
  );
}
