import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 text-center text-sm text-indigo-200/80">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Astro Signs. Todos os direitos reservados.</p>
        <p className="mt-2">
          Descubra as influências cósmicas que moldam sua personalidade e caminho de vida.
        </p>
        <div className="mt-4 pt-4 border-t border-indigo-700/30">
          <p>
            Desenvolvido por{' '}
            <a 
              href="https://portifolio-pi-opal.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-200 transition-colors font-medium"
            >
              Matheus França
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;