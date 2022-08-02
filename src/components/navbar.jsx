const Navbar = () => {
  return (
    <div className="flex px-2 pt-2 justify-between laptop:items-center laptop:justify-between laptop:px-12 laptop:pt-4">
      <img
        src="/assets/SP-black.png"
        alt="logo"
        className="w-14 laptop:w-16 h-auto"
      />
      <span className="text-gray-matte hidden laptop:block laptop:text-xl laptop:font-bold font-mono">
        Front-end Web Developer
      </span>
      <a
        href="mailto:pariyarsatyam12@gmail.com"
        className="text-white font-medium text-xl laptop:text-2xl laptop:font-semibold font-sans transition-all hover:text-gray-matte"
      >
        Message Me
      </a>
    </div>
  );
};

export default Navbar;
