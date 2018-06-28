
export { default as Home } from './Home';
export { default as Owners } from './Owners';
export { default as Tenants } from './Tenants';
export { default as Propertydatabase } from './Propertydatabase';

const thingToDoWhenClicked = (evt) => alert('I was clicked by: ' + evt.srcElement.id);
const thingToDoWhenTimeoutIsOver = () => alert('Timeout completed');
setTimeout(thingToDoWhenTimeoutIsOver, 1000)