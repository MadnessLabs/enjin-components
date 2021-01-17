import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'enjin-test-component'
})
export class TestComponent {
    // A True of False value
    @Prop() boolean = false;
    // A text value
    @Prop() string = "";
    // A Javascript Object value
    @Prop() object: any = {};
    // A Javascript Array value
    @Prop() array: any = [];
    // A Javascript Function value
    @Prop() fn: () => any;

    render() {
        return (
            <div>
                <slot />
            </div>
        );
    }
}
