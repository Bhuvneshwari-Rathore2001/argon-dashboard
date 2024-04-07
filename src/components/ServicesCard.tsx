import classNames from 'classnames';
import { ReactNode } from 'react';

interface IServicesCard {
  icon: ReactNode;
  title: string;
  desc: string;
  className?: string;
}

const ServicesCard = ({ icon, title, desc, className }: IServicesCard) => {
  return (
    <div
      className={classNames(
        'flex flex-col p-8 items-center justify-center',
        className
      )}
    >
      {icon}
      <div className="mt-4 w-56">
        <div className="text-xl font-semibold text-center text-primary">
          {title}
        </div>
        <div className="text-base font-light text-center">{desc}</div>
      </div>
    </div>
  );
};

export default ServicesCard;
