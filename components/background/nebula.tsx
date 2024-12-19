'use client';

export function NebulaBackground() {
  return (
    <div 
      className="fixed inset-0 w-full h-full z-[-1] bg-cover bg-center bg-no-repeat opacity-60"
      style={{
        backgroundImage: 'url("https://images.nasa.gov/images/dark-nebula.jpg")',
        backgroundColor: '#0a0118',
        backgroundBlendMode: 'soft-light'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-black/70" />
    </div>
  );
}