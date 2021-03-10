import { ChangeEvent, useState } from 'react';
import { getAllHabits, uploadHabit } from '../API/habits';
import { useSampleState } from './LoginToggleContext';
import styled from 'styled-components';

const Div = styled.div`
  border-bottom: solid 2px gray;
  display: flex;
  justify-content: space-between;
  width: 68%;
  input {
    outline: none;
    border: none;
    width: 25em;
    font-size: 0.9rem;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    color: #343a40;
    text-shadow: 2px 3px 3px #ced4da;
    font-weight: bold;
    font-size: 0.9rem;
    width: 60px;
    padding: 10px 5px;
  }
`;

const ErrorMessage = styled.div`
  width: 50%;
  height: auto;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.35296;
  letter-spacing: 0;
  background-clip: padding-box;
  padding: 0.5rem 0.8rem;
  margin-top: 5px;
  text-align: center;
  background-color: #fff2f4;
  color: #1d1d1f;
  border: 1px solid rgba(227, 0, 0, 0.4);
`;
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

  const handleInputBox = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleButtonClick = async () => {
    if (title.length === 0) {
      setErrorMessage('습관 이름을 정해주세요');
      return;
    } else {
      setErrorMessage('');
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

  return (
    <>
      <Div>
        <input
          type="text"
          placeholder="기르고 싶은 습관을 등록해주세요"
          onChange={(e) => handleInputBox(e)}
          onKeyPress={(e) => {
            handleKeyPress(e);
          }}
          value={title}
        ></input>
        <button
          onClick={(e) => {
            handleButtonClick();
          }}
        >
          등록
        </button>
      </Div>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : <></>}
    </>
  );
};
export default UploadHabit;
