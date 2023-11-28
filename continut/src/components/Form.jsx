import { forwardRef } from 'react';
import Image from '../assets/poster.png';

const Form = forwardRef((props, contributeRef) => {
    return (
        <div ref={contributeRef} className="form">
            <h1>Contribuie și tu!</h1>
            <img src={Image} alt="" />
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdKuYfiiM-0GDaEYNJNAEWOED8YGIwiy4uEdk37xJyH6UsKwg/viewform">Mergi către form</a>
        </div>
    );
})

export default Form;