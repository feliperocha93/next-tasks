import TaskList from "../../model/TaskList";
import { getListFooterItensCountString } from "../../functions/StringUtils";
import FooterButton from "./FooterButton";

interface ListFooterProps {
  tasks: TaskList;
  handleChange: (tasks: TaskList) => void;
}

function ListFooter({tasks, handleChange}: ListFooterProps) {
  function renderItemsCount() {
    return (
      <>
        <span className="text-gray-300 hidden sm:inline-block">
          {tasks.quantity}
          {' '}
          {getListFooterItensCountString(tasks.quantity)}
        </span>
        <span className="flex-1 hidden lg:inline"></span>
      </>
    );
  }

  function renderFilterButtons() {
    return (
      <>
        <FooterButton
          isSelected={tasks.isDisplayingAll()}
          onClick={() => handleChange(tasks.removeFilter())}
          className="hidden md:inline"
        >
          All
        </FooterButton>
        
        <FooterButton
          isSelected={tasks.isDisplayingActive()}
          onClick={() => handleChange(tasks.filterActive())}
          className='mx-4'
        >
          Active
        </FooterButton>

        <FooterButton
          isSelected={tasks.isDisplayingDone()}
          onClick={() => handleChange(tasks.filterDone())}
        >
          Done
        </FooterButton>
      </>
    );
  }

  function renderRemoveDone() {
    return (
      <>
      <span className="flex-grow"></span>
        <FooterButton
          onClick={() => handleChange(tasks.removeDone())}
        >
          Remove <span className="hidden md:inline"> Done</span>
        </FooterButton>
      </>
    )
  }

  return (
    <li className="flex p-5">
      {renderItemsCount()}
      {renderFilterButtons()}
      {renderRemoveDone()}
    </li>
  );
}

export default ListFooter;
