import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Pointer Move
  useEffect(() => {
    console.log('useEffect', { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
      console.log(clientX, clientY);
    };

    if (enabled) window.addEventListener('pointermove', handleMove);

    // Cleanup
    // --> cuando el componente se desmonta
    // --> cuando cambian las dependencias
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);

  // Change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);

    return () => {
      document.body.classList.remove('no-cursor');
    };
  }, [enabled]);

  // Change body backgroundColor

  return (
    <>
      <main>
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            opacity: 0.4,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></div>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} seguir puntero
        </button>
      </main>
    </>
  );
}

export default App;
