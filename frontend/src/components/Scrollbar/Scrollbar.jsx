import './Scrollbar.css';

const Scrollbar = ({ children }) => {
  return (
    <div className="scrollbar">
      <div className="scroll-content">
        {children}
      </div>
    </div>
  );
}

export default Scrollbar;