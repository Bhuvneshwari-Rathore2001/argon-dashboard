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
      <div className="font-bold text-6xl">{percent}</div>
      <div className="font-normal text-center text-xl text-primary">{name}</div>
    </div>
  );
};

export default AnalyticCard;
