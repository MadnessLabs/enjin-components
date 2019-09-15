import { storiesOf } from '@storybook/html';
import { withActions } from "@storybook/addon-actions";

import readme from "./readme.md";

storiesOf('Table', module)
  .addDecorator(withActions("enjinSort"))
  .addParameters({ jest: ["table"] })
  .add('Default', () => '<enjin-table></enjin-table>', {
    notes: {
      markdown: readme
    }
  })
  .add('With Data', () => {
    const tableEl = document.createElement('enjin-table');
    tableEl.columns = [
        {
            header: "Column 1",
            key: "col1",
            sortable: true
        }
    ];
    tableEl.rows = [{
        col1: 'testing'
    }];

    return tableEl;
  }, {
    notes: {
      markdown: readme
    }
  });