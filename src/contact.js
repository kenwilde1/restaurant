const loadContactPage = () => {

    const contentContainer = document.querySelector('#content');
    const contactDiv = document.createElement('div');
    const formElement = document.createElement('form');
    const newline = document.createElement('br');

    formElement.id = 'contact-form';

    const emailLabel = document.createElement('label');
    emailLabel.for = 'email';
    emailLabel.innerHTML = 'Email:'
    const emailField = document.createElement('input');
    emailField.type = 'text';
    emailField.name = emailLabel.for;

    const messageLabel = document.createElement('label');
    messageLabel.for = 'message';
    messageLabel.innerHTML = 'Message:'
    const messageField = document.createElement('textarea');
    messageField.setAttribute('form', formElement.id);

    formElement.appendChild(emailLabel);
    formElement.appendChild(emailField);
    formElement.appendChild(newline);
    formElement.appendChild(messageLabel);
    formElement.appendChild(messageField);

    contactDiv.appendChild(formElement);
    contentContainer.appendChild(contactDiv);

    console.log(contentContainer);

};

export default loadContactPage;