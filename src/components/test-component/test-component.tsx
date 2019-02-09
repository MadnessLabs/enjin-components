import { Component } from '@stencil/core';

import Tunnel from '../../data/message';

@Component({
    tag: 'enjin-test-component'
})
export class TestComponent {
    render() {
        return (
            <Tunnel.Consumer>
                {({ message, increment }) => (
                    <div>
                        <p onClick={increment}>{message}</p>
                    </div>
                )}
            </Tunnel.Consumer>
        );
    }
}
