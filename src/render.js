const init = () => {
  console.log('init started');
  // create a text input
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'input';
  input.placeholder = 'Enter your name';
  render();
}

function render() {
  console.log('render started');
}