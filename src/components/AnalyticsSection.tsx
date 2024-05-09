import AwardWinningIcon from '../assets/AwardWinningIcon';
import HappyCustomersIcon from '../assets/HappyCustomersIcon';
import ProjectDoneIcon from '../assets/ProjectDoneIcon';
import TeamMemberIcon from '../assets/TeamMemberIcon';
import AnalyticCard from './AnalyticCard';

const AnalyticsSection = () => {
  return (
    <div className="bg-analyticSection py-14">
      <div className="lg:max-w-7xl max-2xl:px-6 mx-auto grid lg:grid-cols-4 sm:grid-cols-2 justify-between lg:gap-0 gap-10 max-md:items-center max-md:justify-center">
        <AnalyticCard
          name="Team Members"
          icon={<TeamMemberIcon />}
          percent="3+"
        />
        <AnalyticCard
          name="Project Done"
          icon={<ProjectDoneIcon />}
          percent="6+"
        />
        <AnalyticCard
          name="Happy Customers"
          icon={<HappyCustomersIcon />}
          percent="10+"
        />
        <AnalyticCard
          name="Award Winning"
          icon={<AwardWinningIcon />}
          percent="3+"
        />
      </div>
    </div>
  );
};

export default AnalyticsSection;
