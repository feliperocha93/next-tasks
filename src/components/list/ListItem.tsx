import Selection from './Selection';

interface ListItemProps {
  value: string;
  done: boolean;
  changeStatus: () => void;
}

function ListItem(props: ListItemProps) {
  const textStyle =
    props.done ? 'line-through text-gray-300' : 'text-gray-500';

  return (
    <li
      onClick={props.changeStatus} 
      className={`
      bg-white text-black
        flex items-center p-5 text-xl
        border-b border-gray-400 cursor-pointer
      `}
    >
      <Selection value={props.done} />
      <span className={`font-light ml-5 ${textStyle} `}>
        {props.value}
      </span>
    </li>
  );
}

export default ListItem;
