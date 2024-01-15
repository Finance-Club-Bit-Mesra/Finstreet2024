document.addEventListener('DOMContentLoaded', function () {
    const sponsorsContainer = document.getElementById('sponsors-container');

    const sponsors = [
        { name: 'Sponsor C', logo: './FinEzzy-Logohigh-1-1024x349.png' },
        { name: 'Sponsor C', logo: './StockGro logo - Black Font - White Background (1).png' },
        { name: 'Sponsor C', logo: './unstop.jpg' },
        { name: 'Sponsor C', logo: './nutanCreation.jpg' },
        // { name: 'Sponsor C', logo: '64e6177329c2d71389b1b219_walmart.png' },
        // { name: 'Sponsor C', logo: '64e6177329c2d71389b1b219_walmart.png' }
    ];

    sponsors.forEach(sponsor => {
        const sponsorElement = document.createElement('div');
        sponsorElement.classList.add('sponsor');

        const logoElement = document.createElement('img');
        logoElement.src = sponsor.logo;
        logoElement.alt = sponsor.name + ' Logo';

        sponsorElement.appendChild(logoElement);
        sponsorsContainer.appendChild(sponsorElement);
        
    });
   
    header.style.animation = 'fadeIn 1s ease-in-out forwards';
    header.querySelector('h1').style.animation = 'fadeInUp 1s ease-in-out forwards';
    header.querySelector('p').style.animation = 'fadeInUp 1s ease-in-out 0.5s forwards';
});
