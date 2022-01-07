#Program that handles exception from user input
import sys

#take user input and check for error
try:
    x = int(input("x: "))
    y = int(input("y: "))
except ValueError:
    print("Error: Invalid input.")
    sys.exit(1)

#perform division and check for error
try:
    result = print(f'The result of {x}/{y} is {x/y}')
except ZeroDivisionError:
    print(f'Error: Cannot divide {x} by 0.')
    sys.exit(1)