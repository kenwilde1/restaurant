const loadSummary = () => {

    const contentContainer = document.querySelector('#content');
    const summary = document.createElement('div');
    const heading = document.createElement('h2');
    const description = document.createElement('p');

    heading.innerHTML = `Sophie's`;
    description.innerHTML = `Sophie’s is a beautiful and modern glasshouse restaurant, boasting stunning 360 degree views of Dublin, from cityscape to countryside, it has an outlook like no other – Dublin’s weather is our wallpaper!`;

    summary.appendChild(heading);
    summary.appendChild(description);

    contentContainer.appendChild(summary);

}

export default loadSummary;