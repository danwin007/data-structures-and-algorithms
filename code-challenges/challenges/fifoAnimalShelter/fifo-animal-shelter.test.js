'use strict';

const AnimalShelter = require('./fifo-animal-shelter.js');

describe('Happy Path', () => {
    it('can add animal', () => {
      let shelter = new AnimalShelter();

      shelter.enqueue('cat');

      expect(shelter.front.type).toBe('cat');
    });

    it('can add more than one animal', () => {

      let shelter = new AnimalShelter();

      shelter.enqueue('cat');
      shelter.enqueue('dog');
      shelter.enqueue('cat');
    
      expect(shelter.front.type).toBe('cat');
      expect(shelter.front.next.type).toBe('dog');
      expect(shelter.front.next.next.type).toBe('cat');
    });

  it('can dequeue from list', () => {

    let shelter = new AnimalShelter();

    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    shelter.dequeue('dog');

    expect(shelter.front.type).toBe('cat');
    expect(shelter.front.next.type).toBe('cat');
    expect(shelter.front.next.next).toBe(null);
  });
});

describe('Expected Failure', () => {
  it('throw error when adding wrong type', () => {

    let shelter = new AnimalShelter();
  
    expect(() => {
      shelter.enqueue('varmint');
    }).toThrow();
  });

  it('throw error when dequeuing from empty list', () => {

    let shelter = new AnimalShelter();
  
    expect(() => {
      shelter.dequeue('dog');
    }).toThrow();
});
});

describe('Edge Cases', () => {
  it('throw error when dequeueing wrong type', () => {

  let shelter = new AnimalShelter();

    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('cat');

    expect(() => {
      shelter.dequeue('varmint');
    }).toThrow();
  });
});