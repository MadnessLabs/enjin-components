import { Component } from '@stencil/core';


@Component({
    tag: 'enjin-test-component'
})
export class TestComponent {
    render() {
        return (
            <div>
                <p>Hello TestComponent!</p>
            </div>
        );
    }
}
