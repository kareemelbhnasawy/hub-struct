// Add imports for local images
import bg1 from '@/assets/images/background/bg_1.jpg';
import bg2 from '@/assets/images/background/bg_2.jpg';
import bg3 from '@/assets/images/background/bg_3.jpg';
import bg4 from '@/assets/images/background/bg_4.png';
import bg5 from '@/assets/images/background/bg_5.jpg';
import bg6 from '@/assets/images/background/bg_6.jpg';
import bg7 from '@/assets/images/background/bg_7.jpg';
import bg8 from '@/assets/images/background/bg_8.jpg';
import bg9 from '@/assets/images/background/bg_9.jpg';
import bg10 from '@/assets/images/background/bg_10.jpg';
import bg11 from '@/assets/images/background/bg_11.jpg';
import bg12 from '@/assets/images/background/bg_12.jpg';

export const BACKGROUND_OPTIONS = [
  { id: '1', source: bg1 },
  { id: '2', source: bg2 },
  { id: '3', source: bg3 },
  { id: '4', source: bg4 },
  { id: '5', source: bg5 },
  { id: '6', source: bg6 },
  { id: '7', source: bg7 },
  { id: '8', source: bg8 },
  { id: '9', source: bg9 },
  { id: '10', source: bg10 },
  { id: '11', source: bg11 },
  { id: '12', source: bg12 },
];

export const getBackgroundImageById = (id?: string) => {
  if (!id) return undefined;
  const option = BACKGROUND_OPTIONS.find((opt) => opt.id === id);
  return option ? option.source : undefined;
};
