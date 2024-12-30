const psGames = 
[
  {
    "title": "God of War",
    "image": "godofwar.jpg",
    "description": "Join Kratos on his quest through Norse mythology.",
    "url": "https://www.playstation.com/en-us/games/god-of-war/"
  },
  {
    "title": "Marvel's Spider-Man Remastered",
    "image": "marvel.jpg",
    "description": "Swing through New York City as Spider-Man.",
    "url": "https://www.playstation.com/en-us/games/marvels-spider-man-remastered/"
  },
  {
    "title": "The Last of Us Part II",
    "image": "lou.jpg",
    "description": "Experience Ellie's emotional journey in a post-apocalyptic world.",
    "url": "https://www.playstation.com/en-us/games/the-last-of-us-part-ii/"
  },
  {
    "title": "Horizon Forbidden West",
    "image": "horizon.jpg",
    "description": "Explore the stunning open world with Aloy as she uncovers hidden secrets.",
    "url": "https://www.playstation.com/en-us/games/horizon-forbidden-west/"
  },
  {
    "title": "Ghost of Tsushima",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1780570/header.jpg",
    "description": "Become a legendary samurai in feudal Japan.",
    "url": "https://www.playstation.com/en-us/games/ghost-of-tsushima/"
  },
  {
    "title": "Gran Turismo 7",
    "image": "GT7.jpg",
    "description": "The ultimate driving simulation experience on PlayStation.",
    "url": "https://www.playstation.com/en-us/games/gran-turismo-7/"
  },
  {
    "title": "Elden Ring: Shadow of the Erdtree",
    "image": "EdenR.jpg",
    "description": "An expansive expansion to the acclaimed Elden Ring, introducing new challenges and lore.",
    "url": "https://www.bandainamcoent.com/games/elden-ring-shadow-of-the-erdtree"
  },
  {
    "title": "Metaphor: ReFantazio",
    "image": "metaphor.jpg",
    "description": "A high-fantasy RPG from the creators of Persona, blending unique storytelling with turn-based combat.",
    "url": "https://atlus.com/metaphor-refantazio"
  },
  {
    "title": "Astro Bot",
    "image": "astro.jpg",
    "description": "A charming platformer that showcases the capabilities of the latest gaming hardware.",
    "url": "https://www.playstation.com/en-us/games/astro-bot/"
  },
  {
    "title": "Animal Well",
    "image": "animal.jpg",
    "description": "An atmospheric exploration game with intricate puzzles and a unique art style.",
    "url": "https://www.animalwell.com"
  },
  {
    "title": "Balatro",
    "image": "balatro.jpg",
    "description": "A poker roguelike that combines card game mechanics with strategic depth.",
    "url": "https://www.balatro.com"
  }
    

  
]


    




const xboxGames = [
{ 
    "title": "Halo Infinite", 
    "image": "halo.jpg", 
    "description": "Master Chief returns in Halo Infinite." 
},
{ 
    "title": "Forza Horizon 5", 
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg", 
    "description": "Experience open-world racing at its finest." 
},
{ 
    "title": "Gears 5", 
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1097840/header.jpg", 
    "description": "The iconic shooter series returns with Kait Diaz's epic story." 
},

{ 
    "title": "Sea of Thieves", 
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1172620/header.jpg", 
    "description": "Embark on a pirate adventure and conquer the seas." 
},
{ 
    "title": "Fable", 
    "image": "fable.jpg", 
    "description": "A new journey awaits in the magical land of Albion." 
},
{ 
  "title": "Microsoft Flight Simulator", 
 " image": "mfs.jpg", 
  "description": "Fly across the world with cutting-edge realism." 
},
]
const populargames=
[
{
"title": "FC 25",
"image": "FC25.jpg",
"description": "Experience the next generation of football with advanced gameplay mechanics and stunning visuals."
},
{
"title": "Call of Duty: Modern Warfare III",
"image": "cod.jpg",
"description": "Join thrilling combat missions in this reboot of the classic Modern Warfare series."
},
{
"title": "Fortnite",
"image": "fortnite.jpg",
"description": "Build, battle, and survive in this ever-popular battle royale game."
},
{
"title": "Assassin's Creed Mirage",
"image": "mirage.jpg",
"description": "Step into the shoes of an assassin in this richly detailed historical action-adventure."
},
{
"title": "Cyberpunk 2077",
"image": "cyberpunk.jpg",
"description": "Explore the open-world dystopia of Night City in this immersive RPG."
},

{
"title": "Hogwarts Legacy",
"image": "hogwarts.jpg",
"description": "Discover the magical world of Harry Potter in this open-world adventure set in Hogwarts."
},
{
"title": "Mortal Kombat 11",
"image": "MK.jpg",
"description": "Engage in intense battles with iconic fighters in the latest installment of the Mortal Kombat franchise."
},
{
"title": "Diablo IV",
"image": "diablo.jpg",
"description": "Return to Sanctuary in this dark, action-packed dungeon crawler."
},
{
"title": "Grand Theft Auto V",
"image": "GTAV.jpg",
"description": "Live the criminal life in the sprawling open world of Los Santos."
}
]

