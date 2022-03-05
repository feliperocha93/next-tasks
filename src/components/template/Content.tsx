interface ContentProps {
  children?: any;
}

function Content(props: ContentProps) {
  return (
    <div className="flex flex-1 justify-center">
      {props.children}
    </div>
  );
}

export default Content;
