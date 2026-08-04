export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'How long does a website take?',
    answer:
      'Most projects take 3 to 6 weeks from kickoff to launch, depending on scope. Landing pages can ship in as little as 1 to 2 weeks, while full custom web apps may take longer.',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'Website pricing varies depending on your specific goals, the complexity of the features, and design requirements. Whether you need a simple digital brochure or an interactive online store, we customize our pricing to fit your budget and scope. Reach out to our team for a quick, customized estimate!'
  },
  {
    question: 'Do you redesign websites?',
    answer:
      'Yes. We regularly modernize outdated sites, migrate content, and rebuild on a faster, more maintainable stack without losing your existing SEO rankings.',
  },
  {
    question: 'Will my website be mobile responsive?',
    answer:
      'Every site we build is fully responsive across desktop, tablet, and mobile, and is tested across major browsers and devices before launch.',
  },
  {
    question: 'Do you provide maintenance?',
    answer:
      'Yes, we offer ongoing maintenance plans covering security updates, backups, performance monitoring, and small content changes.',
  },
]
