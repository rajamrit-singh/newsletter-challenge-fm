let emailAddress = "amrit@gmail.com";

const onFormSubmit = (event: Event) : void => {
    event.preventDefault();
    const emailAddressEl = document.querySelector('.form-input-email') as HTMLInputElement;
    emailAddress = emailAddressEl.value;
    const emailAddressSpan = document.getElementById('email-address') as HTMLSpanElement;
    emailAddressSpan.innerHTML = emailAddress;

    const main = document.getElementById('main') as HTMLDivElement;
    main.setAttribute('display', 'none');
    const successPage = document.getElementById('success-page') as HTMLDivElement;
    successPage.setAttribute('display', 'grid');
}   