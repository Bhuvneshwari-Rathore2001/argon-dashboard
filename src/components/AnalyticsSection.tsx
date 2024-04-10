import AwardWinningIcon from '../assets/AwardWinningIcon';
import HappyCustomersIcon from '../assets/HappyCustomersIcon';
import ProjectDoneIcon from '../assets/ProjectDoneIcon';
import TeamMemberIcon from '../assets/TeamMemberIcon';
import AnalyticCard from './AnalyticCard';

const AnalyticsSection = () => {
  return (
    <div className="bg-analyticSection py-14">
      <div className="max-w-7xl mx-auto flex justify-between">
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
