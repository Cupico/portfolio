const FadeAnimation = ({
  beforeAnimation,
  afterAnimation,
  visible,
  children,
}) => {
  return (
    <div
      className={`lg:rounded-l-lg transition-all duration-500 delay-300 ${
        visible
          ? `${afterAnimation} opacity-100`
          : `${beforeAnimation} opacity-0`
      }`}
    >
      {children}
    </div>
  );
};

export default FadeAnimation;
