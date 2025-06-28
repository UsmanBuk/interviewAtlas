
export interface TechTask {
  taskName: string;
  platform: string;
  duration: string;
  description: string;
  link?: string;
}

export interface ProcessStage {
  stageName: string;
  description: string;
  expectedDuration: string;
  format: string;
  techTask?: TechTask;
}

export interface HiringEntry {
  id: string;
  company: string;
  role: string;
  overview: string;
  process: ProcessStage[];
}

export const hiringData: HiringEntry[] = [
  {
    id: "lead-forensics-senior-software-engineer",
    company: "Lead Forensics",
    role: "Senior Software Engineer",
    overview: "From multiple candidates and research, it seems Lead Forensics looks for engineers who can solve real-world problems and drive their product forward. Based on candidate experiences, here's what to expect when applying as a Senior Software Engineer.",
    process: [
      {
        stageName: "Intro Call",
        description: "A 30-minute video call with HR to review your background, discuss the role, and answer any initial questions.",
        expectedDuration: "30 minutes",
        format: "Video call"
      },
      {
        stageName: "Technical Assessment",
        description: "An online coding challenge to evaluate your problem-solving and coding style.",
        expectedDuration: "2 hours", 
        format: "Coderbyte online test",
        techTask: {
          taskName: "Password Validation Challenge",
          platform: "Coderbyte",
          duration: "2 hours",
          description: "Implement functions to validate password strength according to given rules (length, character sets, banned substrings).",
          link: "https://coderbyte.com/challenges/password-validation"
        }
      },
      {
        stageName: "Final Interview",
        description: "A 45-60 minute conversation with the CEO focusing on leadership, culture fit, and your vision for the role. The interview includes both behavioral and technical components:\n\n**Technical Questions You Can Expect:**\n• How do you approach deploying code from development to production environments?\n• Explain your experience with production changes and rollback strategies\n• How do you implement and manage feature flags in production systems?\n• Describe your approach to logging and monitoring in production applications\n• Experience with monitoring tools like Grafana, Prometheus, and CloudWatch\n• Walk through and explain your solution from the Coderbyte challenge\n• Discuss debugging strategies for production issues\n\n**Behavioral Topics:**\n• Leadership experience and approach to mentoring junior developers\n• Cultural fit and alignment with company values\n• Your vision for the role and how you'd contribute to the team",
        expectedDuration: "45–60 minutes",
        format: "Video call"
      }
    ]
  }
];
