# Portfolio Setup Guide

Hướng dẫn chi tiết để setup và chạy dự án Portfolio Full-Stack với FastAPI + React + PostgreSQL.

## 📋 Mục lục

- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Cài đặt môi trường](#cài-đặt-môi-trường)
- [Setup Database](#setup-database)
- [Setup Backend](#setup-backend)
- [Setup Frontend](#setup-frontend)
- [Chạy dự án](#chạy-dự-án)
- [Cấu trúc API](#cấu-trúc-api)
- [Troubleshooting](#troubleshooting)

## 🖥️ Yêu cầu hệ thống

### Backend Requirements

- **Python**: 3.11+
- **PostgreSQL**: 15+
- **Pip**: Latest version
- **Virtual Environment**: Python venv

### Frontend Requirements

- **Node.js**: 18+
- **npm**: 8+
- **Git**: Latest version

### Optional

- **Docker**: 20.10+
- **Docker Compose**: 2.0+

## 🔧 Cài đặt môi trường

### 1. Clone Repository

```bash
git clone <repository-url>
cd portfolio
```

### 2. Tạo Environment Files

#### Backend Environment

```bash
cd backend
cp env.example .env
```

Chỉnh sửa file `backend/.env`:

```env
# Database Configuration
DATABASE_URL=postgresql://portfolio_user:portfolio_password@localhost:5432/portfolio_db

# Security
SECRET_KEY=your-super-secret-key-change-this-in-production
ACCESS_TOKEN_EXPIRE_MINUTES=11520

# CORS Origins (comma-separated)
BACKEND_CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000,http://localhost:5173,http://127.0.0.1:5173

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
DEBUG=True
ENVIRONMENT=development
```

#### Frontend Environment

```bash
cd frontend
cp env.example .env
```

Chỉnh sửa file `frontend/.env`:

```env
# API Configuration
VITE_API_URL=http://localhost:8000/api/v1

# Application Settings
VITE_APP_NAME=Portfolio
VITE_APP_VERSION=1.0.0

# Development Settings
VITE_DEBUG=true
VITE_ENVIRONMENT=development
```

## 🗄️ Setup Database

### Option 1: Local PostgreSQL

#### Cài đặt PostgreSQL

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib

# macOS (with Homebrew)
brew install postgresql
brew services start postgresql

# Windows
# Download từ https://www.postgresql.org/download/windows/
```

#### Tạo Database và User

```bash
# Đăng nhập PostgreSQL
sudo -u postgres psql

# Tạo user và database
CREATE USER portfolio_user WITH PASSWORD 'portfolio_password';
CREATE DATABASE portfolio_db OWNER portfolio_user;
GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
\q
```

### Option 2: Docker PostgreSQL

```bash
# Chạy PostgreSQL container
docker run --name portfolio-postgres \
  -e POSTGRES_DB=portfolio_db \
  -e POSTGRES_USER=portfolio_user \
  -e POSTGRES_PASSWORD=portfolio_password \
  -p 5432:5432 \
  -d postgres:15
```

## 🐍 Setup Backend

### 1. Tạo Virtual Environment

```bash
cd backend
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate

# Linux/macOS
source venv/bin/activate
```

### 2. Cài đặt Dependencies

```bash
pip install -r requirements.txt
```

### 3. Chạy Database Migrations

```bash
# Khởi tạo Alembic (chỉ chạy lần đầu)
alembic init alembic

# Chạy migrations
alembic upgrade head
```

### 4. Khởi tạo Database với Sample Data

```bash
python init-db.py
```

### 5. Chạy Backend Server

```bash
python main.py
```

Backend sẽ chạy tại: http://localhost:8000
API Documentation: http://localhost:8000/docs

## ⚛️ Setup Frontend

### 1. Cài đặt Dependencies

```bash
cd frontend
npm install
```

### 2. Chạy Development Server

```bash
npm run dev
```

Frontend sẽ chạy tại: http://localhost:3000

## 🚀 Chạy dự án

### Option 1: Chạy riêng biệt

#### Terminal 1 - Backend

```bash
cd backend
source venv/bin/activate  # Linux/macOS
# hoặc
venv\Scripts\activate     # Windows
python main.py
```

#### Terminal 2 - Frontend

```bash
cd frontend
npm run dev
```

### Option 2: Sử dụng Scripts

#### Windows

```bash
start-dev.bat
```

#### Linux/macOS

```bash
chmod +x start-dev.sh
./start-dev.sh
```

### Option 3: Docker (Khuyến nghị)

```bash
# Build và chạy tất cả services
docker-compose up --build

# Chạy background
docker-compose up -d --build
```

## 📡 Cấu trúc API

### Folder API chứa gì?

```
backend/app/api/
├── __init__.py
└── v1/                    # API Version 1
    ├── __init__.py
    ├── api.py            # Main router tổng hợp
    └── endpoints/        # Các endpoint modules
        ├── __init__.py
        ├── projects.py   # CRUD cho projects
        ├── skills.py     # CRUD cho skills
        ├── certificates.py # CRUD cho certificates
        └── contacts.py   # CRUD cho contacts
```

### API Endpoints

#### Projects API

- `GET /api/v1/projects` - Lấy tất cả projects
- `GET /api/v1/projects?featured_only=true` - Lấy featured projects
- `GET /api/v1/projects/{id}` - Lấy project theo ID
- `POST /api/v1/projects` - Tạo project mới
- `PUT /api/v1/projects/{id}` - Cập nhật project
- `DELETE /api/v1/projects/{id}` - Xóa project

#### Skills API

- `GET /api/v1/skills` - Lấy tất cả skills
- `GET /api/v1/skills?category=frontend` - Lấy skills theo category
- `GET /api/v1/skills/{id}` - Lấy skill theo ID
- `POST /api/v1/skills` - Tạo skill mới
- `PUT /api/v1/skills/{id}` - Cập nhật skill
- `DELETE /api/v1/skills/{id}` - Xóa skill

#### Certificates API

- `GET /api/v1/certificates` - Lấy tất cả certificates
- `GET /api/v1/certificates/{id}` - Lấy certificate theo ID
- `POST /api/v1/certificates` - Tạo certificate mới
- `PUT /api/v1/certificates/{id}` - Cập nhật certificate
- `DELETE /api/v1/certificates/{id}` - Xóa certificate

#### Contacts API

- `GET /api/v1/contacts` - Lấy tất cả contacts
- `GET /api/v1/contacts?unread_only=true` - Lấy unread contacts
- `GET /api/v1/contacts/{id}` - Lấy contact theo ID
- `POST /api/v1/contacts` - Tạo contact mới
- `PUT /api/v1/contacts/{id}/read` - Đánh dấu đã đọc
- `DELETE /api/v1/contacts/{id}` - Xóa contact

### Database Schema

#### Projects Table

```sql
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(500),
    github_url VARCHAR(500),
    live_url VARCHAR(500),
    technologies JSON,
    featured BOOLEAN DEFAULT FALSE,
    order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);
```

#### Skills Table

```sql
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    level INTEGER DEFAULT 1,
    icon VARCHAR(100),
    order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);
```

#### Certificates Table

```sql
CREATE TABLE certificates (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    issuer VARCHAR(255) NOT NULL,
    issue_date TIMESTAMP NOT NULL,
    credential_url VARCHAR(500),
    image_url VARCHAR(500),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);
```

#### Contacts Table

```sql
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP
);
```

## 🔧 Database Migrations

### Tạo Migration mới

```bash
cd backend
alembic revision --autogenerate -m "Description of changes"
```

### Chạy Migrations

```bash
# Chạy tất cả migrations
alembic upgrade head

# Chạy migration cụ thể
alembic upgrade +1

# Rollback migration
alembic downgrade -1

# Xem trạng thái
alembic current
alembic history
```

## 🐛 Troubleshooting

### Database Connection Issues

#### Lỗi: "connection refused"

```bash
# Kiểm tra PostgreSQL có đang chạy không
sudo systemctl status postgresql

# Khởi động PostgreSQL
sudo systemctl start postgresql
```

#### Lỗi: "authentication failed"

```bash
# Kiểm tra credentials trong .env
# Đảm bảo user và password đúng
psql -U portfolio_user -d portfolio_db -h localhost
```

### Backend Issues

#### Lỗi: "ModuleNotFoundError"

```bash
# Đảm bảo đã activate virtual environment
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

# Reinstall dependencies
pip install -r requirements.txt
```

#### Lỗi: "Port already in use"

```bash
# Tìm process đang sử dụng port 8000
lsof -i :8000  # Linux/macOS
netstat -ano | findstr :8000  # Windows

# Kill process
kill -9 <PID>
```

### Frontend Issues

#### Lỗi: "Cannot find module"

```bash
# Reinstall node_modules
rm -rf node_modules package-lock.json
npm install
```

#### Lỗi: "API connection failed"

```bash
# Kiểm tra backend có đang chạy không
curl http://localhost:8000/health

# Kiểm tra CORS configuration
# Đảm bảo frontend URL có trong BACKEND_CORS_ORIGINS
```

### Docker Issues

#### Lỗi: "Container failed to start"

```bash
# Xem logs
docker-compose logs

# Rebuild containers
docker-compose down -v
docker-compose build --no-cache
docker-compose up
```

#### Lỗi: "Database connection timeout"

```bash
# Đợi PostgreSQL khởi động hoàn toàn
docker-compose logs postgres

# Kiểm tra health check
docker-compose ps
```

## 📊 Monitoring & Logs

### Backend Logs

```bash
# Development logs
python main.py

# Docker logs
docker-compose logs backend
```

### Frontend Logs

```bash
# Development logs
npm run dev

# Docker logs
docker-compose logs frontend
```

### Database Logs

```bash
# PostgreSQL logs
sudo tail -f /var/log/postgresql/postgresql-*.log

# Docker logs
docker-compose logs postgres
```

## 🔒 Security Considerations

### Production Checklist

- [ ] Thay đổi SECRET_KEY
- [ ] Cấu hình HTTPS
- [ ] Setup firewall
- [ ] Backup database
- [ ] Monitor logs
- [ ] Update dependencies
- [ ] Configure rate limiting
- [ ] Setup authentication

### Environment Variables Security

```bash
# Không commit .env files
echo ".env" >> .gitignore
echo "*.env" >> .gitignore

# Sử dụng environment variables cho production
export DATABASE_URL="postgresql://..."
export SECRET_KEY="your-secret-key"
```

## 📚 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [Alembic Documentation](https://alembic.sqlalchemy.org/)

## 🤝 Support

Nếu gặp vấn đề, hãy:

1. Kiểm tra logs
2. Xem troubleshooting section
3. Tạo issue trên GitHub
4. Liên hệ team development
