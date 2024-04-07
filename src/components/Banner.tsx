const Banner = () => {
  return (
    <div className="bg-bannerGradient">
      <div className="flex items-center pt-44 max-w-7xl m-auto">
        <div className="flex flex-col gap-11">
          <div className="text-primary font-medium text-xl ">
            WELCOME TO CREATIC
          </div>
          <div className="text-7xl font-bold w-[819px]">
            WE ARE <span className="text-primary">CREATIVE</span> DESIGN AGENCY
          </div>
          <div className="w-36 border-solid border-2 border-primary"></div>
          <div className="font-light text-xl ">
            Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia <br />
            dolor sit amet, consectetur, adipisci velit Neque porro elit Neque
            <br /> porro quis ipsum
          </div>
          <button className="w-44 h-12 font-normal text-lg border-solid border-2 hover:text-black hover:bg-primary hover:border-none border-primary flex items-center justify-center">
            GET IN TOUCH
          </button>
        </div>
        <div
          style={{ backgroundImage: "url('./assets/WomenBigJewel.svg')" }}
          className="bg-cover bg-no-repeat bg-center h-[787px] w-full"
        ></div>
      </div>
    </div>
  );
};

export default Banner;
