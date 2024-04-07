import TeamMemberIcon from '../assets/TeamMemberIcon';
import AnalyticCard from './AnalyticCard';

const AnalyticsSection = () => {
  return (
    <div className="bg-analyticSection py-14">
      <div className="max-w-7xl mx-auto flex justify-between">
        <AnalyticCard
          name="Team Members"
          icon={<TeamMemberIcon />}
          percent="50+"
        />
        <AnalyticCard
          name="Project Done"
          icon={<TeamMemberIcon />}
          percent="200+"
        />
        <AnalyticCard
          name="Happy Customers"
          icon={<TeamMemberIcon />}
          percent="500+"
        />
        <AnalyticCard
          name="Award Winning"
          icon={<TeamMemberIcon />}
          percent="75+"
        />
      </div>
    </div>
  );
};

export default AnalyticsSection;
