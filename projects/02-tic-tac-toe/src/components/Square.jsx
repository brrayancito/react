const Square = ({ children, isSelected, updatedBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  //Ejecuto esta función cuando hago click en el cuadrado
  const handleClick = () => {
    updatedBoard(index);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

export default Square;
