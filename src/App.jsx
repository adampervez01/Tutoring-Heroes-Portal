import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const brand = {
  teal: "#4B9A98",
  tealDark: "#2F7F7C",
  gold: "#D9AE2B",
  goldLight: "#F3D481",
  cream: "#FAF8F1",
  mint: "#EAF6F4",
};

const todayLessons = [
  {
    student: "Joe",
    time: "4:15–5:15pm",
    subject: "GCSE Maths",
    focus: "Algebra confidence + exam-style questions",
  },
  {
    student: "Diodor",
    time: "5:30–6:30pm",
    subject: "Year 6 SATs Maths",
    focus: "Reasoning Paper 2 review",
  },
  {
    student: "Remi",
    time: "7:00–8:00pm",
    subject: "GCSE English Literature",
    focus: "Jekyll & Hyde PRTEZEL paragraph practice",
  },
];

const feedbackItems = [
  {
    student: "Joe",
    due: "Due in 6 days",
    status: "green",
    detail: "Recent lessons logged. Next form due soon.",
  },
  {
    student: "Diodor",
    due: "Due in 2 days",
    status: "amber",
    detail: "Add SATs reasoning progress and next steps.",
  },
  {
    student: "Remi",
    due: "Due today",
    status: "red",
    detail: "Submit English Literature progress update.",
  },
  {
    student: "Seb",
    due: "Up to date",
    status: "green",
    detail: "Functional Skills exam preparation noted.",
  },
];

const quickLinks = [
  { label: "Feedback Google Form", icon: "📝" },
  { label: "Timesheet", icon: "📅" },
  { label: "Tutor Handbook", icon: "📘" },
  { label: "GroupWorld Whiteboard Tips", icon: "💻" },
  { label: "Teaching Resources Drive", icon: "🗂️" },
  { label: "Contact Alan / Support", icon: "✉️" },
];

const students = [
  {
    name: "Joe",
    initials: "JD",
    subject: "Maths",
    level: "GCSE",
    nextFocus: "Building algebra fluency and exam confidence",
    badge: "Confidence boost",
  },
  {
    name: "Diodor",
    initials: "DD",
    subject: "Maths",
    level: "Year 6 SATs",
    nextFocus: "Reasoning papers, accuracy, and timed confidence",
    badge: "SATs focus",
  },
  {
    name: "Remi",
    initials: "RS",
    subject: "English Literature",
    level: "GCSE AQA",
    nextFocus: "PRTEZEL paragraphs and quote analysis",
    badge: "Essay skills",
  },
  {
    name: "Seb",
    initials: "SB",
    subject: "Maths",
    level: "Functional Skills Level 1",
    nextFocus: "Final exam preparation and weak-topic repair",
    badge: "Exam ready",
  },
];

const resources = {
  Maths: ["White Rose Maths", "Corbettmaths", "Maths Genie", "SATs arithmetic practice"],
  English: ["AQA English Literature", "Language Paper 1", "SPaG support", "Creative writing prompts"],
  Science: ["BBC Bitesize", "Physics & Maths Tutor", "AQA Biology", "Required practicals"],
  SATs: ["Past SATs papers", "Arithmetic speed drills", "Reasoning question bank", "Mark schemes"],
  GCSE: ["Exam board checklists", "Past papers", "Topic RAG sheets", "Revision planning"],
  "Functional Skills": ["Edexcel Level 1", "Problem-solving questions", "Calculator skills", "Exam technique"],
};

const handbookCards = [
  {
    title: "Parent feedback",
    text: "Complete short, specific feedback notes every 3 weeks so families stay informed and supported.",
    icon: "🤝",
  },
  {
    title: "Cancellations & illness",
    text: "Notify families promptly and offer suitable reschedule options where needed.",
    icon: "⏰",
  },
  {
    title: "Great tutoring habits",
    text: "Build confidence, use positive language, adapt your teaching, and stay professional.",
    icon: "⭐",
  },
  {
    title: "Technology tips",
    text: "Keep whiteboard links accessible and help families troubleshoot calmly.",
    icon: "💡",
  },
];

