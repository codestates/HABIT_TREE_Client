import { ChangeEvent, useState } from 'react';
import { uploadHabit } from '../API/habits';

type Events = {
  id: number;
  title: string;
  allday: boolean;
  start: Date;
  end: number;
};

type EventsProps = {
  events: Events[];
  setEvents: (value: Events[]) => void;
};

type Habits = {
  id: number;
  title: string;
  pass: number;
  clicked: number;
  achieve: number;
  treeType: string;
  userId: number;
  createdAt: Date;
};

type HabitsProps = {
  habits: Habits[];
};

const UploadHabit = ({ habits }: HabitsProps) => {
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // const [events, setEvents] = useState<Events[]>();

  //!
  // console.log('habits');
  // console.log(events);
  // if (habits.length === 0) {
  //   console.log(1);
  // }
  const handleInputBox = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
    await uploadHabit(title);
    // db 저장 + 렌더링 시키기
    setTitle('');
  };

  //!!
  // const handleButtonClick = () => {
  //   if (title.length === 0) {
  //     setErrorMessage('습관 이름을 정해주세요!');
  //     return;
  //   }
  //   const isLogin = localStorage.getItem('isLogin');

  //   if (!isLogin) {
  //     setEvents([
  //       ...events,
  //       {
  //         id: events.length,
  //         title: title,
  //         allday: true,
  //         start: new Date(),
  //         end: new Date().setDate(new Date().getDate() + 27),
  //       },
  //     ]);
  //     return;
  //   } else {
  //     const result = uploadHabit(title);
  //     if (result) {
  //       setEvents([
  //         ...events,
  //         {
  //           id: events.length,
  //           title: title,
  //           allday: true,
  //           start: new Date(),
  //           end: new Date().setDate(new Date().getDate() + 27),
  //         },
  //       ]);
  //     }
  //   }
  // };
  //!!
  return (
    <div>
      <input
        type="text"
        placeholder="기르고 싶은 습관을 등록해주세요!"
        onChange={(e) => handleInputBox(e)}
        style={{ margin: '3%', width: '15em' }}
      ></input>
      <button onClick={handleButtonClick}>등록</button>
      {errorMessage ? <div>{errorMessage}</div> : <></>}
    </div>
  );
};
export default UploadHabit;
