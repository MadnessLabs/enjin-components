import {
    Component,
    Event,
    EventEmitter,
    Prop,
    State,
    h
} from "@stencil/core";

@Component({
    tag: "enjin-table",
    styleUrl: "table.css"
})
export class EnjinTable {
    tableEl: HTMLTableElement;

    /**
     * The rows of data to display
     */
    @Prop() rows: any[] = [];
    /**
     * The columns to show for the table
     */
    @Prop() columns: {
        header: string;
        type?: "date";
        key?: string;
        value?: string;
        sortable?: boolean;
    }[] = [];

    @State() currentSort: { ["key"]?: "asc" | "desc" } = {};

    /**
     * Fires when the column header is clicked
     */
    @Event() enjinSort: EventEmitter<{
        event: any;
        sort: { ["key"]?: "asc" | "desc" };
    }>;

    /**
     * Get the value for the current table cell
     * @param record The row of data
     * @param key The key of the data to display
     * @param type The formatting type of the cell
     */
    getValue(record: any, key: string) {
        let value = !key
            ? record
            : key && key.indexOf(".") >= 0
            ? key.split(".").reduce((p, c) => (p && p[c]) || null, record)
            : key && typeof record[key] !== "undefined"
            ? record[key]
            : null;

        return value;
    }

    sortColumn(
        event,
        column: {
            header: string;
            type?: "date";
            key?: string;
            value?: string;
            sortable?: boolean;
        }
    ) {
        this.currentSort[column.key] =
            this.currentSort[column.key] &&
            this.currentSort[column.key] === "asc"
                ? "desc"
                : this.currentSort[column.key] &&
                  this.currentSort[column.key] === "desc"
                ? (this.currentSort[column.key] = null)
                : "asc";
        this.currentSort = { ...this.currentSort };
        this.enjinSort.emit({ event, sort: this.currentSort });
    }

    render() {
        return (
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            {this.columns &&
                                this.columns.map &&
                                this.columns.map(column => (
                                    <td
                                        onClick={event =>
                                            column.sortable
                                                ? this.sortColumn(event, column)
                                                : null
                                        }
                                    >
                                        {column.header}
                                        {this.currentSort[column.key] && (
                                            <ion-icon
                                                name={
                                                    this.currentSort[
                                                        column.key
                                                    ] === "asc"
                                                        ? "arrow-dropup"
                                                        : "arrow-dropdown"
                                                }
                                            />
                                        )}
                                    </td>
                                ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.rows &&
                            this.rows.map &&
                            this.rows.map((row, _index: any) => (
                                <tr>
                                    {this.columns &&
                                        this.columns.map &&
                                        this.columns.map(column => (
                                            <td>
                                                {column.key
                                                    ? this.getValue(
                                                          row,
                                                          column.key
                                                      )
                                                    : column.value}
                                            </td>
                                        ))}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
