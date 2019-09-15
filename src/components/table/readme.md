# enjin-table



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                       | Type                                                                                     | Default |
| --------- | --------- | --------------------------------- | ---------------------------------------------------------------------------------------- | ------- |
| `columns` | --        | The columns to show for the table | `{ header: string; type?: "date"; key?: string; value?: string; sortable?: boolean; }[]` | `[]`    |
| `rows`    | --        | The rows of data to display       | `any[]`                                                                                  | `[]`    |


## Events

| Event       | Description                             | Type                                                                 |
| ----------- | --------------------------------------- | -------------------------------------------------------------------- |
| `enjinSort` | Fires when the column header is clicked | `CustomEvent<{ event: any; sort: { ["key"]?: "asc" \| "desc"; }; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
