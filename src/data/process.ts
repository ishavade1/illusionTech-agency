export interface ProcessStep {
  step: number
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  { step: 1, title: 'Discovery', description: 'Understand client goals.' },
  { step: 2, title: 'Planning', description: 'Project strategy.' },
  { step: 3, title: 'Design', description: 'Wireframes and UI.' },
  { step: 4, title: 'Development', description: 'Frontend + Backend.' },
  { step: 5, title: 'Testing', description: 'Quality assurance.' },
  { step: 6, title: 'Launch', description: 'Go live.' },
]