function StatusPill({ status }) {
  const styles = {
    green: "border-[#4B9A98]/25 bg-[#EAF6F4] text-[#2F7F7C]",
    amber: "border-[#D9AE2B]/35 bg-[#F8E9B6] text-[#9A7507]",
    red: "border-red-200 bg-red-50 text-red-600",
  };
  const labels = { green: "On track", amber: "Due soon", red: "Due now" };

  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-extrabold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function IconBadge({ icon, tone = "teal" }) {
  const toneClasses =
    tone === "gold"
      ? "bg-[#F8E9B6] text-[#9A7507]"
      : "bg-[#EAF6F4] text-[#2F7F7C]";

  return (
    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl text-xl ${toneClasses}`}>
      {icon}
    </span>
  );
}

function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="mb-5 flex items-start gap-3">
      <IconBadge icon={icon} />
      <div>
        <h2 className="text-xl font-black text-[#2F7F7C]">{title}</h2>
        {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
      </div>
    </div>
  );
}

function GoldButton({ children, small = false }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[#F3D481] font-black text-[#2F7F7C] shadow-md shadow-[#D9AE2B]/20 transition hover:-translate-y-0.5 hover:bg-[#E9C65D] ${
        small ? "px-4 py-2 text-sm" : "px-6 py-3 text-base"
      }`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </button>
  );
}

function TealButton({ children, small = false }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4B9A98] font-black text-white shadow-md shadow-[#4B9A98]/20 transition hover:-translate-y-0.5 hover:bg-[#2F7F7C] ${
        small ? "px-4 py-2 text-sm" : "px-6 py-3 text-base"
      }`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </button>
  );
}

export default function TutoringHeroesBrandedPortal() {
  const [activeResource, setActiveResource] = useState("Maths");
  const urgentCount = useMemo(
    () => feedbackItems.filter((item) => item.status === "red" || item.status === "amber").length,
    []
  );

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-slate-800">
      <header className="sticky top-0 z-30 border-b border-[#EAF6F4] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF6F4] shadow-sm">
              <span className="absolute h-10 w-10 rotate-12 rounded-xl border-2 border-[#D9AE2B]/60" />
              <span className="relative text-2xl">🦸</span>
            </div>
            <div className="text-2xl font-black tracking-tight md:text-3xl">
              <span className="text-[#4B9A98]">Tutoring</span>{" "}
              <span className="text-[#D9AE2B]">Heroes</span>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {['Dashboard', 'Students', 'Resources', 'Handbook'].map((item, index) => (
              <button
                key={item}
                className={`rounded-2xl px-4 py-2 text-sm font-extrabold transition ${
                  index === 0
                    ? "bg-[#4B9A98] text-white shadow-md shadow-[#4B9A98]/20"
                    : "text-slate-600 hover:bg-[#EAF6F4] hover:text-[#2F7F7C]"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden text-right md:block">
              <p className="font-black text-slate-900">Adam</p>
              <p className="text-xs font-semibold text-slate-500">Tutor</p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4B9A98] font-black text-white">AG</div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 md:py-10">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 rounded-[2rem] bg-white p-5 shadow-xl shadow-[#4B9A98]/10"
        >
          <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr_0.7fr] md:items-stretch">
            <div className="rounded-[1.7rem] bg-[#EAF6F4] p-7">
              <p className="text-2xl font-black text-[#4B9A98]">Welcome back,</p>
              <h1 className="mt-1 text-5xl font-black leading-none text-[#4B9A98]">Adam!</h1>
              <p className="mt-5 max-w-sm text-base leading-7 text-slate-700">
                You're making a real difference every day. Everything tutors need, all in one organised place. ✨
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <GoldButton>Submit feedback</GoldButton>
                <TealButton>Today's board</TealButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-[#4B9A98] to-[#2F7F7C] p-8 text-white">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#F3D481]">Tutor Portal</p>
              <h2 className="mt-4 text-4xl font-black leading-tight">
                Get organised. Support students. Build confidence.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/85">
                Track lessons, whiteboards, feedback deadlines, resources and admin reminders with the same warm, confidence-building spirit as Tutoring Heroes.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/12 p-4 text-center">
                  <p className="text-3xl font-black text-[#F3D481]">3</p>
                  <p className="text-xs font-semibold">Lessons today</p>
                </div>
                <div className="rounded-2xl bg-white/12 p-4 text-center">
                  <p className="text-3xl font-black text-[#F3D481]">2</p>
                  <p className="text-xs font-semibold">Feedback due</p>
                </div>
                <div className="rounded-2xl bg-white/12 p-4 text-center">
                  <p className="text-3xl font-black text-[#F3D481]">6</p>
                  <p className="text-xs font-semibold">Quick links</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.7rem] bg-white p-6 shadow-inner shadow-[#4B9A98]/5 ring-1 ring-[#EAF6F4]">
              <h3 className="text-lg font-black text-[#2F7F7C]">At a glance</h3>
              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-3"><IconBadge icon="📅" /><div><p className="font-black">3</p><p className="text-sm text-slate-600">Lessons today</p></div></div>
                <div className="flex items-center gap-3"><IconBadge icon="📝" tone="gold" /><div><p className="font-black">{urgentCount}</p><p className="text-sm text-slate-600">Feedback actions</p></div></div>
                <div className="flex items-center gap-3"><IconBadge icon="✅" /><div><p className="font-black text-[#2F7F7C]">All clear</p><p className="text-sm text-slate-600">Timesheet this week</p></div></div>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.85fr]">
          <section className="rounded-[2rem] bg-white p-6 shadow-lg shadow-[#4B9A98]/10 ring-1 ring-[#EAF6F4]">
            <SectionTitle icon="📅" title="Today's Lessons" subtitle="Lesson times, focus areas and whiteboard access." />
            <div className="space-y-4">
              {todayLessons.map((lesson, index) => (
                <div key={lesson.student} className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-start gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full font-black text-white ${index === 1 ? "bg-[#D9AE2B]" : "bg-[#4B9A98]"}`}>{lesson.student.slice(0,2).toUpperCase()}</div>
                    <div>
                      <h3 className="font-black text-slate-900">{lesson.student}</h3>
                      <p className="text-sm text-slate-600">{lesson.time}</p>
                      <p className="text-sm font-bold text-[#2F7F7C]">{lesson.subject}</p>
                    </div>
                  </div>
                  <GoldButton small>Whiteboard</GoldButton>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] bg-white p-6 shadow-lg shadow-[#4B9A98]/10 ring-1 ring-[#EAF6F4]">
            <SectionTitle icon="📝" title="Parent Feedback Tracker" subtitle="Green, amber and red due-date status." />
            <div className="space-y-4">
              {feedbackItems.map((item) => (
                <div key={item.student} className="rounded-3xl border border-slate-100 bg-[#FAF8F1] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-black text-slate-900">{item.student}</h3>
                      <p className="text-sm text-slate-600">{item.due}</p>
                    </div>
                    <StatusPill status={item.status} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-5"><GoldButton>Submit Feedback Form</GoldButton></div>
          </section>

          <section className="rounded-[2rem] bg-white p-6 shadow-lg shadow-[#4B9A98]/10 ring-1 ring-[#EAF6F4]">
            <SectionTitle icon="🔗" title="Quick Links" subtitle="Core tutor resources in one place." />
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <button key={link.label} className="rounded-3xl border border-slate-100 bg-[#FAF8F1] p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <IconBadge icon={link.icon} tone={index % 2 ? "gold" : "teal"} />
                  <p className="mt-3 text-xs font-black leading-5 text-slate-800">{link.label}</p>
                </button>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-[2rem] bg-white p-6 shadow-lg shadow-[#4B9A98]/10 ring-1 ring-[#EAF6F4]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <SectionTitle icon="👥" title="My Students" subtitle="Clear snapshots for lesson planning." />
            <button className="hidden text-sm font-black text-[#D9AE2B] md:block">View all students</button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {students.map((student, index) => (
              <div key={student.name} className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full font-black text-white ${index % 2 ? "bg-[#D9AE2B]" : "bg-[#4B9A98]"}`}>{student.initials}</div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{student.name}</h3>
                    <p className="text-sm font-bold text-[#2F7F7C]">{student.level}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm"><strong>Subject:</strong> {student.subject}</p>
                <p className="mt-2 min-h-[60px] text-sm leading-6"><strong>Next focus:</strong> {student.nextFocus}</p>
                <p className="mt-3 inline-flex rounded-full bg-[#F8E9B6] px-3 py-1 text-xs font-black text-[#9A7507]">{student.badge}</p>
                <div className="mt-4"><TealButton small>Open Whiteboard</TealButton></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-[#4B9A98]/10 ring-1 ring-[#EAF6F4]">
            <SectionTitle icon="🗂️" title="Resource Library" subtitle="Tabs for core subjects and exam pathways." />
            <div className="mb-5 flex flex-wrap gap-2">
              {Object.keys(resources).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveResource(category)}
                  className={`rounded-2xl px-4 py-2 text-sm font-black transition ${
                    activeResource === category
                      ? "bg-[#4B9A98] text-white"
                      : "bg-[#EAF6F4] text-[#2F7F7C] hover:bg-[#F8E9B6] hover:text-[#9A7507]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {resources[activeResource].map((resource) => (
                <button key={resource} className="flex w-full items-center justify-between rounded-2xl bg-[#FAF8F1] px-4 py-3 text-left text-sm font-semibold transition hover:bg-[#EAF6F4]">
                  <span>📄 {resource}</span>
                  <span className="font-black text-[#4B9A98]">View</span>
                </button>
              ))}
            </div>
            <div className="mt-5"><GoldButton>Browse all resources</GoldButton></div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-[#4B9A98]/10 ring-1 ring-[#EAF6F4]">
            <SectionTitle icon="📘" title="Tutor Handbook & Guides" subtitle="Everything tutors need to stay consistent and supported." />
            <div className="grid gap-4 sm:grid-cols-2">
              {handbookCards.map((card, index) => (
                <div key={card.title} className="rounded-3xl border border-slate-100 bg-[#FAF8F1] p-5">
                  <IconBadge icon={card.icon} tone={index % 2 ? "gold" : "teal"} />
                  <h3 className="mt-4 font-black text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-5"><GoldButton>View all handbook resources</GoldButton></div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-[#4B9A98]/10 ring-1 ring-[#EAF6F4]">
            <SectionTitle icon="🔔" title="Admin Reminders" subtitle="Simple prompts to keep tutor admin manageable." />
            <div className="space-y-4">
              {[
                ["Timesheet due", "Don't forget to submit your timesheet by the 3rd."],
                ["Feedback forms", "You have 2 feedback actions due this week."],
                ["Next tutor meeting", "Friday 16th May at 4:00pm online."],
              ].map(([title, text], index) => (
                <div key={title} className="flex items-center justify-between gap-4 rounded-3xl bg-[#FAF8F1] p-4">
                  <div className="flex items-center gap-3">
                    <IconBadge icon={index === 0 ? "🕒" : index === 1 ? "📝" : "📅"} />
                    <div>
                      <h3 className="font-black text-slate-900">{title}</h3>
                      <p className="text-sm text-slate-600">{text}</p>
                    </div>
                  </div>
                  <GoldButton small>Open</GoldButton>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#EAF6F4] p-8 shadow-lg shadow-[#4B9A98]/10 ring-1 ring-[#EAF6F4]">
            <div className="text-5xl">🏆</div>
            <h2 className="mt-5 text-3xl font-black text-[#2F7F7C]">Thank you for your amazing work!</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Your support helps students grow in confidence, build self-belief and achieve real results.
            </p>
            <div className="mt-6"><GoldButton>Keep making a difference</GoldButton></div>
          </div>
        </section>
      </main>

      <footer className="mt-10 bg-[#4B9A98] px-5 py-7 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-2xl font-black">
            <span>Tutoring</span> <span className="text-[#F3D481]">Heroes</span>
          </div>
          <p className="text-sm font-semibold text-white/85">Helping students succeed with confidence 💛</p>
          <p className="text-sm font-semibold text-white/85">© Tutoring Heroes Tutor Portal Prototype</p>
        </div>
      </footer>
    </div>
  );
}
