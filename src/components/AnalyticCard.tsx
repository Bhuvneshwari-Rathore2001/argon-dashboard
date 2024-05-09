import { ReactNode } from 'react';

interface IAnalyticCard {
  name: string;
  icon: ReactNode;
  percent: string;
}

const AnalyticCard = ({ name, icon, percent }: IAnalyticCard) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <div className="font-bold lg:text-6xl md:text-5xl text-4xl">
        {percent}
      </div>
      <div className="lg:text-xl text-base font-normal text-center text-primary">
        {name}
      </div>
    </div>
  );
};

export default AnalyticCard;
