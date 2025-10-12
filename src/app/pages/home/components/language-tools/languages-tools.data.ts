import { LanguagesToolsSchema } from './language-tool.interface';

// Ícones temporários em SVG path (para as que não têm imagem externa)
const monitor = 'M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z';

// Novo array com ícones melhor representativos
const languagesToolsData: LanguagesToolsSchema[] = [
  // 🎮 Game Development
  { icon: '/assets/icons/icons8-unity-50.png', name: 'Unity', category: 'Game Engine' },
  { icon: '/assets/icons/icons8-unreal-engine-50.png', name: 'Unreal Engine', category: 'Game Engine (basic)' },

  // 💻 Programming & Scripting
  { icon: '/assets/icons/icons8-c-sharp-logo-50.png', name: 'C#', category: 'Scripting Language' },
  { icon: '/assets/icons/icons8-javascript-50.png', name: 'JavaScript / TypeScript', category: 'Web / Tools' },
  { icon: '/assets/icons/icons8-python-50.png', name: 'Python', category: 'Automation / Prototyping' },

  // 🖌️ Design
  { icon: '/assets/icons/icons8-figma-50.png', name: 'Figma', category: 'UI / UX Design' },
  { icon: '/assets/icons/icons8-adobe-photoshop-50.png', name: 'Photoshop', category: '2D Art & Texturing' },
  { icon: '/assets/icons/icons8-adobe-animate-50.png', name: 'Animate', category: 'Animation' },
  { icon: '/assets/icons/icons8-clip-studio-paint-50.png', name: 'Clip Studio Paint', category: 'Digital Art' },
  { icon: '/assets/icons/icons8-ibis-paint-x-50.png', name: 'Ibis Paint X', category: 'Digital Art' },
  { icon: '/assets/icons/icons8-adobe-after-effects-50.png', name: 'After Effects', category: 'Motion Graphics' },
  { icon: '/assets/icons/icons8-blender-50.png', name: 'Blender', category: '3D Modeling (intermediate)' },
  { icon: '/assets/icons/icons8-krita-50.png', name: 'Krita', category: 'Digital Painting' },
  { icon: '/assets/icons/icons8-aseprite-50.png', name: 'Aseprite', category: 'Pixel Art' },
  { icon: '/assets/icons/icons8-adobe-illustrator-50.png', name: 'Illustrator', category: 'Visual Identity' },

  // 🧩 Writing & Organization
  { icon: '/assets/icons/icons8-ink-50.png', name: 'Ink by Inkle', category: 'Narrative Scripting' },

  // 🔊 Audio
  { icon: '/assets/icons/icons8-audacity-50.png', name: 'Audacity', category: 'Sound Editing' },
];

export default languagesToolsData;
