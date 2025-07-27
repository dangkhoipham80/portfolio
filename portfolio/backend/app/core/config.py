from typing import List, Union
from pydantic import field_validator
from pydantic_settings import BaseSettings
import json

class Settings(BaseSettings):
    # Application Settings
    PROJECT_NAME: str
    VERSION: str
    API_V1_STR: str

    # CORS
    BACKEND_CORS_ORIGINS: str

    @field_validator("BACKEND_CORS_ORIGINS", mode="after")
    @classmethod
    def assemble_cors_origins(cls, v: str) -> List[str]:
        if isinstance(v, str):
            return [i.strip() for i in v.split(",") if i.strip()]
        return []

    # Database
    DATABASE_URL: str

    # Security
    SECRET_KEY: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int

    # Email Configuration
    SMTP_TLS: bool
    SMTP_PORT: int
    SMTP_HOST: str
    SMTP_USER: str
    SMTP_PASSWORD: str
    EMAILS_FROM_EMAIL: str
    EMAILS_FROM_NAME: str

    # Development Settings
    DEBUG: bool
    ENVIRONMENT: str

    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()