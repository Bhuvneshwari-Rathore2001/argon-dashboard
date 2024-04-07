const HomeSection = () => {
  return (
    <div className="flex h-1/4 text-white py-44 pl-80 bg-homeSectionGradient">
      <div className="flex flex-col h-auto gap-11">
        <div className="text-[#6D95FC] font-medium text-xl ">
          WELCOME TO CREATIC
        </div>
        <div className="text-7xl font-bold ">
          WE ARE <span className="text-[#6D95FC]">CREATIVE</span> DESIGN AGENCY
        </div>
        <div className="w-36 border-solid border-2 border-[#6D95FC] "></div>
        <div className="font-light text-xl ">
          Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia <br />
          dolor sit amet, consectetur, adipisci velit Neque porro elit Neque
          <br /> porro quis ipsum
        </div>
        <div className="w-44 h-12 font-normal text-lg border-solid border-2 border-[#6D95FC]  flex items-center justify-center">
          GET IN TOUCH
        </div>
      </div>

      <div
        className="h-full w-full"
        style={{ background: "url('/assets/WomenBigJewel.svg')" }}
      ></div>
    </div>
  );
};

export default HomeSection;
