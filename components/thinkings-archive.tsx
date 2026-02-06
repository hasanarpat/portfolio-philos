'use client';

import { useState } from 'react';

const thinkings = [
  {
    id: 11,
    date: '2026.02.06',
    time: '10:00',
    content:
      "I've noticed that LLMs tend to write buggy code at first and then refactor it across generations until it works — just like me! At least for now!",
    tags: ['llms', 'coding', 'reflection'],
    mood: 'playful',
  },
  {
    id: 1,
    date: '2024.03.18',
    time: '14:32',
    content:
      "The best debugging session is the one you don't have. Spent 3 hours tracking down a race condition that wouldn't exist if I'd added proper synchronization primitives from the start. Laziness compounds.",
    tags: ['debugging', 'concurrency'],
    mood: 'reflective',
  },
  {
    id: 2,
    date: '2024.03.15',
    time: '09:15',
    content:
      "Why do we fetishize 'clean code' when most production systems are held together by duct tape and prayers? Maybe resilience matters more than elegance.",
    tags: ['philosophy', 'production'],
    mood: 'questioning',
  },
  {
    id: 3,
    date: '2024.03.12',
    time: '23:47',
    content:
      "Late night realization: Every abstraction is a bet on the future. We abstract because we think we know what will change. We're usually wrong.",
    tags: ['architecture', 'abstraction'],
    mood: 'contemplative',
  },
  {
    id: 4,
    date: '2024.03.08',
    time: '16:20',
    content:
      "Discovered a 7-year-old bug today. It's been silently corrupting data, but so rarely that nobody noticed. Makes you wonder what else is lurking.",
    tags: ['bugs', 'legacy'],
    mood: 'uneasy',
  },
  {
    id: 5,
    date: '2024.03.05',
    time: '11:03',
    content:
      "Reading old code I wrote 2 years ago. It's... not bad? Maybe I'm getting worse at recognizing bad code. Or maybe past-me was having a good day.",
    tags: ['reflection', 'growth'],
    mood: 'amused',
  },
  {
    id: 6,
    date: '2024.03.01',
    time: '08:45',
    content:
      'The terminal is the most honest interface. No animations to hide loading times, no dark patterns, just commands and their consequences.',
    tags: ['terminals', 'design'],
    mood: 'appreciative',
  },
  {
    id: 7,
    date: '2024.02.28',
    time: '19:30',
    content:
      "Deleted 3000 lines of code today. The system works better now. Why is deletion so satisfying? Maybe because it's permanent. No going back.",
    tags: ['refactoring', 'minimalism'],
    mood: 'satisfied',
  },
  {
    id: 8,
    date: '2024.02.25',
    time: '13:12',
    content:
      "Every time I write a test, I'm making a promise to future me. 'This is how it should work.' But future me often disagrees with past me.",
    tags: ['testing', 'time'],
    mood: 'philosophical',
  },
  {
    id: 9,
    date: '2024.02.20',
    time: '22:18',
    content:
      "Observability isn't just metrics and traces. It's building systems that can explain themselves. Self-documenting, self-aware infrastructure.",
    tags: ['observability', 'systems'],
    mood: 'inspired',
  },
  {
    id: 10,
    date: '2024.02.18',
    time: '07:55',
    content:
      "Morning coffee thought: The best code is code that doesn't exist. The second best is code that's obvious. Everything else is negotiable.",
    tags: ['simplicity', 'principles'],
    mood: 'clear',
  },
];

const allTags = Array.from(new Set(thinkings.flatMap((t) => t.tags))).sort();

