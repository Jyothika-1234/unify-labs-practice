class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this._health = 100;
  }

  get health() { return this._health; }

  set health(value) {
    this._health = Math.min(Math.max(value, 0), 100);
    this.updateUI(); // Auto-update UI whenever health changes
  }

  feed() { this.health += 15; }
  play() { this.health -= 20; }

  updateUI() {
    document.getElementById('healthText').innerText = this.health;
    document.getElementById('healthBar').style.width = this.health + "%";
    
    // Change bar color based on health
    const bar = document.getElementById('healthBar');
    bar.style.backgroundColor = this.health < 30 ? "#f44336" : "#4caf50";
  }
}

// Initialize the Pet
const myPet = new Pet("Luna", "Cat");

// Setup initial display
document.getElementById('petNameText').innerText = myPet.name;
document.getElementById('petTypeText').innerText = myPet.type;

// Global functions for the HTML buttons
function uiFeed() { myPet.feed(); }
function uiPlay() { myPet.play(); }

