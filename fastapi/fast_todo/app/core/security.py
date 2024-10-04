from passlib.context import CryptContext
from typing import Union, Any
from datetime import datetime, timedelta, timezone
from jose import jwt
from core.config import settings

password_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password: str) -> str:
    return password_context.hash(password)

def verify_password(password: str, hash_password: str) -> bool:
    return password_context.verify(password, hash_password)
 
# def create_access_token(subject: Union[str, Any], expires_delta: int = None) -> str:
#     if expires_delta is not None:
#         expires = datetime.now(timezone.utc) + expires_delta
#     else:
#         expires = datetime.now(timezone.utc) + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
#     to_encode = {'exp': expires, 'sub': str(subject)}
#     encoded_jwt = jwt.encode(to_encode, settings.JWT_SECRET_KEY, algorithm=settings.ALGORITHM)
#     return encoded_jwt

# def create_refresh_token(subject: Union[str, Any], expires_delta: int = None) -> str:
#     if expires_delta is not None:
#         expires = datetime.now(timezone.utc) + expires_delta
#     else:
#         expires = datetime.now(timezone.utc) + timedelta(minutes=settings.REFRESH_TOKEN_EXPIRE_MINUTES)
#     to_encode = {'exp': expires, 'sub': str(subject)}
#     encoded_jwt = jwt.encode(to_encode, settings.JWT_REFRESH_SECRET_KEY, algorithm=settings.ALGORITHM)
#     return encoded_jwt

def create_access_token(subject: Union[str, Any], expires_delta: int = None) -> str:
    return create_token(subject, expires_delta, settings.ACCESS_TOKEN_EXPIRE_MINUTES, settings.JWT_SECRET_KEY)

def create_refresh_token(subject: Union[str, Any], expires_delta: int = None) -> str:
    return create_token(subject, expires_delta, settings.REFRESH_TOKEN_EXPIRE_MINUTES, settings.JWT_REFRESH_SECRET_KEY)

def create_token(subject: Union[str, Any], expires_delta: int = None, tempo: str = None, secret_key: str = None) -> str:
    if expires_delta is not None:
        expires = datetime.now(timezone.utc) + expires_delta
    else:
        expires = datetime.now(timezone.utc) + timedelta(minutes=tempo)
    to_encode = {'exp': expires, 'sub': str(subject)}
    encoded_jwt = jwt.encode(to_encode, secret_key, algorithm=settings.ALGORITHM)
    return encoded_jwt




