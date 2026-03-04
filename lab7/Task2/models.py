class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return "Some generic animal sound"

    def info(self):
        return f"{self.name} is a {self.age}-year-old {self.species}"

    def __str__(self):
        return self.info()


class Dog(Animal):
    def __init__(self, name, age, breed, is_trained):
        super().__init__(name, age, "Dog")
        self.breed = breed
        self.is_trained = is_trained

    def speak(self):
        return "Woof!"

    def train_status(self):
        return f"{self.name} is {'trained' if self.is_trained else 'not trained'}"

    def __str__(self):
        return f"{self.info()}, Breed: {self.breed}"


class Cat(Animal):
    def __init__(self, name, age, color, lives_left=9):
        super().__init__(name, age, "Cat")
        self.color = color
        self.lives_left = lives_left

    def speak(self):
        return "Meow!"

    def lose_life(self):
        if self.lives_left > 0:
            self.lives_left -= 1
        return self.lives_left

    def __str__(self):
        return f"{self.info()}, Color: {self.color}, Lives left: {self.lives_left}"