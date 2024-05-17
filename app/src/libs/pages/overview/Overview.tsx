import Repositories from "../../features/repositories";
import Stars from "../../features/stars";

const Overview = () => {
  return (
    <div>
      <h1>Overview</h1>
      <Repositories />
      <Stars />
    </div>
  );
};

export default Overview;
