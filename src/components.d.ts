/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EnjinGallery {
    }
    interface EnjinOrganism {
        /**
          * A description of what the organism does
         */
        "description"?: string;
        /**
          * The name of the organism
         */
        "name": string;
        /**
          * A list of props with descriptions
         */
        "propList"?: {
    /**
     * The name of the prop
     */
    name: string;
    /**
     * A description of the prop
     */
    description: string;
  }[];
        /**
          * Shrink organism to only show name and description
         */
        "viewLess": () => Promise<void>;
        /**
          * Expand organism to show preview frame and props info
         */
        "viewMore": (options?: { scrollIntoView: boolean; }) => Promise<void>;
    }
    interface EnjinPayWithCard {
        "stripeKey": string;
    }
    interface EnjinStarRating {
        /**
          * Whether or not the field is disabled
         */
        "disabled": boolean;
        /**
          * The max available star rating
         */
        "maxRating": number;
        /**
          * The name of the input
         */
        "name": string;
        /**
          * Set the current rating
         */
        "setCurrentRating": (rating: any) => Promise<void>;
        /**
          * The value of the rating input
         */
        "value": string;
    }
    interface EnjinStarRatingScoped {
        "disabled": boolean;
        "maxRating": number;
        "name": string;
        "setCurrentRating": (rating: any) => Promise<void>;
        "value": string;
    }
    interface EnjinStarRatingShadow {
        "disabled": boolean;
        "maxRating": number;
        "name": string;
        "setCurrentRating": (rating: any) => Promise<void>;
        "value": string;
    }
    interface EnjinTable {
        /**
          * The columns to show for the table
         */
        "columns": {
        header: string;
        type?: "date";
        key?: string;
        value?: string;
        sortable?: boolean;
    }[];
        /**
          * The rows of data to display
         */
        "rows": any[];
    }
    interface EnjinTestComponent {
    }
}
declare global {
    interface HTMLEnjinGalleryElement extends Components.EnjinGallery, HTMLStencilElement {
    }
    var HTMLEnjinGalleryElement: {
        prototype: HTMLEnjinGalleryElement;
        new (): HTMLEnjinGalleryElement;
    };
    interface HTMLEnjinOrganismElement extends Components.EnjinOrganism, HTMLStencilElement {
    }
    var HTMLEnjinOrganismElement: {
        prototype: HTMLEnjinOrganismElement;
        new (): HTMLEnjinOrganismElement;
    };
    interface HTMLEnjinPayWithCardElement extends Components.EnjinPayWithCard, HTMLStencilElement {
    }
    var HTMLEnjinPayWithCardElement: {
        prototype: HTMLEnjinPayWithCardElement;
        new (): HTMLEnjinPayWithCardElement;
    };
    interface HTMLEnjinStarRatingElement extends Components.EnjinStarRating, HTMLStencilElement {
    }
    var HTMLEnjinStarRatingElement: {
        prototype: HTMLEnjinStarRatingElement;
        new (): HTMLEnjinStarRatingElement;
    };
    interface HTMLEnjinStarRatingScopedElement extends Components.EnjinStarRatingScoped, HTMLStencilElement {
    }
    var HTMLEnjinStarRatingScopedElement: {
        prototype: HTMLEnjinStarRatingScopedElement;
        new (): HTMLEnjinStarRatingScopedElement;
    };
    interface HTMLEnjinStarRatingShadowElement extends Components.EnjinStarRatingShadow, HTMLStencilElement {
    }
    var HTMLEnjinStarRatingShadowElement: {
        prototype: HTMLEnjinStarRatingShadowElement;
        new (): HTMLEnjinStarRatingShadowElement;
    };
    interface HTMLEnjinTableElement extends Components.EnjinTable, HTMLStencilElement {
    }
    var HTMLEnjinTableElement: {
        prototype: HTMLEnjinTableElement;
        new (): HTMLEnjinTableElement;
    };
    interface HTMLEnjinTestComponentElement extends Components.EnjinTestComponent, HTMLStencilElement {
    }
    var HTMLEnjinTestComponentElement: {
        prototype: HTMLEnjinTestComponentElement;
        new (): HTMLEnjinTestComponentElement;
    };
    interface HTMLElementTagNameMap {
        "enjin-gallery": HTMLEnjinGalleryElement;
        "enjin-organism": HTMLEnjinOrganismElement;
        "enjin-pay-with-card": HTMLEnjinPayWithCardElement;
        "enjin-star-rating": HTMLEnjinStarRatingElement;
        "enjin-star-rating-scoped": HTMLEnjinStarRatingScopedElement;
        "enjin-star-rating-shadow": HTMLEnjinStarRatingShadowElement;
        "enjin-table": HTMLEnjinTableElement;
        "enjin-test-component": HTMLEnjinTestComponentElement;
    }
}
declare namespace LocalJSX {
    interface EnjinGallery {
    }
    interface EnjinOrganism {
        /**
          * A description of what the organism does
         */
        "description"?: string;
        /**
          * The name of the organism
         */
        "name"?: string;
        /**
          * A list of props with descriptions
         */
        "propList"?: {
    /**
     * The name of the prop
     */
    name: string;
    /**
     * A description of the prop
     */
    description: string;
  }[];
    }
    interface EnjinPayWithCard {
        "onEnjinCardSubmit"?: (event: CustomEvent<any>) => void;
        "stripeKey"?: string;
    }
    interface EnjinStarRating {
        /**
          * Whether or not the field is disabled
         */
        "disabled"?: boolean;
        /**
          * The max available star rating
         */
        "maxRating"?: number;
        /**
          * The name of the input
         */
        "name"?: string;
        "onEnjinStarRating"?: (event: CustomEvent<any>) => void;
        /**
          * The value of the rating input
         */
        "value"?: string;
    }
    interface EnjinStarRatingScoped {
        "disabled"?: boolean;
        "maxRating"?: number;
        "name"?: string;
        "onFtStarRating"?: (event: CustomEvent<any>) => void;
        "value"?: string;
    }
    interface EnjinStarRatingShadow {
        "disabled"?: boolean;
        "maxRating"?: number;
        "name"?: string;
        "onFtStarRating"?: (event: CustomEvent<any>) => void;
        "value"?: string;
    }
    interface EnjinTable {
        /**
          * The columns to show for the table
         */
        "columns"?: {
        header: string;
        type?: "date";
        key?: string;
        value?: string;
        sortable?: boolean;
    }[];
        /**
          * Fires when the column header is clicked
         */
        "onEnjinSort"?: (event: CustomEvent<{
        event: any;
        sort: { ["key"]?: "asc" | "desc" };
    }>) => void;
        /**
          * The rows of data to display
         */
        "rows"?: any[];
    }
    interface EnjinTestComponent {
    }
    interface IntrinsicElements {
        "enjin-gallery": EnjinGallery;
        "enjin-organism": EnjinOrganism;
        "enjin-pay-with-card": EnjinPayWithCard;
        "enjin-star-rating": EnjinStarRating;
        "enjin-star-rating-scoped": EnjinStarRatingScoped;
        "enjin-star-rating-shadow": EnjinStarRatingShadow;
        "enjin-table": EnjinTable;
        "enjin-test-component": EnjinTestComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "enjin-gallery": LocalJSX.EnjinGallery & JSXBase.HTMLAttributes<HTMLEnjinGalleryElement>;
            "enjin-organism": LocalJSX.EnjinOrganism & JSXBase.HTMLAttributes<HTMLEnjinOrganismElement>;
            "enjin-pay-with-card": LocalJSX.EnjinPayWithCard & JSXBase.HTMLAttributes<HTMLEnjinPayWithCardElement>;
            "enjin-star-rating": LocalJSX.EnjinStarRating & JSXBase.HTMLAttributes<HTMLEnjinStarRatingElement>;
            "enjin-star-rating-scoped": LocalJSX.EnjinStarRatingScoped & JSXBase.HTMLAttributes<HTMLEnjinStarRatingScopedElement>;
            "enjin-star-rating-shadow": LocalJSX.EnjinStarRatingShadow & JSXBase.HTMLAttributes<HTMLEnjinStarRatingShadowElement>;
            "enjin-table": LocalJSX.EnjinTable & JSXBase.HTMLAttributes<HTMLEnjinTableElement>;
            "enjin-test-component": LocalJSX.EnjinTestComponent & JSXBase.HTMLAttributes<HTMLEnjinTestComponentElement>;
        }
    }
}