// Load Games into Carousels
function loadGames(games, containerId) {
    const container = document.querySelector(`#${containerId} .carousel`);
    container.innerHTML = ''; // Clear previous games
    games.forEach(game => {
      const card = document.createElement('div');
      card.classList.add('game-card');
      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}" onclick="showDetails('${game.title}', '${game.image}', '${game.description}')">
        <h3>${game.title}</h3>
        <div class="rating" data-title="${game.title}">
          ${[...Array(5)].map((_, i) => `<span class="star" data-rating="${i + 1}">&#9734;</span>`).join('')}
          <p class="average-rating">Rating: 0</p> <!-- Changed from N/A to 0 -->
        </div>
      `;
      container.appendChild(card);
    });
  
    // Add event listeners for ratings
    document.querySelectorAll('.rating .star').forEach(star => {
      star.addEventListener('click', handleRating);
    });
  }
  
  // Handle User Ratings
  const ratings = {}; // Store ratings per game
  function handleRating(event) {
    const selectedStar = event.target;
    const rating = parseInt(selectedStar.getAttribute('data-rating'));
    const ratingContainer = selectedStar.closest('.rating');
    const gameTitle = ratingContainer.getAttribute('data-title');
  
    // Toggle the rating for the game
    if (ratings[gameTitle] === rating) {
      // If the same star is clicked again, reduce the rating
      ratings[gameTitle] = 0;
    } else {
      // Otherwise, increase the rating
      ratings[gameTitle] = rating;
    }
  
    // Update the average rating display
    const averageRating = ratings[gameTitle] > 0 ? ratings[gameTitle].toFixed(1) : '0';
    ratingContainer.querySelector('.average-rating').innerText = `Rating: ${averageRating}`;
  
    // Highlight the selected stars
    ratingContainer.querySelectorAll('.star').forEach(star => {
      const starRating = parseInt(star.getAttribute('data-rating'));
      if (starRating <= ratings[gameTitle]) {
        star.innerHTML = '&#9733;'; // Filled star
        star.style.color = 'gold';
      } else {
        star.innerHTML = '&#9734;'; // Empty star
        star.style.color = 'gray';
      }
    });
  }
  
  // Scroll Carousel
  function scrollCarousel(containerId, direction) {
    const container = document.querySelector(`#${containerId} .carousel`);
    const scrollAmount = 220; // Width of one game card + gap
    container.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
  }
  
  // Show Game Details in Modal
  function showDetails(title, image, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('gameModal').style.display = 'flex';
  }
  
  // Close Modal
  function closeModal() {
    document.getElementById('gameModal').style.display = 'none';
  }
  
  // Filter Games by Title
  function filterGames() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    document.querySelectorAll('.game-card').forEach(card => {
      const title = card.querySelector('h3').innerText.toLowerCase();
      card.style.display = title.includes(query) ? 'block' : 'none';
    });
  }
  
  // Load Games on Page Load
  document.addEventListener('DOMContentLoaded', () => {
    loadGames(psGames, 'ps-games');
    loadGames(xboxGames, 'xbox-games');
    loadGames(populargames, 'popular-games');
  });
   
  
   
