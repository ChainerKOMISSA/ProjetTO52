from fastapi import FastAPI
from typing import Union

app = FastAPI()

@app.get("/")
def function():
    return {"Just a try"}





if __name__ == '__main__':
    print()
