import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'other projects',
  projects: [
    {
      id: getId(),
      name: '',
      url: '',
      repo: '',
      img: '',
      year: 2025,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'Maps API', icon: 'logos:google-maps' },
      ],
    },
    {
      id: getId(),
      name: '',
      url: '',
      repo: '',
      img: '',
      year: 2024,
      projectSkills: [
        { name: 'Next.js', icon: 'file-icons:nextjs' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
      ],
    },
    {
      id: getId(),
      name: '',
      url: '',
      repo: '',
      img: '',
      year: 2024,
      projectSkills: [
        { name: 'Java', icon: 'hugeicons:java' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'Maps API', icon: 'logos:google-maps' },
      ],
    },
    {
      id: getId(),
      name: '',
      url: '',
      repo: '',
      img: '',
      year: 2024,
      projectSkills: [
        { name: 'Next.js', icon: 'file-icons:nextjs' },
        { name: 'NextAuth.js', icon: 'noto-v1:shield' },
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Prisma', icon: 'simple-icons:prisma' },
        { name: 'Pusher', icon: 'simple-icons:pusher' },
      ],
    },
    {
      id: getId(),
      name: '',
      url: '',
      repo: '',
      img: '',
      year: 2024,
      projectSkills: [
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'Express', icon: 'skill-icons:expressjs-light' },
        { name: 'React', icon: 'vscode-icons:file-type-reactjs' },
        { name: 'Node.js', icon: 'vscode-icons:file-type-node' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
      ],
    },
    {
      id: getId(),
      name: '',
      url: '',
      repo: '',
      img: '',
      year: 2024,
      projectSkills: [
        { name: 'Flutter', icon: 'vscode-icons:file-type-flutter' },
        { name: 'Dart', icon: 'vscode-icons:file-type-dartlang' },
        { name: 'Music Player', icon: 'emojione-v1:music-descend' },
      ],
    },
  ],
}; 