function Header(props) {
  return (
    <div className="flex h-1/3 bg-default bg-norepeat bg-cover bg-center">
      <div className={`
        flex flex-1 h-full justify-center items-center
        bg-gradient-to-r from-purple-600
        via-transparent to-blue-600
      `}>
        {props.children}
      </div>
    </div>
  );
}

export default Header;
