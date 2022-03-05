interface SelectionProps {
  value: boolean;
}

function Selection({ value }: SelectionProps) {
  const gradient = value ? 'bg-gradient-to-br from-blue-400 to-purple-500' : '';

  return (
    <div className={`
      flex justify-center items-center
      h-7 w-7 rounded-full cursor-pointer text-white
      border border-gray-400 ${gradient}
    `}>
      {value ? 'x' : ''}
    </div>
  );
}

export default Selection;
