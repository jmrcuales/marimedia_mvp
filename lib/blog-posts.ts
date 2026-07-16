import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Utensils,
  Moon,
  Activity,
  Wind,
  HeartPulse,
  Pill,
  Users,
  BatteryLow,
  Salad,
  Waves,
  ShieldAlert,
} from "lucide-react";

/**
 * Blog category taxonomy. Keeping this as a typed union (rather than a bare
 * `string`) makes it easy to add category filtering/navigation later without
 * touching every post entry.
 */
export const blogCategories = [
  "Functional Medicine",
  "Preventive Health",
  "Health Events",
  "Health Trends",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

/** A single feature/topic card used inside a `cardGrid` block. */
export interface FeatureCardItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** A single line item inside a `checklist` block. Optionally links out. */
export interface ChecklistItem {
  text: string;
  href?: string;
}

/** A single figure inside a `statGrid` block (e.g. "60 / Minutes / ..."). */
export interface StatItem {
  value: string;
  label: string;
  description: string;
}

/** A single citation inside a `references` block. */
export interface ReferenceItem {
  source: string;
  title: string;
  url: string;
}

export type CalloutVariant = "safety" | "evidence" | "info" | "disclaimer";

/**
 * Rich, structured article content. This is the typed "article-data model"
 * long-form health-blog posts use instead of (or in addition to) the plain
 * `content` paragraph array — it lets a post render editorial elements like
 * callouts, checklists, stat grids, and card grids while staying data-driven
 * (no per-article JSX). Posts that don't need this can omit `body` entirely
 * and keep using `content`.
 */
export type ArticleBlock =
  | { type: "eyebrow"; text: string }
  | { type: "heading"; level: 2 | 3; text: string; id?: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    }
  | { type: "cardGrid"; columns: 2 | 3 | 4; items: FeatureCardItem[] }
  | { type: "checklist"; heading?: string; items: ChecklistItem[] }
  | {
      type: "callout";
      variant: CalloutVariant;
      title?: string;
      text: string;
    }
  | { type: "statGrid"; items: StatItem[] }
  /** Two side-by-side sub-columns on desktop, stacked on mobile. */
  | { type: "twoColumn"; columns: [ArticleBlock[], ArticleBlock[]] };

export interface BlogPostCta {
  label: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  author: string;
  publishedAt: string;
  readTimeMinutes: number;
  /** Icon used in card/detail UI (no image assets are stored in the repo yet). */
  icon: LucideIcon;
  /**
   * Featured/OG image. Falls back to a placeholder path for posts that don't
   * have a real asset yet.
   */
  featuredImage: string;
  featuredImageAlt?: string;
  /** SEO <title> — falls back to `title` when not distinct enough on its own. */
  metaTitle: string;
  /** SEO meta description, ~150-160 characters, optimized for US search intent. */
  metaDescription: string;
  /**
   * The hero's introductory paragraph, shown under the H1 (before any CTAs).
   * Falls back to `excerpt` for posts that don't define one.
   */
  heroIntro?: string;
  /** Optional hero call-to-action buttons rendered under the intro paragraph. */
  heroCtas?: BlogPostCta[];
  /**
   * Simple plain-text paragraphs. Used as a fallback body for posts that
   * don't define the richer `body` block array below.
   */
  content?: string[];
  /** Rich structured body — see `ArticleBlock`. Preferred for long-form posts. */
  body?: ArticleBlock[];
  references?: ReferenceItem[];
  /** Overrides the site's default end-of-article medical disclaimer text. */
  disclaimer?: string;
}

/**
 * Rough estimate of reading time from an `ArticleBlock[]`, based on an
 * average adult silent-reading pace (~200 words/minute). Only counts blocks
 * that contain prose (paragraphs, quotes, callouts, checklist items, card
 * copy) so structural blocks like images don't skew the count.
 */
export function estimateReadingTime(blocks: ArticleBlock[]): number {
  const WORDS_PER_MINUTE = 200;

  const collectText = (block: ArticleBlock): string[] => {
    switch (block.type) {
      case "eyebrow":
      case "heading":
      case "paragraph":
      case "quote":
        return [block.text];
      case "callout":
        return [block.title ?? "", block.text];
      case "checklist":
        return [block.heading ?? "", ...block.items.map((item) => item.text)];
      case "cardGrid":
        return block.items.flatMap((item) => [item.title, item.description]);
      case "statGrid":
        return block.items.flatMap((item) => [
          item.value,
          item.label,
          item.description,
        ]);
      case "twoColumn":
        return block.columns.flat().flatMap(collectText);
      case "image":
        return [];
      default:
        return [];
    }
  };

  const wordCount = blocks
    .flatMap(collectText)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

const functionalMedicineBody: ArticleBlock[] = [
  { type: "eyebrow", text: "Core Definition" },
  {
    type: "heading",
    level: 2,
    id: "a-patient-centered-framework",
    text: "A Patient-Centered Framework for Understanding Health",
  },
  {
    type: "quote",
    text: "Functional medicine is a patient-centered approach that examines how a person's medical history, lifestyle, environment, genetics, and body systems may contribute to health concerns.",
  },
  {
    type: "paragraph",
    text: "Where a symptom-focused visit might ask, \u201cWhat can manage this?\u201d a functional medicine practitioner may also ask, \u201cWhy is this happening, and how might the body's systems be connected?\u201d These approaches can complement one another: functional medicine adds a broader lens, not a competing one.",
  },
  {
    type: "heading",
    level: 2,
    id: "body-as-interconnected-system",
    text: "The Body as an Interconnected System",
  },
  {
    type: "paragraph",
    text: "Functional medicine views the body as an interconnected system. A practitioner may consider how multiple factors relate to one another, and to your symptoms, before forming a care plan.",
  },
  {
    type: "cardGrid",
    columns: 4,
    items: [
      {
        icon: Utensils,
        title: "Nutrition",
        description:
          "How diet may influence inflammation, energy, and digestive health",
      },
      {
        icon: Moon,
        title: "Sleep & Recovery",
        description:
          "The role of rest in hormonal balance, mood, and immune function",
      },
      {
        icon: Activity,
        title: "Physical Activity",
        description: "How movement supports metabolic and cardiovascular health",
      },
      {
        icon: Wind,
        title: "Stress & Environment",
        description:
          "How chronic stress and environmental exposures may affect health over time",
      },
    ],
  },
  {
    type: "image",
    src: "/images/blog/functional-medicine/interconnected-health-systems.jpg",
    alt: "Editorial illustration of six connected health factors (nutrition, sleep, movement, environment, body systems, and daily habits) arranged around a central figure",
    width: 733,
    height: 1100,
    caption:
      "Functional medicine practitioners look at how factors like nutrition, sleep, movement, and environment interact rather than reviewing each in isolation.",
  },
  { type: "eyebrow", text: "Your First Visit" },
  {
    type: "heading",
    level: 2,
    id: "what-happens-during-an-appointment",
    text: "What Happens During a Functional Medicine Appointment?",
  },
  {
    type: "paragraph",
    text: "Appointments may be more detailed than a typical visit. At Cleveland Clinic's Center for Functional Medicine, an initial physician consultation may last approximately 60 minutes, sometimes supplemented by visits with a registered dietitian or health coach. The goal is to build a clearer picture before developing a personalized plan.",
  },
  {
    type: "image",
    src: "/images/blog/functional-medicine/functional-medicine-first-visit.jpg",
    alt: "A person at a desk at home organizing symptom notes, lab results, and medication lists in preparation for a health appointment",
    width: 825,
    height: 1100,
    caption:
      "Organizing your history before the appointment gives the practitioner more time to focus on your specific concerns.",
  },
  {
    type: "paragraph",
    text: "Bringing organized information helps the practitioner identify patterns and focus the appointment on your priorities.",
  },
  {
    type: "heading",
    level: 2,
    id: "what-to-bring",
    text: "What to Bring to Your First Appointment",
  },
  {
    type: "checklist",
    heading: "Your Preparation Checklist",
    items: [
      { text: "A written timeline of your symptoms" },
      { text: "Previous laboratory results" },
      { text: "Current medications and supplements" },
      { text: "Relevant medical records" },
      { text: "Treatments you've already tried" },
      { text: "Your questions and health priorities" },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "Does Functional Medicine Require Extensive Testing?",
  },
  {
    type: "callout",
    variant: "info",
    text: "Not necessarily. Testing should be selected based on your symptoms and medical history, not ordered simply because it's available. Cleveland Clinic notes that many patients can receive functional medicine care without extensive laboratory testing or large supplement regimens.\n\nIt's always appropriate to ask why a test is recommended, how results will affect your plan, and whether insurance covers it.",
  },
  {
    type: "heading",
    level: 2,
    id: "what-may-be-included-in-a-care-plan",
    text: "What May Be Included in a Care Plan?",
  },
  {
    type: "paragraph",
    text: "A personalized plan often focuses on modifiable factors: areas where meaningful change is possible. Recommendations are tailored to the individual and may evolve over time.",
  },
  {
    type: "cardGrid",
    columns: 3,
    items: [
      {
        icon: HeartPulse,
        title: "Lifestyle & Behavior",
        description:
          "Nutrition, physical activity, sleep, stress management, and daily routines",
      },
      {
        icon: Pill,
        title: "Medical & Clinical Support",
        description:
          "Medications, supplements, referrals, or other therapies when clinically appropriate",
      },
      {
        icon: Users,
        title: "Ongoing Coordination",
        description:
          "Communication with your primary care physician and specialists to ensure aligned care",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    id: "conventional-care",
    text: "Functional Medicine and Conventional Care",
  },
  {
    type: "paragraph",
    text: "Functional medicine is commonly used alongside, not instead of, conventional medical care. Patients may continue working with their primary care physician or specialists while consulting a functional medicine provider for an additional perspective. Cleveland Clinic describes its functional medicine program as collaborative with conventional care.",
  },
  {
    type: "callout",
    variant: "safety",
    title: "Important",
    text: "Do not stop prescribed medication or replace necessary medical treatment without consulting a qualified healthcare professional. Coordination is especially important if you take prescription medications, are pregnant or breastfeeding, have a complex condition, or are considering supplements that may interact with medications.",
  },
  {
    type: "heading",
    level: 2,
    id: "why-people-explore-functional-medicine",
    text: "Why Do People Explore Functional Medicine?",
  },
  {
    type: "paragraph",
    text: "People often consider this model when dealing with chronic, difficult-to-diagnose, or multi-symptom concerns. The appeal is typically a more comprehensive look at health, rather than addressing each symptom in isolation.",
  },
  {
    type: "cardGrid",
    columns: 4,
    items: [
      {
        icon: BatteryLow,
        title: "Persistent Fatigue",
        description:
          "Ongoing tiredness that hasn't fully improved with previous treatment",
      },
      {
        icon: Salad,
        title: "Digestive Concerns",
        description:
          "Chronic digestive issues that may involve multiple body systems",
      },
      {
        icon: Waves,
        title: "Hormonal & Metabolic Symptoms",
        description:
          "Hormonal imbalances or metabolic conditions with overlapping factors",
      },
      {
        icon: ShieldAlert,
        title: "Autoimmune-Related Concerns",
        description: "Complex symptoms that may benefit from a whole-person review",
      },
    ],
  },
  {
    type: "callout",
    variant: "disclaimer",
    text: "These are examples of concerns people may bring to a provider, not conditions functional medicine is proven to cure.",
  },
  { type: "eyebrow", text: "Evidence & Research" },
  {
    type: "heading",
    level: 2,
    id: "what-does-the-research-say",
    text: "What Does the Research Say?",
  },
  {
    type: "paragraph",
    text: "Research on the functional medicine model is still developing. A 2019 observational study involving Cleveland Clinic patients found an association between functional medicine care and improved patient-reported quality of life. The researchers noted that prospective studies are needed to confirm these findings; the study did not prove that functional medicine caused the improvements.",
  },
  {
    type: "callout",
    variant: "evidence",
    title: "Evidence Note",
    text: "An observed association means two things occurred together; it does not prove that one caused the other. Causation requires more rigorous study designs, including prospective and controlled research.",
  },
  {
    type: "statGrid",
    items: [
      {
        value: "60",
        label: "Minutes",
        description:
          "Typical initial consultation at Cleveland Clinic's Center for Functional Medicine",
      },
      {
        value: "2019",
        label: "Study Year",
        description:
          "Beidelschies et al. published findings on patient-reported quality-of-life outcomes in JAMA Network Open",
      },
      {
        value: "6",
        label: "References",
        description:
          "Credible sources including Cleveland Clinic, JAMA Network Open, and the American Board of Medical Specialties",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    id: "how-to-choose-a-provider",
    text: "How to Choose a Functional Medicine Provider",
  },
  {
    type: "paragraph",
    text: "Because practitioners come from different professional backgrounds, evaluating qualifications carefully is important. Here's a practical checklist.",
  },
  {
    type: "twoColumn",
    columns: [
      [
        { type: "heading", level: 3, text: "Provider Evaluation Checklist" },
        {
          type: "checklist",
          items: [
            { text: "Verify active professional license" },
            { text: "Review education and clinical training" },
            {
              text: "Confirm board certification",
              href: "https://www.certificationmatters.org/",
            },
            { text: "Ask about experience with your health concern" },
            { text: "Ask how tests and treatments are selected" },
            { text: "Request clear cost information and insurance details" },
            {
              text: "Ask how they coordinate with your existing healthcare team",
            },
            { text: "Be cautious of guaranteed cures or pressure to buy supplements" },
          ],
        },
      ],
      [
        { type: "heading", level: 3, text: "Questions to Ask Before Booking" },
        {
          type: "checklist",
          items: [
            { text: "What are your professional credentials?" },
            { text: "Are you licensed to diagnose and treat medical conditions?" },
            { text: "How do you decide which lab tests are necessary?" },
            { text: "Will you communicate with my current healthcare team?" },
            { text: "What costs should I expect?" },
            { text: "Do you sell the supplements you recommend?" },
            { text: "How do you measure whether a treatment plan is helping?" },
            { text: "What happens if my symptoms require specialist care?" },
          ],
        },
      ],
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-functional-medicine",
    title: "What Is Functional Medicine?",
    excerpt:
      "A balanced introduction to functional medicine, what happens during an appointment, how it may complement conventional care, and how to evaluate a provider.",
    category: "Functional Medicine",
    tags: [
      "Functional Medicine",
      "Patient-Centered Care",
      "Integrative Health",
      "Preventive Health",
    ],
    author: "Mari Media Editorial Team",
    publishedAt: "2026-07-10",
    readTimeMinutes: estimateReadingTime(functionalMedicineBody),
    icon: Stethoscope,
    featuredImage: "/images/blog/functional-medicine/functional-medicine-hero.jpg",
    featuredImageAlt:
      "A clinician in a white coat listening attentively to an adult patient during a consultation in a bright clinical office",
    metaTitle: "What Is Functional Medicine? A Patient-Friendly Guide",
    metaDescription:
      "Learn how functional medicine approaches health, what to expect during an appointment, what the research says, and how to evaluate a qualified provider.",
    heroIntro:
      "If you've been managing ongoing symptoms, or feel your health concerns are being treated one at a time, you may have heard about functional medicine. This approach looks beyond isolated symptoms to explore how lifestyle, environment, medical history, and body systems may be connected. It's not a replacement for conventional care, but an additional framework some patients choose to explore.",
    heroCtas: [
      { label: "Explore More Articles", href: "/blog" },
      { label: "Mari Media Events", href: "/#contact" },
    ],
    body: functionalMedicineBody,
    references: [
      {
        source: "Cleveland Clinic Newsroom",
        title:
          "Cleveland Clinic Study Finds Functional Medicine Model Is Associated With Improvements in Health-Related Quality of Life",
        url: "https://newsroom.clevelandclinic.org/2019/10/25/cleveland-clinic-study-finds-functional-medicine-model-is-associated-with-improvements-in-health-related-quality-of-life",
      },
      {
        source: "JAMA Network Open",
        title:
          "Association of the Functional Medicine Model of Care With Patient-Reported Health-Related Quality-of-Life Outcomes",
        url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2753520",
      },
      {
        source: "PubMed",
        title:
          "Association of the Functional Medicine Model of Care With Patient-Reported Health-Related Quality-of-Life Outcomes",
        url: "https://pubmed.ncbi.nlm.nih.gov/31651966/",
      },
      {
        source: "Institute for Functional Medicine",
        title: "What Is Functional Medicine?",
        url: "https://www.ifm.org/functional-medicine",
      },
      {
        source: "American Board of Medical Specialties",
        title: "Certification Matters",
        url: "https://www.certificationmatters.org/",
      },
      {
        source: "Mayo Clinic",
        title: "Integrative Medicine and Health",
        url: "https://www.mayoclinic.org/departments-centers/integrative-medicine-health/sections/overview/ovc-20464567",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function formatBlogDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
