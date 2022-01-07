#This program compares and sorts two dictionaries using their key or values.
people = [
    {"name":"Olamide", "house":"Surulere"},
    {"name":"Caleb", "house":"Ajah"},
    {"name":"Harry", "house":"Tinubu"}
]

#sort using key(name)
#def f(person):
    #return person["name"]
#people.sort(key=f)

people.sort(key=lambda person: person["name"])
print(people)

#soprt using values(house)
#def f(home):
    #return home["house"]
#people.sort(key=f)
people.sort(key=lambda home: home["house"])
print(people)
