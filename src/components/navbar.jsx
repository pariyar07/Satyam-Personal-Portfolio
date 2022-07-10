const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-12 pt-4">
      <img src="/assets/SP-black.png" alt="logo" className="w-16 h-auto" />
      <span className="text-gray-matte text-xl font-bold font-mono">
        Front-end Web Developer
      </span>
      <a
        href="mailto:pariyarsatyam12@gmail.com"
        className="text-white font-semibold font-sans transition-all hover:text-gray-matte"
      >
        Message Me
      </a>
    </div>
  );
};

export default Navbar;
