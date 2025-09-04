import logo from "@/assets/images/logo.png";
import docIcon from "@/assets/images/doc-icon.svg";
import menuIcon from "@/assets/images/menu-icon.svg";
import notificationIcon from "@/assets/images/notification-icon.svg";
import chevronDown from "@/assets/images/chevron-down.svg";

const Header = () => {
  return (
    <header className="bg-primaryColor h-12 flex items-center fixed w-full z-50">
      <div className="container flex justify-between">
        <img src={logo} alt="LOGO" height={40} width={163} />
        <div className="flex items-center">
          <button className="text-white border-r border-[#616670] flex items-center gap-[5px] p-[8px] uppercase">
            az <img src={chevronDown} alt="down" />
          </button>
          <button className="p-[8px]">
            <img src={docIcon} alt="document" />
          </button>
          <button className="p-[8px]">
            <img src={menuIcon} alt="menu" />
          </button>
          <button className="p-[8px]">
            <img src={notificationIcon} alt="notification" />
          </button>
          <button>
            <div className="w-9 h-9 rounded-full bg-white text-[#717680] uppercase flex justify-center items-center font-semibold">
              or
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
