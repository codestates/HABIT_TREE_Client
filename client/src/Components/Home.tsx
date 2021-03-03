import CalendarBlock from './CalendarBlock';
import TreeBlock from './TreeBlock';

function Home() {
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
          border: '1px solid black',
          justifyContent: 'center',
        }}
      >
        <CalendarBlock></CalendarBlock>
      </div>
      <div
        style={{
          height: '100vh',
          width: '50%',
          border: '2px solid black',
        }}
      >
        <TreeBlock></TreeBlock>
      </div>
    </div>
  );
}

export default Home;
