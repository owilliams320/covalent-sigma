// Example Content
import * as tableContent from "./demos/table.content.html";
import * as tableRowSelectionContent from "./demos/table-row-selection.content.html";
import * as tablePagination from "./demos/table-pagination.content.html";
import * as tableProgressIndicator from "./demos/table-progress-indicator.content.html";
import * as tableColumnSorting from "./demos/table-column-sorting.content.html";

export default {
  title: "Example/Data Table",
  parameters: {
//    layout: "fullscreen",
  }
};

export const Basic = ({}) => tableContent;
export const RowSelection = ({}) => tableRowSelectionContent;
export const WithPagination = ({}) => tablePagination;
export const WithColumnSorting = ({}) => tableColumnSorting;
export const ProgressIndicator = ({}) => tableProgressIndicator;

