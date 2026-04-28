class Rectangle {
  constructor(longueur, largeur) {
    if (longueur <= 0 || largeur <= 0) {
      throw new Error('Les côtés doivent être positifs');
    }

    this.longueur = longueur;
    this.largeur = largeur;
  }

  // Calcule le périmètre du rectangle
  getPerimeter() {
    return 2 * (this.longueur + this.largeur);
  }

  // Calcule l'aire du rectangle
  getArea() {
    return this.longueur * this.largeur;
  }

  // Détermine le type de rectangle
  getType() {
    if (this.longueur === this.largeur) {
      return 'carré';
    } else {
      return 'rectangle';
    }
  }
}

module.exports = Rectangle;
