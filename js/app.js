// Create a simple program that generates a random hero name on browser reload. It must use 3 arrays Names, Powers, Adjective. ie "Incredible Hulk has super stregth".

// Completed random hero before, subd dramas

// Pseudo
// connect submit button to generate function
// connect drama to random drama
// make a list of dramas
// let a random drama be selected everytime submit is pressed

function generateDrama() {
    event.preventDefault();
    
    let drama = document.getElementById('drama');
    
    let dramaList = ['Itaewon Class', 'The Master\'s Sun', 'Secret Garden', 'The Greatest Love', 'Coffee Prince', 'IRIS', 'Boys Over Flowers', 'You\'re All Surrounded', 'Big', 'Goblin', 'Heirs', 'Hospital Playlist', 'It\'s Okay, That\'s Love', 'Signal', 'King2Hearts', 'Crash Landing on You', 'Vagabond', 'Fight My Way', 'Weightlifting Fairy Kim Bokjoo', 'Chief Kim', 'Mr. Sunshine', 'Falling for Innocence', 'Hi Bye Mama', 'Kill Me Heal Me', 'Korean Odyssey', 'Cruel City', 'Bad Guys', 'Romance is a Bonus Book', 'What\'s wrong with Secretary Kim','Prison Playbook', 'Start Up']; 
    
    drama.innerText = dramaList[Math.floor(Math.random() * dramaList.length)];
    
}