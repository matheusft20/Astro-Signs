import React, { useState } from 'react';
import { findZodiacSign } from '../utils/zodiacUtils';
import ZodiacResult from './ZodiacResult';
import { motion } from '../utils/motionUtils';

const ZodiacFinder: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('');
  const [zodiacInfo, setZodiacInfo] = useState<ReturnType<typeof findZodiacSign> | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) return;
    
    const result = findZodiacSign(new Date(birthDate));
    setZodiacInfo(result);
    setHasSubmitted(true);
  };
  
  const resetForm = () => {
    setHasSubmitted(false);
    setZodiacInfo(null);
    setBirthDate('');
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      {!hasSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-indigo-900/40 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-indigo-700/50"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Descubra Seu Signo</h2>
          <p className="text-indigo-200 text-center mb-8">Digite sua data de nascimento para revelar seu signo e suas influências cósmicas em sua personalidade.</p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-6">
              <label htmlFor="birthDate" className="block text-lg mb-2 text-indigo-100">
                Data de Nascimento
              </label>
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full bg-indigo-800/60 border border-indigo-600 rounded-lg px-4 py-3 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-indigo-950 font-semibold py-3 px-6 rounded-lg hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            >
              Revelar Meu Signo
            </button>
          </form>
        </motion.div>
      ) : (
        <ZodiacResult zodiacInfo={zodiacInfo!} onReset={resetForm} />
      )}
      
      <div className="mt-12 text-center text-indigo-200/80">
        <h3 className="text-xl font-medium mb-4">O que são Signos do Zodíaco?</h3>
        <p className="max-w-2xl mx-auto">
          Os signos do zodíaco são baseados na posição do sol no momento do seu nascimento. 
          Acredita-se que eles influenciam seus traços de personalidade, comportamentos e caminho de vida. 
          Cada signo tem características únicas e está associado a elementos específicos, 
          planetas e símbolos.
        </p>
      </div>
    </div>
  );
};

export default ZodiacFinder;