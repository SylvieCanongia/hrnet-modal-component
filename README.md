# hrnet-modal-component

This library is part of a project of my Openclassrooms course. It's a simple Modal React component displaying a text message.

## Installation

```bash
  npm install hrnet-modal-component
```

## Usage in your react project

Call the component with the right props. Here's an example of what you can do :

```javascript
// App.js
import { useState } from "react";
import { Modal } from 'hrnet-modal-component';

const MyComponent = () => {

  // Define the state variables here
  const [openModal, setOpenModal] = useState(false);

  ...
  // 'onClick' event to open the modal
  <button onClick={() => setOpenModal(true)}>Open</button>
  ...

  // A way to show the modal with conditional rendering
  { openModal &&
  <Modal
    onClose={() => setOpenModal(false)}
    message="Put your custom message to display here !"/>
    }
}

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal;
```

## See the project on Github : [hrnet-modal-component](https://github.com/SylvieCanongia/hrnet-modal-component)

If you want to clone the repository :

`git clone https://github.com/SylvieCanongia/hrnet-modal-component.git`

Inside the repository, install dependencies :

`npm install`

Launch the app :

`npm start`

You can see the app at URL <http://localhost:3000>
