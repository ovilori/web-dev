#decorator example. Decorators takes a function as an input, modifies/add some functionality and returns it as an output.
def announce(f):
    def wrapper():
        print("About to run the function...")
        f()
        print("Done with the function.")
    return wrapper

@announce
def hello():
    print("Hello, world!")

hello()
