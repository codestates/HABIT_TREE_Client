import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { getAllHabits, uploadHabit } from '../API/habits';
import { useSampleState, useSampleDispatch } from './TodoContext';
type Events = {
  id: number | null;
  title: string | null;
  allday: boolean | null;
  start: Date | null;
  end: number | null;
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
  event: Events[];
  setEvents: (value: Events[]) => void;
  handleHabits: (value: Habits[]) => void;
};

const UploadHabit = ({
  habits,
  event,
  setEvents,
  handleHabits,
}: HabitsProps) => {
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const toggle = useSampleState();
  const dispatch = useSampleDispatch();

  const handleInputBox = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (title.length === 0) {
      setErrorMessage('습관 이름을 정해주세요!');
      return;
    }

    if (!toggle.toggle) {
      // 로그인이 안 된 경우
      setEvents([
        ...event,
        {
          id: event.length,
          title: title,
          allday: true,
          start: new Date(),
          end: new Date().setDate(new Date().getDate() + 27),
        },
      ]);

      setTitle('');
    } else {
      const afterUpload = await uploadHabit(title);
      const habits = await getAllHabits();
      handleHabits(habits as Habits[]);
      setTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="기르고 싶은 습관을 등록해주세요!"
        onChange={(e) => handleInputBox(e)}
        value={title}
        style={{ margin: '3%', width: '15em' }}
      ></input>
      <button onClick={handleButtonClick}>등록</button>
      {errorMessage ? <div>{errorMessage}</div> : <></>}
    </div>
  );
};
export default UploadHabit;
