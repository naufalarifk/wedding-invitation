import Countdown from 'react-countdown';

const CountdownTimer = () => {
  // Specify the target date for the countdown
  const targetDate = new Date('2024-01-21T19:00:00+07:00');

  // Define a renderer function for displaying the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state if the countdown is finished
      return <span>Happy Wedding to Heri & Fitri!</span>;
    } else {
      // Render the countdown values
      return (
            <p className='text-center font-extrabold text-7xl'>{days}:{hours}:{minutes}:{seconds}</p>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
