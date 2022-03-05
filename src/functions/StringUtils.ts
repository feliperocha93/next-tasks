export function getListFooterItensCountString(q: number): string {
  switch (q) {
    case 0:
      return 'No tasks found'
    case 1:
      return 'Task Found';
    default:
      return 'Tasks Found';
  }
}