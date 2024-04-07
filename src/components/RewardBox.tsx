import React, { Component } from 'react';
import Group from '../assets/Group';

interface ChildProps {
  name: string;
  icon: React.ComponentType<any>;
  percent: string;
}

const RewardBox = ({ name, percent }: ChildProps) => {
  return (
    <div className="h-48 w-48 flex flex-col items-center">
      <div></div>
      <div className="font-bold text-6xl">{percent}</div>
      <div className="font-normal text-xl text-[#6D95FC]">{name}</div>
    </div>
  );
};

export default RewardBox;
