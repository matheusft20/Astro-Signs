import React, { useEffect } from 'react';
import { ZodiacSignInfo } from '../utils/zodiacUtils';
import { motion } from '../utils/motionUtils';
import { ZodiacIcon } from './ZodiacIcon';
import { Share2 } from 'lucide-react';

interface ZodiacResultProps {
  zodiacInfo: ZodiacSignInfo;
  onReset: () => void;
}

const ZodiacResult: React.FC<ZodiacResultProps> = ({ zodiacInfo, onReset }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shareOnWhatsApp = () => {
    const text = `🌟 Descobri meu signo! Eu sou ${zodiacInfo.sign} (${zodiacInfo.dateRange})\n\n${zodiacInfo.description}\n\nDescubra o seu também em: ${window.location.href}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-indigo-900/40 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-indigo-700/50"
    >
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 md:w-32 md:h-32 mb-4 text-yellow-300">
          <ZodiacIcon sign={zodiacInfo.sign} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{zodiacInfo.sign}</h2>
        <p className="text-lg text-indigo-200 text-center">
          {zodiacInfo.dateRange}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-indigo-800/30 rounded-lg p-5 border border-indigo-700/30">
          <h3 className="text-xl font-semibold mb-3 text-yellow-200">Elemento e Planeta</h3>
          <div className="space-y-2 text-indigo-100">
            <p><span className="font-medium text-indigo-200">Elemento:</span> {zodiacInfo.element}</p>
            <p><span className="font-medium text-indigo-200">Planeta Regente:</span> {zodiacInfo.rulingPlanet}</p>
          </div>
        </div>
        
        <div className="bg-indigo-800/30 rounded-lg p-5 border border-indigo-700/30">
          <h3 className="text-xl font-semibold mb-3 text-yellow-200">Compatibilidade</h3>
          <div className="space-y-2 text-indigo-100">
            <p><span className="font-medium text-indigo-200">Mais Compatível com:</span> {zodiacInfo.compatibility.join(', ')}</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-yellow-200">Características</h3>
        <div className="bg-indigo-800/30 rounded-lg p-5 border border-indigo-700/30">
          <div className="space-y-2 text-indigo-100">
            <p>{zodiacInfo.description}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <button
          onClick={onReset}
          className="bg-indigo-700 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Verificar Outra Data
        </button>
        
        <button
          onClick={shareOnWhatsApp}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
        >
          <Share2 className="w-5 h-5" />
          Compartilhar no WhatsApp
        </button>
      </div>
    </motion.div>
  );
};

export default ZodiacResult;