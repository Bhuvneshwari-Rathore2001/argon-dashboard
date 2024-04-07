// margin top is not applying on each div

const AboutUsSection = () => {
  return (
    <div className="flex text-white h-1/5 min-w-full pr-56">
      <div
        className="h-1/2 w-1/2"
        style={{ background: "url('/assets/WomenBigJewel.svg')" }}
      ></div>

      <div className="flex flex-col h-auto w-3/12 mt-44 gap-6">
        <div className="text-[#6D95FC] font-medium text-xl ">ABOUT US</div>
        <div className="text-5xl font-bold ">
          We Bring <span className="text-[#6D95FC]">Creative</span> Ideas <br />{' '}
          To Life.
        </div>
        <div className="w-24 border-solid border-2 border-[#FFFFFF]  "></div>
        <div className=" font-normal text-base text-[#6D95FC]">
          we Love Creating
        </div>
        <div className="font-light text-xl ">
          Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit
          amet, Neque porro elit NeDque porro Lorem ipsum Neque porro Neque
          porro
          <br />
          <br />
          Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Lorem
          ipsum Neque quis ipsum
        </div>
        <div className="w-44 h-12 font-normal text-lg border-solid border-2 border-[#6D95FC]   flex items-center justify-center">
          READ MORE
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
