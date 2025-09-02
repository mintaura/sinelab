const SidebarMenuList = ({ item, isActive, setActiveTab, setMenuOpen }) => {
  const IconComp = item.icon;
  return (
    <li key={item.name}>
      <button
        onClick={() => {
          setActiveTab(item.name);
          setMenuOpen && setMenuOpen(false);
        }}
        className={`flex items-center w-full gap-3 py-3 pl-3 pr-2 text-nowrap cursor-pointer rounded-xl transition-all duration-300 text-base !leading-[150%] font-normal tracking-normal
                      ${
                        isActive
                          ? "gradient-blue text-white shadow-medium-black"
                          : "text-black hover:bg-iron/50"
                      }`}
      >
        {IconComp ? (
          <span>
            <IconComp
              path={isActive ? item.activeStyles.path : undefined}
              bg={isActive ? item.activeStyles.bg : undefined}
              className="w-[26px] h-[26px]"
            />
          </span>
        ) : (
          <span className="w-[26px] h-[26px] bg-davy-gray/50 rounded-sm flex justify-center items-center text-xs text-white">
            N/A
          </span>
        )}
        {item.name}
      </button>
    </li>
  );
};

export default SidebarMenuList;
