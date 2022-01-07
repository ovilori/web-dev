#This code takes care of flight booking for an airline by ensuring that the flights does not get overbooked.

class Flight():
    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

    def add_passenger(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True

    def open_seats(self):
        return self.capacity - len(self.passengers)
              

flight = Flight(3)
people = ["Olamide", "Vincent", "Ifeoluwa", "Ilori"]
for individual in people:
    if flight.add_passenger(individual):
        print(f"Added {individual} to flight successfully.")
    else:
        print(f"No available seats for {individual}.")

    