type Obj = {
  [k: number]: number;
};

type Props = {
  percent: Obj;
};

const ViewTree = ({ percent }: Props) => {
  return <div> 나무 </div>;
};

export default ViewTree;
