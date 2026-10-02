import { useState, type ReactNode } from "react";

type IconName =
  | "home"
  | "learn"
  | "practice"
  | "tutor"
  | "progress"
  | "bell"
  | "arrow"
  | "spark"
  | "clock"
  | "target"
  | "check"
  | "flame"
  | "mic"
  | "book"
  | "headphones"
  | "pen"
  | "volume"
  | "briefcase"
  | "chevron"
  | "send"
  | "trend"
  | "lock"
  | "search"
  | "info"
  | "globe"
  | "settings"
  | "moon";

const iconPaths: Record<IconName, ReactNode> = {
  home: <><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v10h13V10M9 20v-6h6v6" /></>,
  learn: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H20v16H7.5A3.5 3.5 0 0 0 4 21.5z" /><path d="M4 5.5v16M8 7h8M8 11h6" /></>,
  practice: <><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="8.5" /></>,
  tutor: <><path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" /><path d="M8 11h.01M12 11h.01M16 11h.01" /></>,
  progress: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" /></>,
  arrow: <><path d="m5 12 14 0M14 7l5 5-5 5" /></>,
  spark: <><path d="m12 2 1.5 5.2L19 9l-5.5 1.8L12 16l-1.5-5.2L5 9l5.5-1.8L12 2Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="m15 9 6-6M17 3h4v4" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  flame: <path d="M13 22c4-1 7-4.5 7-9 0-3-1.5-6-4-8 .1 3-1.3 4.5-2.7 3.5C11.4 7.2 13 4 9 2c.4 4-5 6.3-5 12 0 4 3.2 7 6.5 8-2-2.5-.7-5.5 1.2-7 .2 2 1.7 2.6 2.3 1.3.8 2.1.5 4-1 5.7Z" />,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" /></>,
  book: <><path d="M4 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4z" /><path d="M20 4h-4a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h4z" /></>,
  headphones: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14h3v6H5a1 1 0 0 1-1-1v-5ZM20 14h-3v6h2a1 1 0 0 0 1-1v-5Z" /></>,
  pen: <><path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z" /><path d="m14 7 3 3" /></>,
  volume: <><path d="M5 10v4h3l4 4V6L8 10H5Z" /><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></>,
  chevron: <path d="m9 18 6-6-6-6" />,
  send: <><path d="m3 3 18 9-18 9 4-9-4-9Z" /><path d="M7 12h14" /></>,
  trend: <><path d="m4 16 5-5 4 4 7-8" /><path d="M15 7h5v5" /></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19 15.5 21 17l-4 4-1.5-2a8 8 0 0 1-2 .8L13 22H8l-.5-2.2a8 8 0 0 1-2-.8L4 21l-3-4 2-1.5a8 8 0 0 1-.8-2L0 13V8l2.2-.5a8 8 0 0 1 .8-2L1 4l3-3 1.5 2a8 8 0 0 1 2-.8L8 0h5l.5 2.2a8 8 0 0 1 2 .8L17 1l4 3-2 1.5a8 8 0 0 1 .8 2L22 8v5l-2.2.5a8 8 0 0 1-.8 2Z" /></>,
  moon: <path d="M20 15.2A8.7 8.7 0 0 1 8.8 4a8.7 8.7 0 1 0 11.2 11.2Z" />,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      {iconPaths[name]}
    </svg>
  );
}

function Title({ children, as = "page" }: { children: ReactNode; as?: "page" | "section" | "card" }) {
  return <div className={`title title-${as}`} role="heading">{children}</div>;
}

function Button({
  children,
  kind = "primary",
  onClick,
  icon,
}: {
  children: ReactNode;
  kind?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  icon?: IconName;
}) {
  return (
    <button className={`button button-${kind}`} onClick={onClick} type="button">
      {children}
      {icon && <Icon name={icon} size={18} />}
    </button>
  );
}

function Orb({ small = false }: { small?: boolean }) {
  return (
    <div className={`orb ${small ? "orb-small" : ""}`} aria-label="AI tutor">
      <span className="orb-core" />
      <span className="orb-ring" />
      <span className="orb-particle" />
    </div>
  );
}

function Header({ onProfile }: { onProfile: () => void }) {
  return (
    <header className="topbar">
      <div className="greeting">
        <div className="eyebrow">Good evening</div>
        <Title>Maya</Title>
      </div>
      <div className="header-actions">
        <button aria-label="Notifications" className="icon-button" type="button">
          <Icon name="bell" />
          <span className="notification-dot" />
        </button>
        <button aria-label="Open profile" className="avatar" onClick={onProfile} type="button">ML</button>
      </div>
    </header>
  );
}

