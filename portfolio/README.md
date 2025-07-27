# Portfolio Full-Stack Application

A modern portfolio application built with FastAPI (Python) backend and React TypeScript frontend with TailwindCSS, using PostgreSQL as the primary database.

## 🏗️ Architecture

This project follows a clean architecture pattern with clear separation of concerns:

### Backend (FastAPI)

- **API Layer**: RESTful endpoints with automatic OpenAPI documentation
- **Service Layer**: Business logic and data processing
- **Model Layer**: Database models and data validation
- **Schema Layer**: Pydantic models for request/response validation
- **Database**: PostgreSQL with SQLAlchemy ORM and Alembic migrations

### Frontend (React + TypeScript)

- **Components**: Reusable UI components
- **Pages**: Route-based page components
- **Services**: API communication layer
- **Hooks**: Custom React hooks for data fetching
- **Types**: TypeScript type definitions

## 🚀 Quick Start

### Prerequisites

- Python 3.11+
- Node.js 18+
- PostgreSQL 15+ (or Docker)
- Docker (optional)

### Environment Setup

#### Backend Environment Variables

Copy `backend/env.example` to `backend/.env` and configure:

```bash
cd backend
cp env.example .env
# Edit .env with your database credentials
```

#### Frontend Environment Variables

Copy `frontend/env.example` to `frontend/.env` and configure:

```bash
cd frontend
cp env.example .env
# Edit .env with your API URL
```

### Option 1: Local Development

#### Database Setup (PostgreSQL)

```bash
# Install PostgreSQL and create database
createdb portfolio_db
# Or use Docker
docker run --name portfolio-postgres -e POSTGRES_DB=portfolio_db -e POSTGRES_USER=portfolio_user -e POSTGRES_PASSWORD=portfolio_password -p 5432:5432 -d postgres:15
```

#### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Run database migrations
alembic upgrade head

# Start the server
python main.py
```

#### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Option 2: Docker Development

```bash
# Start all services with PostgreSQL
docker-compose up --build
```

### Option 3: Using Development Scripts

#### Windows

```bash
start-dev.bat
```

#### Linux/Mac

```bash
chmod +x start-dev.sh
./start-dev.sh
```

## 📁 Project Structure

```
portfolio/
├── backend/                 # FastAPI Backend
│   ├── app/
│   │   ├── api/            # API Layer - RESTful endpoints
│   │   │   └── v1/         # API Version 1
│   │   │       ├── api.py  # Main router tổng hợp tất cả endpoints
│   │   │       └── endpoints/  # Individual endpoint modules
│   │   │           ├── projects.py    # CRUD operations cho Projects
│   │   │           ├── skills.py      # CRUD operations cho Skills
│   │   │           ├── certificates.py # CRUD operations cho Certificates
│   │   │           └── contacts.py    # CRUD operations cho Contacts
│   │   ├── core/           # Core configuration & database
│   │   │   ├── config.py   # Environment settings & configuration
│   │   │   └── database.py # Database connection & session management
│   │   ├── models/         # Database models (SQLAlchemy ORM)
│   │   │   ├── base.py     # Base model class
│   │   │   └── portfolio.py # Portfolio-specific models
│   │   ├── schemas/        # Pydantic schemas for validation
│   │   │   └── portfolio.py # Request/Response models
│   │   └── services/       # Business logic layer
│   │       └── portfolio_service.py # Portfolio business operations
│   ├── alembic/            # Database migrations
│   │   ├── versions/       # Migration files
│   │   ├── env.py          # Alembic environment
│   │   └── script.py.mako  # Migration template
│   ├── requirements.txt    # Python dependencies
│   ├── alembic.ini         # Alembic configuration
│   ├── env.example         # Environment variables template
│   ├── init-db.py          # Database initialization script
│   ├── main.py             # FastAPI application entry point
│   └── Dockerfile          # Backend container configuration
├── frontend/               # React TypeScript Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Route-based page components
│   │   ├── services/      # API communication layer
│   │   ├── hooks/         # Custom React hooks
│   │   ├── types/         # TypeScript type definitions
│   │   └── utils/         # Utility functions
│   ├── package.json       # Node.js dependencies
│   ├── vite.config.ts     # Vite configuration
│   ├── env.example        # Frontend environment template
│   └── Dockerfile         # Frontend container configuration
├── shared/                 # Shared types/utilities
├── docker-compose.yml      # Multi-container orchestration
├── start-dev.sh           # Development startup script (Linux/Mac)
├── start-dev.bat          # Development startup script (Windows)
├── SETUP.md               # Detailed setup guide
└── README.md              # Project overview
```

### 🏗️ Architecture Layers

#### Backend Architecture (Clean Architecture)

```
┌─────────────────────────────────────────────────────────────┐
│                    API Layer (FastAPI)                      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │  Projects   │ │   Skills    │ │Certificates │           │
│  │  Endpoints  │ │  Endpoints  │ │ Endpoints   │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                  Service Layer (Business Logic)             │
│              PortfolioService - CRUD Operations             │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                  Model Layer (SQLAlchemy ORM)               │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   Project   │ │    Skill    │ │Certificate  │           │
│  │    Model    │ │   Model     │ │   Model     │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    Database (PostgreSQL)                    │
└─────────────────────────────────────────────────────────────┘
```

#### Frontend Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Pages Layer                              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │    Home     │ │   Projects  │ │   Skills    │           │
│  │    Page     │ │    Page     │ │   Page      │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                  Components Layer                           │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   Navbar    │ │ ProjectCard │ │ SkillCard   │           │
│  │ Component   │ │ Component   │ │ Component   │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    Services Layer                           │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │ ProjectsAPI │ │ SkillsAPI   │ │ContactsAPI  │           │
│  │   Service   │ │  Service    │ │  Service    │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    Hooks Layer                              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │ useProjects │ │ useSkills   │ │useContacts  │           │
│  │    Hook     │ │   Hook      │ │   Hook      │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
```

