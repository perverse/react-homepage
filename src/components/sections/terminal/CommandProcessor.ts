// Define command configuration interface
interface CommandConfig {
  name: string;
  description: string;
  usage: string;
  execute: (args: string[], isNested?: boolean, setBackground?: (bg: 'line' | 'matrix') => void) => string;
  hidden?: boolean;
  excludeFromAll?: boolean; // New property to exclude from 'all' command
}

// Define available sections for portfolio navigation
const AVAILABLE_SECTIONS = ['about', 'skills', 'projects', 'contact'] as const;
type Section = typeof AVAILABLE_SECTIONS[number];

// Helper function to format section list for usage messages
const formatSectionList = () => AVAILABLE_SECTIONS.join(', ');

// Helper function to validate section
const isValidSection = (section: string): section is Section => 
  AVAILABLE_SECTIONS.includes(section as Section);

// Define project details for easy maintenance
const PROJECTS = {
  1: {
    name: "4mation Technologies AI Integration",
    description: "Leading AI integration projects and improving internal workflows using AWS Bedrock and other AI technologies.",
    techStack: ["AWS Bedrock", "ChatGPT", "Python", "TypeScript", "React"],
    role: "Full Stack Software Engineer",
    period: "Feb 2024 - Present"
  },
  2: {
    name: "CreditorWatch Microservices Migration",
    description: "Led the migration of legacy monolith systems to a modern microservice-based AWS architecture, implementing pub/sub for high-throughput data streams.",
    techStack: ["AWS", "Microservices", "PHP", "Node.js", "React"],
    role: "Senior Software Engineer",
    period: "Feb 2020 - July 2022"
  },
  3: {
    name: "Lendlease Barangaroo Digital Signage",
    description: "Developed digital signage DSP system for the Barangaroo development project.",
    techStack: ["PHP", "JavaScript", "React", "AWS"],
    role: "Freelance Developer",
    period: "Dec 2015 - Jun 2016"
  }
} as const;

const DESKTOP_TITLE_ART = `
██████╗  ██████╗ ███╗   ██╗███╗   ██╗██╗███████╗██████╗ ██╗   ██╗███╗   ██╗███████╗
██╔══██╗██╔═══██╗████╗  ██║████╗  ██║██║██╔════╝██╔══██╗╚██╗ ██╔╝████╗  ██║██╔════╝
██████╔╝██║   ██║██╔██╗ ██║██╔██╗ ██║██║█████╗  ██████╔╝ ╚████╔╝ ██╔██╗ ██║█████╗  
██╔══██╗██║   ██║██║╚██╗██║██║╚██╗██║██║██╔══╝  ██╔═══╝   ╚██╔╝  ██║╚██╗██║██╔══╝  
██║  ██║╚██████╔╝██║ ╚████║██║ ╚████║██║███████╗██║        ██║   ██║ ╚████║███████╗
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚═╝╚══════╝╚═╝        ╚═╝   ╚═╝  ╚═══╝╚══════╝
                                                                                      
██████╗  ██████╗ ████████╗ ██████╗ ██████╗ ███╗   ███╗                              
██╔══██╗██╔═══██╗╚══██╔══╝██╔════╝██╔═══██╗████╗ ████║                              
██║  ██║██║   ██║   ██║   ██║     ██║   ██║██╔████╔██║                              
██║  ██║██║   ██║   ██║   ██║     ██║   ██║██║╚██╔╝██║                              
██████╔╝╚██████╔╝   ██║   ╚██████╗╚██████╔╝██║ ╚═╝ ██║                              
╚═════╝  ╚═════╝    ╚═╝    ╚═════╝ ╚═════╝ ╚═╝     ╚═╝                              

Type 'help' to see available commands.`;

const MOBILE_TITLE_ART = `
ronniepyne.com

Type 'help' to see available commands.`;

// Define the sequence of commands for the 'all' command (excluding those with excludeFromAll)
const ALL_COMMAND_SEQUENCE = ['help', 'about', 'skills', 'projects', 'contact'];

