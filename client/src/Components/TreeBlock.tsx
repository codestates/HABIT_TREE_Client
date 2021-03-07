import ViewTree from './ViewTree';

type Obj = {
  [k: number]: number;
};

type Props = {
  percent: Obj;
};
const TreeBlock = ({ percent }: Props) => {
  return (
    <div>
      <ViewTree percent={percent} />
    </div>
  );
};

export default TreeBlock;
