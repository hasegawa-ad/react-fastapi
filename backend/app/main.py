from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/",response_model=schemas.User)
def create_user(user:schemas.UserCreate,db:Session=Depends(get_db)):
    db_user = crud.get_user_by_name(db,name=user.name)
    if db_user:
        raise HTTPException(status_code=400,detail="Name already registered")

    return crud.create_user(db=db,user=user)

@app.get("/users/",response_model=schemas.User)
def read_user(name:str,password:str,db:Session=Depends(get_db)):
    db_user = crud.get_user_by_name_by_password(db,name=name,password=password)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user