## 🔧 API Endpoints

### Projects

- `GET /api/v1/projects` - Get all projects
- `GET /api/v1/projects?featured_only=true` - Get featured projects only
- `GET /api/v1/projects/{id}` - Get specific project
- `POST /api/v1/projects` - Create new project
- `PUT /api/v1/projects/{id}` - Update project
- `DELETE /api/v1/projects/{id}` - Delete project

### Skills

- `GET /api/v1/skills` - Get all skills
- `GET /api/v1/skills?category=frontend` - Get skills by category
- `GET /api/v1/skills/{id}` - Get specific skill
- `POST /api/v1/skills` - Create new skill
- `PUT /api/v1/skills/{id}` - Update skill
- `DELETE /api/v1/skills/{id}` - Delete skill

### Certificates

- `GET /api/v1/certificates` - Get all certificates
- `GET /api/v1/certificates/{id}` - Get specific certificate
- `POST /api/v1/certificates` - Create new certificate
- `PUT /api/v1/certificates/{id}` - Update certificate
- `DELETE /api/v1/certificates/{id}` - Delete certificate

### Contacts

- `GET /api/v1/contacts` - Get all contacts
- `GET /api/v1/contacts?unread_only=true` - Get unread contacts only
- `GET /api/v1/contacts/{id}` - Get specific contact
- `POST /api/v1/contacts` - Create new contact
- `PUT /api/v1/contacts/{id}/read` - Mark contact as read
- `DELETE /api/v1/contacts/{id}` - Delete contact

## 🛠️ Development

### Backend Development

- FastAPI with automatic OpenAPI documentation
- SQLAlchemy ORM with PostgreSQL
- Pydantic for data validation
- Alembic for database migrations
- Environment-based configuration

### Frontend Development

- React 19 with TypeScript
- Vite for fast development and building
- TailwindCSS for styling
- React Router for navigation
- Custom hooks for API integration

### Database

- PostgreSQL 15+ for production-ready database
- Alembic migrations for schema management
- Connection pooling and health checks
- Automatic table creation on startup

### Database Migrations

```bash
cd backend

# Create a new migration
alembic revision --autogenerate -m "Description of changes"

# Apply migrations
alembic upgrade head

# Rollback migration
alembic downgrade -1

# Check current migration status
alembic current
```

## 🚀 Deployment

### Production Setup

1. Set up PostgreSQL database
2. Configure environment variables
3. Run database migrations
4. Set up reverse proxy (nginx)
5. Configure SSL certificates

### Environment Variables

#### Backend (.env)

```env
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio_db

# Security
SECRET_KEY=your-super-secret-key-change-this-in-production
ACCESS_TOKEN_EXPIRE_MINUTES=11520

# CORS Origins (comma-separated)
BACKEND_CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# Email Configuration
SMTP_TLS=True
SMTP_PORT=587
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAILS_FROM_EMAIL=your-email@gmail.com
EMAILS_FROM_NAME=Portfolio Contact

# Application Settings
PROJECT_NAME=Portfolio API
VERSION=1.0.0
API_V1_STR=/api/v1

# Development Settings
DEBUG=False
ENVIRONMENT=production
```

#### Frontend (.env)

```env
# API Configuration
VITE_API_URL=https://api.yourdomain.com/api/v1

# Application Settings
VITE_APP_NAME=Portfolio
VITE_APP_VERSION=1.0.0

# Development Settings
VITE_DEBUG=false
VITE_ENVIRONMENT=production
```

## 📝 Features

- ✅ Full CRUD operations for all entities
- ✅ RESTful API with automatic documentation
- ✅ Type-safe frontend with TypeScript
- ✅ Modern UI with TailwindCSS
- ✅ Responsive design
- ✅ PostgreSQL database with migrations
- ✅ Docker support with health checks
- ✅ Environment-based configuration
- ✅ Error handling and validation
- ✅ CORS configuration
- ✅ Development and production setups
- ✅ Database connection pooling
- ✅ Health check endpoints

## 🔮 Future Enhancements

- [ ] Authentication and authorization (JWT)
- [ ] File upload for project images
- [ ] Email notifications for contacts
- [ ] Admin dashboard
- [ ] Analytics and tracking
- [ ] SEO optimization
- [ ] Performance monitoring
- [ ] Automated testing (pytest, Jest)
- [ ] CI/CD pipeline
- [ ] Rate limiting
- [ ] Caching (Redis)
- [ ] Background tasks (Celery)

## 🐛 Troubleshooting

### Database Connection Issues

- Ensure PostgreSQL is running
- Check database credentials in `.env`
- Verify database exists: `createdb portfolio_db`

### Migration Issues

- Reset database: `alembic downgrade base && alembic upgrade head`
- Check migration history: `alembic history`

### Docker Issues

- Clean up containers: `docker-compose down -v`
- Rebuild images: `docker-compose build --no-cache`

## 📄 License

This project is licensed under the MIT License.
