import CalendarBlock from './CalendarBlock';
import TreeBlock from './TreeBlock';

function Home({ habits, setHabits }: any) {
  return (
    <div
      style={{
        display: 'flex',
        // justifyContent: 'flex-end',
        // alignContent: 'flex-end',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '50%',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <CalendarBlock habits={habits} setHabits={setHabits}></CalendarBlock>
      </div>
      <div
        style={{
          height: '100vh',
          width: '50%',
          justifyContent: 'center',
        }}
      >
        <TreeBlock></TreeBlock>
      </div>
    </div>
  );
}

export default Home;