function ProgressBar({ value, tone = "indigo" }: { value: number; tone?: "indigo" | "teal" | "coral" }) {
  return (
    <div className="progress-track" aria-label={`${value}% complete`}>
      <div className={`progress-fill progress-${tone}`} style={{ width: `${value}%` }} />
    </div>
  );
}

function Home({ onStart, onProfile, onAsk }: { onStart: () => void; onProfile: () => void; onAsk: () => void }) {
  const [showWhy, setShowWhy] = useState(false);
  const skills = [
    { label: "Speaking", value: 72, delta: "+8%", tone: "indigo" as const },
    { label: "Grammar", value: 64, delta: "+4%", tone: "teal" as const },
    { label: "Vocabulary", value: 78, delta: "+11%", tone: "coral" as const },
  ];
  return (
    <main className="screen home-screen">
      <Header onProfile={onProfile} />
      <div className="intro-copy">
        <span className="eyebrow">YOUR DAILY PRACTICE</span>
        <Title>Your next 10 minutes</Title>
        <p>Let’s work on speaking naturally in workplace conversations.</p>
      </div>

      <section className="hero-card">
        <div className="hero-topline">
          <div className="ai-label"><Icon name="spark" size={16} /> For you</div>
          <span className="badge badge-light">B1</span>
        </div>
        <div className="session-time">8 <span>min</span></div>
        <Title as="section">Speak with confidence</Title>
        <p className="hero-subtitle">Practice asking natural follow-up questions in a workplace conversation.</p>
        <div className="hero-meta">
          <span><Icon name="target" size={16} /> Conversation · B1</span>
        </div>
        <div className="hero-actions">
          <Button onClick={onStart} icon="arrow">Start</Button>
          <Button kind="ghost">Customize</Button>
        </div>
        <div className="hero-orb"><Orb /></div>
      </section>
      <button className="why-recommendation" onClick={() => setShowWhy(true)} type="button">
        <Icon name="info" size={15} />
        <span><strong>Why this?</strong> Grammar is becoming automatic. Now we’re building spontaneous speech.</span>
        <Icon name="chevron" size={15} />
      </button>

      <section className="ask-tutor">
        <div>
          <span className="eyebrow">ASK YOUR TUTOR</span>
          <Title as="section">What do you want to practice?</Title>
        </div>
        <button aria-label="Ask your tutor" className="ask-field" onClick={onAsk} type="button">
          <Icon name="search" size={19} />
          <span>Prepare me for a meeting…</span>
          <i><Icon name="mic" size={18} /></i>
        </button>
        <div className="prompt-row">
          <button onClick={onAsk} type="button">Explain present perfect</button>
          <button onClick={onAsk} type="button">Practice interviews</button>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <Title as="section">Your skills</Title>
          <button className="text-action" type="button">See details</button>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.label}>
              <div className="skill-top"><span>{skill.label}</span><strong>{skill.value}%</strong></div>
              <ProgressBar value={skill.value} tone={skill.tone} />
              <div className="trend-positive"><Icon name="trend" size={14} /> {skill.delta} this week</div>
            </article>
          ))}
        </div>
      </section>

      <section className="streak-goal-grid">
        <article className="card streak-card">
          <div className="card-icon amber"><Icon name="flame" /></div>
          <div>
            <Title as="card">12 day streak</Title>
            <p>One more day to beat your best</p>
          </div>
          <div className="week">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
              <div key={`${day}-${index}`}>
                <span>{day}</span>
                <i className={index < 5 ? "day done" : "day"}>{index < 5 ? <Icon name="check" size={12} /> : index + 1}</i>
              </div>
            ))}
          </div>
        </article>
        <article className="card goal-card">
          <div className="goal-heading"><div className="card-icon blue"><Icon name="target" /></div><span>Current goal</span></div>
          <Title as="card">Speak confidently in meetings</Title>
          <div className="goal-progress"><span>Progress</span><strong>64%</strong></div>
          <ProgressBar value={64} />
          <p><strong>Next:</strong> Answer follow-up questions naturally</p>
        </article>
      </section>

      <section className="insight-card">
        <div className="insight-orb"><Orb small /></div>
        <div>
          <div className="ai-label"><Icon name="spark" size={15} /> Something we noticed</div>
          <Title as="card">Conversation helps new words stick</Title>
          <p>You remember new words better when you use them aloud. I added more speaking examples to your next session.</p>
          <button className="text-action light-action" type="button">See examples <Icon name="chevron" size={15} /></button>
        </div>
      </section>

      <section className="section bottom-section">
        <div className="section-heading">
          <Title as="section">Patterns to improve</Title>
          <span className="badge">3 this week</span>
        </div>
        <article className="card corrections">
          <Correction wrong="interested on" right="interested in" label="Prepositions" />
          <Correction wrong="I joined company" right="I joined a company" label="Articles" />
          <Correction wrong="discuss about" right="discuss" label="Word choice" />
          <Button kind="secondary">Practice these</Button>
        </article>
      </section>
      {showWhy && (
        <div className="sheet-layer" role="presentation" onClick={() => setShowWhy(false)}>
          <section aria-modal="true" className="bottom-sheet" onClick={(event) => event.stopPropagation()} role="dialog">
            <div className="sheet-handle" />
            <div className="sheet-orb"><Orb small /></div>
            <span className="eyebrow">YOUR RECOMMENDATION</span>
            <Title>Why workplace speaking?</Title>
            <p>Your practice is shaping what comes next. Here’s what your tutor considered:</p>
            <div className="reason-list">
              <div><Icon name="target" size={17} /><span><strong>Your goal</strong>Speak confidently at work</span></div>
              <div><Icon name="trend" size={17} /><span><strong>Your progress</strong>Grammar improved more than speaking this week</span></div>
              <div><Icon name="clock" size={17} /><span><strong>Your time</strong>A focused session fits your next 10 minutes</span></div>
            </div>
            <Button onClick={() => setShowWhy(false)}>Keep recommendation</Button>
            <Button kind="ghost" onClick={() => setShowWhy(false)}>Adjust it</Button>
          </section>
        </div>
      )}
    </main>
  );
}

