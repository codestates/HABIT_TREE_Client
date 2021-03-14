import ViewTree from './HabitTree';

type Obj = {
  [k: number]: number;
};

type Props = {
  percent: Obj;
};
const TreeBlock = ({ percent }: Props) => {
  return <ViewTree percent={percent} />;
};

export default TreeBlock;