const commands: Record<string, CommandConfig> = {
  title: {
    name: 'title',
    description: 'Display the title art',
    usage: 'title',
    execute: () => {
      // Check if we're in a browser environment
      if (typeof window !== 'undefined') {
        // Return different ASCII art based on screen width
        return window.innerWidth < 768 ? MOBILE_TITLE_ART : DESKTOP_TITLE_ART;
      }
      // Default to desktop art in non-browser environments (like tests)
      return DESKTOP_TITLE_ART;
    },
    hidden: true
  },
  help: {
    name: 'help',
    description: 'Show available commands',
    usage: 'help',
    execute: (_, isNested = false) => {
      const commandList = Object.entries(commands)
        .filter(([_, config]) => !config.hidden)
        .map(([cmd, config]) => `**${cmd}**: ${config.description}\n   Usage: **${config.usage}**`)
        .join('\n\n');
      return `Available commands:\n\n${commandList}`;
    }
  },
  about: {
    name: 'about',
    description: 'Learn about me',
    usage: 'about',
    execute: () => `Hi! I'm Ronnie Pyne, a Full Stack Software Engineer with extensive experience in web technologies.

Key Points:
• Full Stack Engineer with 20+ years of experience in web development
• Currently at 4mation Technologies, focusing on AI integration and mentoring
• Strong advocate for code quality and best practices
• Experienced in both technical leadership and hands-on development
• Passionate about leveraging AI to improve development workflows

I specialize in architecting and implementing scalable web solutions while mentoring teams and driving technical innovation.`
  },
  skills: {
    name: 'skills',
    description: 'View my technical skills',
    usage: 'skills',
    execute: () => `Technical Skills:

Languages & Core Technologies:
• PHP 4->8 (OOP/MVC), TypeScript, SQL
• JavaScript, Python, HTML5, CSS3
• SASS, LESS, XML, JSON

Frameworks & Libraries:
• Laravel 3-5, Symfony 2-5, Zend Framework, codeigniter, wordpress, Silverstripe
• React, Angular, Vue.js, Next.js
• Express, Sails.js, Django, Strapi
• Bootstrap, jQuery

Infrastructure & DevOps:
• AWS, Ubuntu, Apache, nginx
• MySQL, MongoDB, MSSQL, Redis
• Docker, TravisCI, Azure DevOps, Jenkins
• PHP-FPM, NodeJS, Memcache, Beanstalkd

Modern Development Tools:
• Git, VSCode, Docker
• ChatGPT, Github CoPilot
• LLMs & Generative AI
• Webpack, Vite, npm, yarn

Methodologies:
• Agile Development
• Microservices Architecture
• Test-Driven Development
• DevOps Practices`
  },
  projects: {
    name: 'projects',
    description: 'View my projects',
    usage: 'projects [number]',
    execute: (args) => {
      if (args.length === 0) {
        return `My Projects:\n\n${Object.entries(PROJECTS)
          .map(([id, project]) => `${id}. ${project.name} - ${project.description}`)
          .join('\n\n')}\n\nType 'projects <number>' for more details about a specific project.`;
      }

      const projectId = parseInt(args[0]);
      const project = PROJECTS[projectId as keyof typeof PROJECTS];

      if (!project) {
        return `Project ${projectId} not found. Type 'projects' to see available projects.`;
      }

      return `${project.name}

Role: ${project.role}
Period: ${project.period}

Description: ${project.description}

Tech Stack: ${project.techStack.join(', ')}`;
    }
  },
  contact: {
    name: 'contact',
    description: 'Get my contact information',
    usage: 'contact',
    execute: () => `Let's Connect!

Contact:
• Email: ronniepyne@gmail.com

Professional Profiles:
• Portfolio: https://www.ronniepyne.com
• GitHub: https://www.github.com/perverse
• LinkedIn: https://www.linkedin.com/in/ronnie-pyne-279b7383

I'm always interested in discussing new opportunities and collaborations!`
  },
  clear: {
    name: 'clear',
    description: 'Clear the terminal screen',
    usage: 'clear',
    execute: () => 'Terminal cleared.',
    hidden: true
  },
  theme: {
    name: 'theme',
    description: 'Switch visual theme and background',
    usage: 'theme [line|matrix]',
    execute: (args, isNested = false, setBackground) => {
      if (args.length === 0) {
        return `Available themes:
• **line** - Cyberpunk city skyline with cyan colors
• **matrix** - Digital rain with classic Matrix green

Usage: **theme line** or **theme matrix**`;
      }

      const themeType = args[0].toLowerCase();
      
      if (themeType !== 'line' && themeType !== 'matrix') {
        return `Invalid theme: ${themeType}
Available themes: **line**, **matrix**

Usage: **theme line** or **theme matrix**`;
      }

      if (setBackground) {
        setBackground(themeType as 'line' | 'matrix');
        return `Theme switched to: **${themeType}**

${themeType === 'matrix' 
  ? 'Welcome to the Matrix... 🟢\nGreen terminal colors and digital rain activated.' 
  : 'Back to the line cityscape 🏙️\nCyan terminal colors and city skyline activated.'
}`;
      }

      return 'Theme switching not available in this context.';
    },
    excludeFromAll: true
  },
  all: {
    name: 'all',
    description: 'Display all command outputs in sequence',
    usage: 'all',
    execute: () => {
      // Determine separator length based on screen width
      const separatorLength = (typeof window !== 'undefined' && window.innerWidth < 768) 
        ? 36  // 14 characters less for mobile (50 - 14 = 36)
        : 50; // Full length for desktop
      
      return ALL_COMMAND_SEQUENCE
        .map(cmd => {
          const output = commands[cmd].execute([], true);
          return `\n${'-'.repeat(separatorLength)}\n\n$ ${cmd}\n\n${output}`;
        })
        .join('\n');
    }
  }
};

export function processCommand(input: string, setBackground?: (bg: 'line' | 'matrix') => void): string {
  const [command, ...args] = input.trim().toLowerCase().split(/\s+/);

  if (!command) {
    return '';
  }

  if (!(command in commands)) {
    return `Command not found: ${command}. Type 'help' for available commands.`;
  }

  return commands[command].execute(args, false, setBackground);
}