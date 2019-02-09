/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/state-tunnel';


export namespace Components {

  interface EnjinGallery {
    'intro': string;
  }
  interface EnjinGalleryAttributes extends StencilHTMLAttributes {
    'intro'?: string;
  }

  interface EnjinOrganism {
    /**
    * A description of what the organism does
    */
    'description'?: string;
    /**
    * The name of the organism
    */
    'name': string;
    /**
    * A list of props with descriptions
    */
    'propList'?: {
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
    'viewLess': () => Promise<void>;
    /**
    * Expand organism to show preview frame and props info
    */
    'viewMore': (options?: { scrollIntoView: boolean; }) => Promise<void>;
  }
  interface EnjinOrganismAttributes extends StencilHTMLAttributes {
    /**
    * A description of what the organism does
    */
    'description'?: string;
    /**
    * The name of the organism
    */
    'name'?: string;
    /**
    * A list of props with descriptions
    */
    'propList'?: {
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

  interface EnjinStarRating {}
  interface EnjinStarRatingAttributes extends StencilHTMLAttributes {
    'onEnjinStarRating'?: (event: CustomEvent) => void;
  }

  interface EnjinTestComponent {}
  interface EnjinTestComponentAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'EnjinGallery': Components.EnjinGallery;
    'EnjinOrganism': Components.EnjinOrganism;
    'EnjinStarRating': Components.EnjinStarRating;
    'EnjinTestComponent': Components.EnjinTestComponent;
  }

  interface StencilIntrinsicElements {
    'enjin-gallery': Components.EnjinGalleryAttributes;
    'enjin-organism': Components.EnjinOrganismAttributes;
    'enjin-star-rating': Components.EnjinStarRatingAttributes;
    'enjin-test-component': Components.EnjinTestComponentAttributes;
  }


  interface HTMLEnjinGalleryElement extends Components.EnjinGallery, HTMLStencilElement {}
  var HTMLEnjinGalleryElement: {
    prototype: HTMLEnjinGalleryElement;
    new (): HTMLEnjinGalleryElement;
  };

  interface HTMLEnjinOrganismElement extends Components.EnjinOrganism, HTMLStencilElement {}
  var HTMLEnjinOrganismElement: {
    prototype: HTMLEnjinOrganismElement;
    new (): HTMLEnjinOrganismElement;
  };

  interface HTMLEnjinStarRatingElement extends Components.EnjinStarRating, HTMLStencilElement {}
  var HTMLEnjinStarRatingElement: {
    prototype: HTMLEnjinStarRatingElement;
    new (): HTMLEnjinStarRatingElement;
  };

  interface HTMLEnjinTestComponentElement extends Components.EnjinTestComponent, HTMLStencilElement {}
  var HTMLEnjinTestComponentElement: {
    prototype: HTMLEnjinTestComponentElement;
    new (): HTMLEnjinTestComponentElement;
  };

  interface HTMLElementTagNameMap {
    'enjin-gallery': HTMLEnjinGalleryElement
    'enjin-organism': HTMLEnjinOrganismElement
    'enjin-star-rating': HTMLEnjinStarRatingElement
    'enjin-test-component': HTMLEnjinTestComponentElement
  }

  interface ElementTagNameMap {
    'enjin-gallery': HTMLEnjinGalleryElement;
    'enjin-organism': HTMLEnjinOrganismElement;
    'enjin-star-rating': HTMLEnjinStarRatingElement;
    'enjin-test-component': HTMLEnjinTestComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
