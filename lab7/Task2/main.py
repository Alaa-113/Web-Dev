from models import Animal, Dog, Cat

def main():
   
    animals = [
        Dog("Buddy", 3, "Golden Retriever", True),
        Dog("Max", 2, "Bulldog", False),
        Cat("Whiskers", 4, "Black", 7),
        Cat("Mittens", 1, "White", 9),
        Animal("Animal", 5, "Unknown")
    ]

    for animal in animals:
        print(animal)               
        print(f"Sound: {animal.speak()}")  
        if isinstance(animal, Dog):
            print(animal.train_status())
        elif isinstance(animal, Cat):
            animal.lose_life()
            print(f"Lives left after adventure: {animal.lives_left}")
        print("-" * 40)


if __name__ == "__main__":
    main()
