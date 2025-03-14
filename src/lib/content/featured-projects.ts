import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: '',
      description: '',
      tasks: '',
      url: '',
      img: '',
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Java', icon: 'vscode-icons:file-type-java' },
        { name: 'Runtime Resource Overlay', icon: 'grommet-icons:resources' },
        { name: 'Shell Script', icon: 'vscode-icons:file-type-shell' },
      ],
    },
    {
      id: getId(),
      name: '',
      description: '',
      tasks: '',
      url: '',
      img: '',
      projectSkills: [
        { name: 'Java', icon: 'vscode-icons:file-type-java' },
        { name: 'AIDL', icon: 'logos:android-icon' },
        { name: 'Material You', icon: 'logos:material-ui' },
        { name: 'Color Theory', icon: 'unjs:theme-colors' },
      ],
    },
  ],
};

export default featuredProjectsSection;
