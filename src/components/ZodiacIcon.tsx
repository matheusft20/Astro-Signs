import React from 'react';
import { EggFried as Aries, Brush as Taurus, Gem as Gemini, Ambulance as Cancer, Leaf as Leo, Bird as Virgo, Library as Libra, ScissorsIcon as Scorpio, Guitar as Sagittarius, Popcorn as Capricorn, PlusSquare as Aquarius, Disc as Pisces } from 'lucide-react';

interface ZodiacIconProps {
  sign: string;
}

export const ZodiacIcon: React.FC<ZodiacIconProps> = ({ sign }) => {
  const iconProps = {
    className: "w-full h-full",
    strokeWidth: 1.5
  };

  switch (sign) {
    case 'Aries':
      return <Aries {...iconProps} />;
    case 'Taurus':
      return <Taurus {...iconProps} />;
    case 'Gemini':
      return <Gemini {...iconProps} />;
    case 'Cancer':
      return <Cancer {...iconProps} />;
    case 'Leo':
      return <Leo {...iconProps} />;
    case 'Virgo':
      return <Virgo {...iconProps} />;
    case 'Libra':
      return <Libra {...iconProps} />;
    case 'Scorpio':
      return <Scorpio {...iconProps} />;
    case 'Sagittarius':
      return <Sagittarius {...iconProps} />;
    case 'Capricorn':
      return <Capricorn {...iconProps} />;
    case 'Aquarius':
      return <Aquarius {...iconProps} />;
    case 'Pisces':
      return <Pisces {...iconProps} />;
    default:
      return <div className="w-full h-full flex items-center justify-center">?</div>;
  }
};