import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, I’m',
  title: 'Ayusman Avisek Nanda',
  tagline: ['Android Developer', 'OS Enthusiast', 'Web Developer', 'Kernel Enthusiast'],
  description:
    'I’m a Computer Science & Engineering graduate from Government College Of Engineering, Keonjhar, with a focus on Android and Web Development. I enjoy learning new skills and building interactive apps. I’m eager to grow and collaborate with others to turn ideas into reality.',
  specialText:
    'Currently available for job opportunities and freelance projects.',
  ctas: [
    {
      title: 'View My Resume',
      url: `/${resumeFileName}`,
      hideInDesktop: true,
      sameTab: false,
    },
    {
      title: 'Check Out My Projects',
      url: `/#projects`,
      hideInMobile: true,
      sameTab: true,
    },
    {
      title: 'Hire Me',
      url: `/#contact`,
      sameTab: true,
    },
  ],
};
