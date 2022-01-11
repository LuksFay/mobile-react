import React from 'react';
import './TodoCounter.css';

function TodoCounter() {
  return (
    <h2 className="TodoCounter">Has completado 2 de 3 TODOs</h2>
  );
}

export { TodoCounter };

// exportar un archivo envuelto en '{ }' nos obliga a importarlo exactamente con el mismo nombre apra no cometer errores ni llamarlo de otra manera.