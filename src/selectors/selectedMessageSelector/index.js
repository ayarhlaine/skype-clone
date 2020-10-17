import { createSelector } from 'reselect';
const selectedMessageSelector = createSelector(
    state => state.selectedMessage,
    selectedMessage => selectedMessage,
)
export {
    selectedMessageSelector,
};