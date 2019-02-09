import { Component } from '@stencil/core';

import Tunnel from '../../providers/message';

@Component({
    tag: 'enjin-test-component'
})
export class TestComponent {
    render() {
        return (
            <div>
                <Tunnel.Consumer>
                    {({ message, increment }) => (
                        <p onClick={increment}>{message}</p>
                    )}
                </Tunnel.Consumer>
            </div>
        );
    }
}
