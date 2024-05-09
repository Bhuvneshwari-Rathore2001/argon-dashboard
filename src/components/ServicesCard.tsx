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
        'flex flex-col lg:p-8 md:p-4 p-3 items-center justify-center',
        className
      )}
    >
      {icon}
      <div className="mt-4 w-56">
        <div className="lg:text-xl text-base font-semibold text-center text-primary">
          {title}
        </div>
        <div className="font-light text-center text-sm md:text-base lg:text-xl">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
