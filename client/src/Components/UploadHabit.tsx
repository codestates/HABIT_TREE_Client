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

const UploadHabit = ({ events, setEvents }: EventsProps) => {
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputBox = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleButtonClick = async () => {
    if (title.length === 0) {
      setErrorMessage('습관 이름을 정해주세요!');
      return;
    }
    const isLogin = localStorage.getItem('isLogin');

    if (!isLogin) {
      setEvents([
        ...events,
        {
          id: events.length,
          title: title,
          allday: true,
          start: new Date(),
          end: new Date().setDate(new Date().getDate() + 27),
        },
      ]);
      return;
    }

    const result = await uploadHabit(title);
    if (result) {
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="기르고 싶은 습관을 등록해주세요!"
        onChange={(e) => handleInputBox(e)}
        style={{ margin: '3%', width: '15em' }}
      ></input>
      <button className="btn btn-upload" onClick={() => handleButtonClick()}>
        등록
      </button>
      {errorMessage ? <div>{errorMessage}</div> : <></>}
    </div>
  );
};

export default UploadHabit;
