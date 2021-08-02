import Day from "./Day";

const Week = ({ data }) => {
  return (
    <div className="week-div">
      {data.map((day, index) => {
        return <Day key={index} day={day} />;
      })}
    </div>
  );
};

export default Week;