export function ThinkingsArchive() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredThinkings = selectedTag
    ? thinkings.filter((t) => t.tags.includes(selectedTag))
    : thinkings;

  return (
    <div className='min-h-screen pt-24 pb-20'>
      {/* Header with terminal command aesthetic */}
      <div className='max-w-5xl mx-auto px-6 mb-16'>
        <div className='border border-primary/30 bg-card/20 p-8 font-mono text-sm'>
          <div className='flex items-center gap-2 text-primary mb-4'>
            <span className='text-secondary'>$</span>
            <span className='text-glow'>cat ~/thinkings/archive.log</span>
            <span className='inline-block w-2 h-4 bg-primary animate-pulse ml-1' />
          </div>
          <div className='text-foreground/70 leading-relaxed'>
            <p>
              Unfiltered fragments. Short-form notes on building, debugging, and
              thinking.
            </p>
            <p className='mt-2'>
              These aren't essays. They're mental breadcrumbs left during the
              work.
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-5xl mx-auto px-6'>
        {/* Tag Filter Pills */}
        <div className='mb-12 border border-primary/20 bg-card/10 p-6'>
          <div className='font-mono text-xs text-primary mb-4 uppercase tracking-widest'>
            [Filter.Tags]
          </div>
          <div className='flex flex-wrap gap-2'>
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 font-mono text-xs border transition-all duration-300 ${
                selectedTag === null
                  ? 'border-primary bg-primary/20 text-primary text-glow'
                  : 'border-primary/20 text-foreground/60 hover:border-primary/50 hover:text-primary'
              }`}
            >
              all ({thinkings.length})
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 font-mono text-xs border transition-all duration-300 ${
                  selectedTag === tag
                    ? 'border-primary bg-primary/20 text-primary text-glow'
                    : 'border-primary/20 text-foreground/60 hover:border-primary/50 hover:text-primary'
                }`}
              >
                #{tag} ({thinkings.filter((t) => t.tags.includes(tag)).length})
              </button>
            ))}
          </div>
        </div>

        {/* Thinkings List - Terminal log style */}
        <div className='space-y-4'>
          {filteredThinkings.map((thinking) => (
            <div
              key={thinking.id}
              onMouseEnter={() => setHoveredId(thinking.id)}
              onMouseLeave={() => setHoveredId(null)}
              className='border border-primary/20 bg-card/20 p-6 hover:border-primary/50 hover:bg-card/30 transition-all duration-300 group'
            >
              {/* Timestamp header */}
              <div className='flex items-center justify-between mb-4 pb-3 border-b border-primary/10'>
                <div className='flex items-center gap-3 font-mono text-xs text-muted-foreground'>
                  <span className='text-primary'>[{thinking.date}]</span>
                  <span className='text-primary/60'>{thinking.time}</span>
                  <span className='text-primary/40'>UTC</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-xs text-muted-foreground italic'>
                    mood:
                  </span>
                  <span className='text-xs text-secondary text-glow-copper'>
                    {thinking.mood}
                  </span>
                </div>
              </div>

              {/* Content */}
              <p className='text-foreground leading-relaxed mb-4 text-pretty group-hover:text-foreground/90'>
                {thinking.content}
              </p>

              {/* Tags footer */}
              <div className='flex items-center gap-2 flex-wrap'>
                {thinking.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className='font-mono text-xs px-2 py-1 border border-primary/30 bg-background/50 text-primary/70 hover:text-primary hover:border-primary/50 transition-colors'
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              {/* Hover indicator line */}
              <div
                className={`h-[1px] mt-4 transition-all duration-500 ${
                  hoveredId === thinking.id ? 'bg-primary/30' : 'bg-transparent'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredThinkings.length === 0 && (
          <div className='border border-primary/20 bg-card/10 p-12 text-center'>
            <div className='font-mono text-sm text-muted-foreground'>
              [No thinkings found with tag: #{selectedTag}]
            </div>
            <button
              onClick={() => setSelectedTag(null)}
              className='mt-4 font-mono text-xs text-primary hover:text-glow transition-colors'
            >
              [Clear filter]
            </button>
          </div>
        )}

        {/* Footer note */}
        <div className='mt-16 border border-primary/20 bg-card/10 p-6 font-mono text-xs text-muted-foreground'>
          <p>
            <span className='text-primary'>Note:</span> These are raw, unedited
            thoughts. Typos, half-formed ideas, and contradictions are features,
            not bugs.
          </p>
        </div>
      </div>
    </div>
  );
}
