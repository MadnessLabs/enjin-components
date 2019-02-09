import { createProviderConsumer } from '@stencil/state-tunnel';

export interface State {
  message?: string,
  increment?: () => void
}

export default createProviderConsumer<State>({
    message: 'Hello!'
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
);