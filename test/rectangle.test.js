// test/rectangle.test.js

const { expect } = require('chai');
const Rectangle = require('../src/rectangle');

describe('Rectangle', () => {
  describe('Constructor', () => {
    it('devrait créer un rectangle avec des dimensions valides', () => {
      const rectangle = new Rectangle(5, 3);
      expect(rectangle.longueur).to.equal(5);
      expect(rectangle.largeur).to.equal(3);
    });

    it('devrait lever une erreur si une dimension est négative', () => {
      expect(() => new Rectangle(-1, 3)).to.throw('Les côtés doivent être positifs');
    });

    it('devrait lever une erreur si une dimension est zéro', () => {
      expect(() => new Rectangle(0, 3)).to.throw('Les côtés doivent être positifs');
    });
  });

  describe('perimeter()', () => {
    it('devrait calculer le périmètre correctement', () => {
      const rectangle = new Rectangle(5, 3);
      expect(rectangle.getPerimeter()).to.equal(16);
    });

    it('devrait calculer le périmètre d’un carré', () => {
      const rectangle = new Rectangle(4, 4);
      expect(rectangle.getPerimeter()).to.equal(16);
    });
  });

  describe('area()', () => {
    it('devrait calculer l’aire correctement', () => {
      const rectangle = new Rectangle(5, 3);
      expect(rectangle.getArea()).to.equal(15);
    });

    it('devrait calculer l’aire d’un carré', () => {
      const rectangle = new Rectangle(4, 4);
      expect(rectangle.getArea()).to.equal(16);
    });
  });

  describe('type()', () => {
    it('devrait identifier un carré', () => {
      const rectangle = new Rectangle(5, 5);
      expect(rectangle.getType()).to.equal('carré');
    });

    it('devrait identifier un rectangle non carré', () => {
      const rectangle = new Rectangle(5, 3);
      expect(rectangle.getType()).to.equal('rectangle');
    });
  });
});