function Correction({ wrong, right, label }: { wrong: string; right: string; label: string }) {
  return (
    <div className="correction-row">
      <div className="correction-status"><Icon name="arrow" size={16} /></div>
      <div><span className="micro-label">{label}</span><p><del>{wrong}</del><Icon name="arrow" size={14} /><strong>{right}</strong></p></div>
    </div>
  );
}

function Learn() {
  const lessons = [
    ["Talking about past experiences", "complete"],
    ["Making suggestions", "complete"],
    ["Handling disagreements", "active"],
    ["Storytelling with impact", "future"],
    ["Workplace presentations", "future"],
  ];
  return (
    <main className="screen">
      <PageTop eyebrow="A path built around your goals" title="Learn English" />
      <article className="level-card">
        <div><span className="eyebrow">Current level</span><Title as="section">B1 Intermediate</Title><p>You’re making steady progress toward B2.</p></div>
        <div className="level-ring"><strong>71%</strong><span>mastery</span></div>
      </article>
      <section className="section">
        <Title as="section">Your learning path</Title>
        <div className="lesson-path">
          {lessons.map(([lesson, state], index) => (
            <div className={`path-item path-${state}`} key={lesson}>
              <div className="path-marker">{state === "complete" ? <Icon name="check" size={16} /> : index + 1}</div>
              <div className="path-content">
                <span>{state === "active" ? "Up next" : state === "complete" ? "Completed" : "Coming soon"}</span>
                <Title as="card">{lesson}</Title>
                {state === "active" && (
                  <div className="active-lesson">
                    <p>You understand the grammar, but sometimes hesitate when responding.</p>
                    <div className="tag-row"><span>12 min</span><span>Speaking</span><span>Pragmatics</span></div>
                    <Button icon="arrow">Continue lesson</Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section bottom-section">
        <Title as="section">Recommended for you</Title>
        <div className="module-list">
          <Module icon="book" title="Grammar boost" meta="7 min · B1" reason="You missed this pattern 3 times" />
          <Module icon="mic" title="Conversation challenge" meta="10 min · B1" reason="Build more spontaneous answers" />
          <Module icon="headphones" title="Listening sprint" meta="8 min · B1" reason="Strengthen fast workplace speech" />
        </div>
      </section>
    </main>
  );
}

function Module({ icon, title, meta, reason }: { icon: IconName; title: string; meta: string; reason: string }) {
  return (
    <article className="module-card">
      <div className="module-icon"><Icon name={icon} /></div>
      <div className="module-copy"><Title as="card">{title}</Title><span>{meta}</span><p><Icon name="spark" size={13} /> {reason}</p></div>
      <Icon name="chevron" />
    </article>
  );
}

function Practice({ onGrammar, onRoleplay, onVocabulary }: { onGrammar: () => void; onRoleplay: () => void; onVocabulary: () => void }) {
  const modes: Array<[IconName, string, string, number]> = [
    ["book", "Grammar", "8 min", 64],
    ["mic", "Speaking", "10 min", 72],
    ["headphones", "Listening", "8 min", 69],
    ["pen", "Writing", "12 min", 61],
    ["volume", "Pronunciation", "6 min", 74],
    ["briefcase", "Roleplay", "15 min", 68],
  ];
  return (
    <main className="screen">
      <PageTop eyebrow="Strengthen what you almost know" title="Practice" />
      <article className="smart-practice">
        <div className="smart-orb"><Orb /></div>
        <div className="ai-label"><Icon name="spark" size={15} /> Selected for Maya</div>
        <Title as="section">Smart practice</Title>
        <p>12 questions from recent mistakes, weak skills, and reviews due today.</p>
        <div className="smart-tags"><span>Articles</span><span>Present perfect</span><span>Speaking</span></div>
        <Button icon="arrow">Start 10-minute practice</Button>
      </article>
      <section className="section">
        <Title as="section">Choose a skill</Title>
        <div className="practice-grid">
          {modes.map(([icon, title, time, value]) => (
            <button className="practice-card" key={title} onClick={title === "Grammar" ? onGrammar : title === "Vocabulary" ? onVocabulary : title === "Roleplay" ? onRoleplay : undefined} type="button">
              <div className="practice-icon"><Icon name={icon} /></div>
              <Title as="card">{title}</Title>
              <span>{time} · B1</span>
              <div className="practice-mastery"><ProgressBar value={value as number} /><small>{value}%</small></div>
            </button>
          ))}
        </div>
      </section>
      <section className="section bottom-section">
        <Title as="section">Real-world roleplays</Title>
        <button className="roleplay-card" onClick={onRoleplay} type="button">
          <div className="roleplay-visual"><Icon name="briefcase" size={30} /></div>
          <div><span className="micro-label">RECOMMENDED</span><Title as="card">Job interview</Title><p>Practice clarity, confidence, and follow-up questions.</p><div className="tag-row"><span>B1–B2</span><span>15 min</span></div></div>
          <Icon name="chevron" />
        </button>
      </section>
    </main>
  );
}

function Roleplay({ onBack }: { onBack: () => void }) {
  const [stage, setStage] = useState<"setup" | "active" | "review">("setup");
  if (stage === "active") {
    return (
      <main className="screen roleplay-active">
        <div className="focus-top">
          <button aria-label="Leave roleplay" className="back-button" onClick={() => setStage("setup")} type="button">×</button>
          <div><span className="eyebrow">INTERVIEW PRACTICE</span><Title as="card">Hiring Manager</Title></div>
          <span className="live-status"><i /> Live</span>
        </div>
        <section className="roleplay-stage">
          <div className="interviewer-avatar"><Icon name="briefcase" size={25} /></div>
          <span className="eyebrow">HIRING MANAGER</span>
          <p>“Tell me about a project where you had to manage competing priorities.”</p>
          <button type="button"><Icon name="volume" size={16} /> Hear again</button>
        </section>
        <section className="roleplay-response">
          <span className="eyebrow">YOUR RESPONSE</span>
          <p>“In my last role, I was responsible for two client projects with the same deadline…”</p>
          <div className="response-wave">{Array.from({ length: 12 }).map((_, i) => <i key={i} />)}</div>
        </section>
        <div className="roleplay-tools">
          {["Hint", "Slow down", "Translate", "Correct me"].map((tool, index) => <button key={tool} type="button"><Icon name={index === 0 ? "spark" : index === 1 ? "volume" : index === 2 ? "globe" : "pen"} size={17} />{tool}</button>)}
        </div>
        <div className="roleplay-bottom"><Button onClick={() => setStage("review")} icon="arrow">Finish answer</Button></div>
      </main>
    );
  }
  if (stage === "review") {
    return (
      <main className="screen roleplay-review">
        <div className="completion-mark"><Orb /><span><Icon name="check" /></span></div>
        <span className="eyebrow">ROLEPLAY COMPLETE</span>
        <Title>Interview complete</Title>
        <p>You communicated clearly and kept the conversation moving.</p>
        <section className="review-story">
          <div><span className="review-symbol success"><Icon name="check" size={16} /></span><span><small>WHAT WENT WELL</small><strong>Clear answers and confident vocabulary</strong><p>You used “prioritize” and “stakeholder” naturally.</p></span></div>
          <div><span className="review-symbol focus"><Icon name="spark" size={16} /></span><span><small>NEXT OPPORTUNITY</small><strong>Make your examples more specific</strong><p>Add one result or number to make your impact memorable.</p></span></div>
        </section>
        <div className="next-coaching"><span>Try this next</span><strong>Answer with the STAR structure</strong><Icon name="chevron" size={17} /></div>
        <div className="review-actions"><Button onClick={() => setStage("active")}>Practice again</Button><Button kind="secondary" onClick={onBack}>Continue learning</Button></div>
      </main>
    );
  }
  return (
    <main className="screen roleplay-setup">
      <div className="focus-top">
        <button aria-label="Back to practice" className="back-button" onClick={onBack} type="button">←</button>
        <span className="eyebrow">REAL-WORLD PRACTICE</span>
        <button aria-label="Roleplay options" className="icon-button" type="button">•••</button>
      </div>
      <section className="scenario-visual">
        <div className="scene-window"><span /><span /><span /></div>
        <div className="scene-person"><Icon name="briefcase" size={31} /></div>
        <Orb small />
      </section>
      <section className="scenario-copy">
        <span className="eyebrow">JOB INTERVIEW</span>
        <Title>Meet your hiring manager</Title>
        <p>You’re interviewing for a project coordinator role. Practice concise answers with clear examples.</p>
      </section>
      <div className="scenario-meta">
        <div><Icon name="clock" /><span><small>TIME</small>15 minutes</span></div>
        <div><Icon name="progress" /><span><small>LEVEL</small>B1–B2</span></div>
      </div>
      <section className="scenario-focus">
        <span className="eyebrow">WE’LL FOCUS ON</span>
        <div><span>Confidence</span><span>Follow-up questions</span><span>Clear answers</span></div>
      </section>
      <div className="roleplay-bottom"><Button onClick={() => setStage("active")} icon="arrow">Enter interview</Button><p>Your tutor will guide you if you get stuck.</p></div>
    </main>
  );
}

function Vocabulary({ onBack }: { onBack: () => void }) {
  const [revealed, setRevealed] = useState(false);
  const [rated, setRated] = useState<string | null>(null);
  return (
    <main className="screen vocabulary-screen">
      <div className="focus-top">
        <button aria-label="Back to practice" className="back-button" onClick={onBack} type="button">←</button>
        <div><span className="eyebrow">FOR YOUR NEXT MEETING</span><Title as="card">Word 4 of 10</Title></div>
        <button aria-label="Save word" className="icon-button" type="button"><Icon name="book" /></button>
      </div>
      <div className="focus-progress"><span /></div>
      <button className={`word-card ${revealed ? "revealed" : ""}`} onClick={() => setRevealed(true)} type="button">
        <span className="eyebrow">VERB</span>
        <strong>negotiate</strong>
        <span className="pronunciation">/nɪˈɡəʊʃieɪt/ <i><Icon name="volume" size={17} /></i></span>
        {!revealed ? <small>Tap to reveal meaning</small> : (
          <div className="word-reveal">
            <span>to discuss something in order to reach an agreement</span>
            <p>“We need to <mark>negotiate</mark> the deadline.”</p>
          </div>
        )}
      </button>
      <section className="personal-word-note">
        <Orb small />
        <div><span className="eyebrow">WHY THIS WORD?</span><p><strong>Negotiate</strong> is useful for your workplace confidence goal and appears in your next roleplay.</p></div>
      </section>
      {revealed && (
        <section className="confidence-rating">
          <span>How well did you know it?</span>
          <div>{["Difficult", "Almost", "Easy"].map((rating) => <button className={rated === rating ? "selected" : ""} key={rating} onClick={() => setRated(rating)} type="button">{rating}</button>)}</div>
          {rated && <p><Icon name="spark" size={15} /> Got it. I’ll adjust when this word returns.</p>}
        </section>
      )}
      <div className="word-actions"><Button kind="secondary" icon="mic">Say the word</Button><Button icon="arrow">Next word</Button></div>
    </main>
  );
}

function Grammar({ onBack }: { onBack: () => void }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <main className="screen focus-screen">
      <div className="focus-top">
        <button aria-label="Back to practice" className="back-button" onClick={onBack} type="button">←</button>
        <div><span className="eyebrow">Grammar analysis</span><Title as="card">Understand your correction</Title></div>
        <span className="step-count">2 of 5</span>
      </div>
      <div className="focus-progress"><span /></div>
      <section className="sentence-section">
        <span className="micro-label">YOU WROTE</span>
        <p className="sentence">“I am <button className="error-span" onClick={() => setExpanded(true)} type="button">interested on</button> learning English because I <button className="error-span" type="button">want improve</button> my communication.”</p>
      </section>
      <section className="corrected-section">
        <div className="correct-label"><span><Icon name="check" size={15} /></span> NATURAL ENGLISH</div>
        <p className="sentence">“I am <mark>interested in</mark> learning English because I <mark>want to improve</mark> my communication.”</p>
      </section>
      <section className="section">
        <Title as="section">2 things to learn</Title>
        <button className="correction-chip selected" onClick={() => setExpanded(!expanded)} type="button">
          <span><del>interested on</del><Icon name="arrow" size={15} /><strong>interested in</strong></span><Icon name="chevron" />
        </button>
        {expanded && (
          <article className="explanation-card">
            <div className="explanation-title"><span>Why?</span><span className="confidence"><Icon name="check" size={13} /> High confidence</span></div>
            <p>After <strong>interested</strong>, English normally uses the preposition <strong>in</strong>.</p>
            <div className="pattern"><span>Pattern</span><strong>interested + in + noun / -ing</strong></div>
            <div className="examples"><p>I’m interested in music.</p><p>I’m interested in learning English.</p></div>
            <div className="translation"><span>Français</span><p>Après « interested », on utilise normalement « in ».</p></div>
            <div className="explanation-actions"><Button kind="secondary">Practice this</Button><Button>Got it</Button></div>
          </article>
        )}
        <button className="correction-chip" type="button">
          <span><del>want improve</del><Icon name="arrow" size={15} /><strong>want to improve</strong></span><Icon name="chevron" />
        </button>
      </section>
    </main>
  );
}

function Tutor() {
  const [voice, setVoice] = useState<"chat" | "listening" | "feedback">("chat");
  return (
    <main className="screen tutor-screen">
      <div className="tutor-top">
        <div className="tutor-identity"><Orb small /><div><Title as="card">AI Tutor</Title><span><i /> Ready to help</span></div></div>
        <button aria-label="Start voice practice" className={`icon-button ${voice !== "chat" ? "active-voice" : ""}`} onClick={() => setVoice(voice === "chat" ? "listening" : "chat")} type="button"><Icon name="mic" /></button>
      </div>
      <div className="coach-selector"><span>Coach style</span><button type="button">Socratic <Icon name="chevron" size={14} /></button></div>
      {voice === "listening" ? (
        <section className="voice-mode">
          <span className="eyebrow">SPEAK WITH YOUR TUTOR</span>
          <Title>Listening…</Title>
          <div className="voice-control"><Orb /><div className="voice-rings" /></div>
          <div className="waveform">{Array.from({ length: 18 }).map((_, i) => <i key={i} />)}</div>
          <p>“I think working from home is…”</p>
          <Button kind="secondary" onClick={() => setVoice("feedback")}>Finish response</Button>
        </section>
      ) : voice === "feedback" ? (
        <section className="voice-feedback">
          <div className="feedback-celebration"><Orb /><span><Icon name="check" size={17} /></span></div>
          <span className="eyebrow">YOUR SPEAKING</span>
          <Title>Nice explanation, Maya.</Title>
          <p>You shared your idea clearly and gave a useful reason.</p>
          <div className="transcript-review">
            <span className="micro-label">YOU SAID</span>
            <p>“I think <mark>working home</mark> is more convenient because…”</p>
          </div>
          <div className="feedback-focus">
            <span><Icon name="spark" size={16} /> One thing to improve</span>
            <Title as="card">Say “working from home”</Title>
            <p>Use <strong>from</strong> when home is the place you work.</p>
            <button type="button"><Icon name="volume" size={17} /> Listen</button>
          </div>
          <div className="feedback-actions">
            <Button onClick={() => setVoice("listening")} icon="mic">Try again</Button>
            <Button kind="secondary" onClick={() => setVoice("chat")}>Continue</Button>
          </div>
          <button className="text-action" type="button">See full feedback <Icon name="chevron" size={15} /></button>
        </section>
      ) : (
        <>
          <div className="conversation-date">Today · Workplace English</div>
          <section className="chat-area">
            <div className="chat ai-chat">
              <Orb small />
              <div className="bubble">
                <p>You used <strong>“very good”</strong> several times today. Can you think of a stronger word?</p>
                <div className="message-actions"><button type="button"><Icon name="volume" size={15} /> Speak</button><button type="button">Translate</button></div>
              </div>
            </div>
            <div className="suggestion-chips">
              {["excellent", "effective", "impressive", "valuable"].map((word) => <button key={word} type="button">{word}</button>)}
            </div>
            <div className="chat user-chat"><div className="bubble"><p>Maybe “effective”?</p></div></div>
            <div className="chat ai-chat">
              <Orb small />
              <div className="bubble">
                <p>Good choice. <strong>“Effective”</strong> focuses on getting the result you wanted.</p>
                <p>How would you use it to describe a business presentation?</p>
              </div>
            </div>
            <div className="tutor-hint"><Icon name="spark" size={16} /><span><strong>Think about the result.</strong> Did the audience understand the message?</span></div>
          </section>
          <div className="composer">
            <button aria-label="Start voice practice" type="button" onClick={() => setVoice("listening")}><Icon name="mic" /></button>
            <div>Write your answer…</div>
            <button aria-label="Send message" className="send-button" type="button"><Icon name="send" size={18} /></button>
          </div>
        </>
      )}
    </main>
  );
}

function Progress() {
  const skills = [["Speaking", 72], ["Vocabulary", 78], ["Pronunciation", 74], ["Listening", 69], ["Grammar", 64], ["Writing", 61]];
  return (
    <main className="screen">
      <PageTop eyebrow="Your English this month" title="You’re speaking with more confidence" />
      <div className="segment-control"><button type="button">Week</button><button className="selected" type="button">Month</button><button type="button">3 months</button></div>
      <article className="progress-hero">
        <div><span className="eyebrow">ENGLISH LEVEL</span><strong>B1</strong><p>Intermediate</p></div>
        <div className="b2-progress"><span><strong>48%</strong> toward B2</span><ProgressBar value={48} /></div>
      </article>
      <section className="section">
        <Title as="section">What improved</Title>
        <div className="trend-grid">
          <article><div className="card-icon blue"><Icon name="mic" /></div><span>Speaking confidence</span><strong>+12%</strong><small>this month</small></article>
          <article><div className="card-icon teal"><Icon name="book" /></div><span>Vocabulary range</span><strong>+11%</strong><small>this month</small></article>
        </div>
      </section>
      <section className="section">
        <div className="section-heading"><Title as="section">Skill mastery</Title><span className="badge">Updated today</span></div>
        <article className="card mastery-list">
          {skills.map(([skill, value]) => <div className="mastery-row" key={skill}><span>{skill}</span><ProgressBar value={value as number} /><strong>{value}%</strong></div>)}
        </article>
      </section>
      <section className="section">
        <Title as="section">Activity</Title>
        <div className="activity-grid">
          <article><strong>9</strong><span>Lessons</span></article>
          <article><strong>84</strong><span>Minutes</span></article>
          <article><strong>42</strong><span>Conversation turns</span></article>
          <article><strong>31</strong><span>New words</span></article>
        </div>
      </section>
      <section className="next-milestone bottom-section">
        <div className="card-icon blue"><Icon name="target" /></div>
        <div><span className="micro-label">WHAT’S NEXT</span><Title as="card">Handle a 5-minute workplace conversation</Title><p>Keep practicing longer answers without pausing.</p></div>
      </section>
    </main>
  );
}

function PageTop({ title, eyebrow }: { title: string; eyebrow: string }) {
  return <header className="page-top"><div><span className="eyebrow">{eyebrow}</span><Title>{title}</Title></div><button aria-label="Notifications" className="icon-button" type="button"><Icon name="bell" /></button></header>;
}

function Profile({
  onBack,
  onLanguages,
  theme,
  onTheme,
}: {
  onBack: () => void;
  onLanguages: () => void;
  theme: "light" | "evening" | "dark";
  onTheme: (theme: "light" | "evening" | "dark") => void;
}) {
  const settings: Array<[IconName, string, string]> = [
    ["target", "Learning preferences", "12-minute sessions · Workplace English"],
    ["spark", "AI tutor", "Socratic · Encouraging corrections"],
    ["globe", "Languages", "English · Support in Français"],
    ["mic", "Voice", "Natural speed · Transcript on request"],
    ["bell", "Notifications", "Daily reminder at 7:30 PM"],
    ["lock", "Privacy & personalization", "You control what your tutor remembers"],
  ];
  return (
    <main className="screen profile-screen">
      <div className="focus-top">
        <button aria-label="Back to Home" className="back-button" onClick={onBack} type="button">←</button>
        <Title as="card">Learning profile</Title>
        <button aria-label="Profile settings" className="icon-button" type="button"><Icon name="settings" /></button>
      </div>
      <section className="profile-identity">
        <div className="profile-avatar">ML</div>
        <Title>Maya Laurent</Title>
        <p>B1 Intermediate · 12 day streak</p>
        <div className="profile-goal"><Icon name="target" size={17} /><span><small>YOUR GOAL</small>Speak confidently at work</span></div>
      </section>
      <section className="appearance-section">
        <div><span className="eyebrow">APPEARANCE</span><Title as="card">Make practice feel comfortable</Title></div>
        <div className="theme-picker">
          {(["light", "evening", "dark"] as const).map((option) => (
            <button className={theme === option ? "selected" : ""} key={option} onClick={() => onTheme(option)} type="button">
              <i className={`theme-preview preview-${option}`}><Icon name={option === "light" ? "spark" : "moon"} size={15} /></i>
              {option}
            </button>
          ))}
        </div>
      </section>
      <section className="settings-list">
        {settings.map(([icon, label, value]) => (
          <button key={label} onClick={label === "Languages" ? onLanguages : undefined} type="button">
            <span className="setting-icon"><Icon name={icon} /></span>
            <span><strong>{label}</strong><small>{value}</small></span>
            <Icon name="chevron" size={17} />
          </button>
        ))}
      </section>
      <section className="privacy-note">
        <Icon name="lock" size={17} />
        <p><strong>Why we personalize</strong>Your activity adjusts lesson difficulty, review timing, and examples. You can change this anytime.</p>
      </section>
    </main>
  );
}

function Languages({
  onBack,
  rtl,
  onRtl,
}: {
  onBack: () => void;
  rtl: boolean;
  onRtl: (rtl: boolean) => void;
}) {
  const languages = [
    ["English", "English"],
    ["Français", "French"],
    ["Español", "Spanish"],
    ["Português", "Portuguese"],
    ["Deutsch", "German"],
    ["Italiano", "Italian"],
    ["العربية", "Arabic"],
    ["中文", "Chinese"],
    ["日本語", "Japanese"],
    ["한국어", "Korean"],
  ];
  return (
    <main className="screen language-screen">
      <div className="focus-top">
        <button aria-label="Back to profile" className="back-button" onClick={onBack} type="button">←</button>
        <Title as="card">Learning languages</Title>
        <span className="header-spacer" />
      </div>
      <section className="language-summary">
        <span className="eyebrow">YOUR LANGUAGE SETUP</span>
        <div><span><small>Learning</small><strong>English</strong></span><Icon name="arrow" /><span><small>Support</small><strong>{rtl ? "العربية" : "Français"}</strong></span></div>
        <p>Explanations appear in your support language only when they’re useful.</p>
      </section>
      <section className="language-options">
        <div className="section-heading"><Title as="section">Support language</Title><span className="badge">10 languages</span></div>
        {languages.map(([native, english]) => {
          const selected = rtl ? english === "Arabic" : english === "French";
          return (
            <button className={selected ? "selected" : ""} key={english} onClick={() => english === "Arabic" ? onRtl(true) : english === "French" ? onRtl(false) : undefined} type="button">
              <span><strong lang={english === "Arabic" ? "ar" : undefined}>{native}</strong><small>{english}</small></span>
              {selected ? <i><Icon name="check" size={15} /></i> : null}
            </button>
          );
        })}
      </section>
      {rtl && (
        <section className="rtl-preview" dir="rtl" lang="ar">
          <span className="eyebrow">معاينة</span>
          <Title as="card">لنتدرّب على التحدث بثقة</Title>
          <p>ستظهر التوضيحات باللغة العربية عند الحاجة، مع الحفاظ على أمثلة اللغة الإنجليزية باتجاهها الطبيعي.</p>
          <div dir="ltr">“I’m interested in learning English.”</div>
        </section>
      )}
    </main>
  );
}

const tabs: Array<{ id: string; label: string; icon: IconName }> = [
  { id: "home", label: "Home", icon: "home" },
  { id: "learn", label: "Learn", icon: "learn" },
  { id: "practice", label: "Practice", icon: "practice" },
  { id: "tutor", label: "Tutor", icon: "tutor" },
  { id: "progress", label: "Progress", icon: "progress" },
];

export default function App() {
  const [tab, setTab] = useState("home");
  const [detail, setDetail] = useState<"grammar" | "profile" | "languages" | "roleplay" | "vocabulary" | null>(null);
  const [theme, setTheme] = useState<"light" | "evening" | "dark">("light");
  const [rtl, setRtl] = useState(false);

  const show = () => {
    if (detail === "grammar") return <Grammar onBack={() => setDetail(null)} />;
    if (detail === "profile") return <Profile onBack={() => setDetail(null)} onLanguages={() => setDetail("languages")} onTheme={setTheme} theme={theme} />;
    if (detail === "languages") return <Languages onBack={() => setDetail("profile")} onRtl={setRtl} rtl={rtl} />;
    if (detail === "roleplay") return <Roleplay onBack={() => setDetail(null)} />;
    if (detail === "vocabulary") return <Vocabulary onBack={() => setDetail(null)} />;
    if (tab === "learn") return <Learn />;
    if (tab === "practice") return <Practice onGrammar={() => setDetail("grammar")} onRoleplay={() => setDetail("roleplay")} onVocabulary={() => setDetail("vocabulary")} />;
    if (tab === "tutor") return <Tutor />;
    if (tab === "progress") return <Progress />;
    return <Home onAsk={() => setTab("tutor")} onProfile={() => setDetail("profile")} onStart={() => setTab("tutor")} />;
  };

  return (
    <div className={`app-shell theme-${theme} ${rtl ? "rtl-mode" : ""}`}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="phone">
        <div className="status-bar"><span>9:41</span><span>● ●● ▰</span></div>
        <div className="screen-wrap">{show()}</div>
        {!detail && (
          <nav className="bottom-nav" aria-label="Primary navigation">
            {tabs.map((item) => (
              <button
                aria-current={tab === item.id ? "page" : undefined}
                className={`${tab === item.id ? "active" : ""} ${item.id === "tutor" ? "tutor-tab" : ""}`}
                key={item.id}
                onClick={() => setTab(item.id)}
                type="button"
              >
                <span><Icon name={item.icon} size={21} /></span>
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
