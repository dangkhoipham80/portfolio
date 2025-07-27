# Database Schema Documentation

## 📊 Cấu trúc Database

### 🗂️ Các bảng chính:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              DATABASE SCHEMA                                │
└─────────────────────────────────────────────────────────────────────────────┘

📁 AUTHENTICATION & AUTHORIZATION TABLES
├── 🗃️ users                    # Bảng người dùng chính
├── 🗃️ tokens                   # Bảng quản lý tokens
├── 🗃️ roles                    # Bảng vai trò
├── 🗃️ permissions              # Bảng quyền hạn
├── 🗃️ user_roles              # Bảng liên kết User ↔ Role (Many-to-Many)
└── 🗃️ role_permissions         # Bảng liên kết Role ↔ Permission (Many-to-Many)

📁 PORTFOLIO TABLES
├── 🗃️ contacts                 # Bảng liên hệ
├── 🗃️ projects                 # Bảng dự án
├── 🗃️ skills                   # Bảng kỹ năng
└── 🗃️ certificates             # Bảng chứng chỉ
```

## 🔗 Relationships (Mối quan hệ)

### 1. **User ↔ Token** (One-to-Many)

```
users (1) ────── (N) tokens
├── user.id → token.user_id
└── Một user có thể có nhiều tokens (access, refresh, reset, etc.)
```

### 2. **User ↔ Role** (Many-to-Many)

```
users (N) ────── (N) roles
├── Thông qua bảng trung gian: user_roles
├── user.id → user_roles.user_id
└── role.id → user_roles.role_id
```

### 3. **Role ↔ Permission** (Many-to-Many)

```
roles (N) ────── (N) permissions
├── Thông qua bảng trung gian: role_permissions
├── role.id → role_permissions.role_id
└── permission.id → role_permissions.permission_id
```

## 📋 Chi tiết các bảng

### 🗃️ **users** Table

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE,
    full_name VARCHAR(255),
    hashed_password VARCHAR(255),  -- NULL for OAuth users
    avatar_url VARCHAR(500),

    -- OAuth fields
    google_id VARCHAR(255) UNIQUE,
    google_email VARCHAR(255),

    -- Status fields
    is_active BOOLEAN DEFAULT TRUE,
    is_verified BOOLEAN DEFAULT FALSE,
    status ENUM('active', 'inactive', 'suspended', 'pending_verification'),
    email_verified_at TIMESTAMP,

    -- Timestamps
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP,
    last_login_at TIMESTAMP
);
```

### 🗃️ **tokens** Table

```sql
CREATE TABLE tokens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    token_type ENUM('access', 'refresh', 'reset_password', 'email_verification'),
    token_hash VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    is_revoked BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    metadata TEXT  -- JSON string for additional data
);
```

### 🗃️ **roles** Table

```sql
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);
```

### 🗃️ **permissions** Table

```sql
CREATE TABLE permissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    resource VARCHAR(100) NOT NULL,  -- e.g., "user", "project"
    action VARCHAR(100) NOT NULL,    -- e.g., "create", "read", "update", "delete"
    created_at TIMESTAMP DEFAULT NOW()
);
```

### 🗃️ **user_roles** Table (Junction Table)

```sql
CREATE TABLE user_roles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    role_id INTEGER REFERENCES roles(id),
    assigned_at TIMESTAMP DEFAULT NOW(),
    assigned_by INTEGER REFERENCES users(id)
);
```

### 🗃️ **role_permissions** Table (Junction Table)

```sql
CREATE TABLE role_permissions (
    id SERIAL PRIMARY KEY,
    role_id INTEGER REFERENCES roles(id),
    permission_id INTEGER REFERENCES permissions(id),
    created_at TIMESTAMP DEFAULT NOW()
);
```

## 🔐 Token Types

| Token Type           | Purpose            | Expiration | Usage                      |
| -------------------- | ------------------ | ---------- | -------------------------- |
| `access`             | API access         | 30 minutes | Bearer token for API calls |
| `refresh`            | Token refresh      | 7 days     | Get new access token       |
| `reset_password`     | Password reset     | 1 hour     | Reset forgotten password   |
| `email_verification` | Email verification | 1 hour     | Verify email address       |

## 👥 Default Roles

| Role        | Description        | Permissions                      |
| ----------- | ------------------ | -------------------------------- |
| `admin`     | Full system access | All permissions                  |
| `user`      | Regular user       | Read-only access to public data  |
| `moderator` | Limited admin      | Read, create, update (no delete) |

## 🔑 Default Permissions

### User Management

- `user:read` - View user information
- `user:create` - Create new users
- `user:update` - Update user information
- `user:delete` - Delete users

### Portfolio Management

- `project:read/create/update/delete`
- `skill:read/create/update/delete`
- `contact:read/create/update/delete`
- `certificate:read/create/update/delete`

## 📊 Indexes

### Performance Indexes

```sql
-- Users table
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_google_id ON users(google_id);
CREATE INDEX idx_users_status ON users(status);

-- Tokens table
CREATE INDEX idx_tokens_hash ON tokens(token_hash);
CREATE INDEX idx_tokens_user_type ON tokens(user_id, token_type);
CREATE INDEX idx_tokens_expires ON tokens(expires_at);

-- Roles & Permissions
CREATE INDEX idx_roles_name ON roles(name);
CREATE INDEX idx_permissions_name ON permissions(name);
CREATE INDEX idx_permissions_resource_action ON permissions(resource, action);

-- Junction tables
CREATE INDEX idx_user_roles_user ON user_roles(user_id);
CREATE INDEX idx_user_roles_role ON user_roles(role_id);
CREATE INDEX idx_role_permissions_role ON role_permissions(role_id);
CREATE INDEX idx_role_permissions_permission ON role_permissions(permission_id);
```

## 🚀 Migration Commands

```bash
# Create tables
alembic revision --autogenerate -m "Create auth tables"

# Apply migrations
alembic upgrade head

# Initialize default data
python scripts/init_auth_tables.py
```

## 🔍 Sample Queries

### Get user with roles and permissions

```sql
SELECT
    u.id, u.email, u.full_name,
    array_agg(DISTINCT r.name) as roles,
    array_agg(DISTINCT p.name) as permissions
FROM users u
LEFT JOIN user_roles ur ON u.id = ur.user_id
LEFT JOIN roles r ON ur.role_id = r.id
LEFT JOIN role_permissions rp ON r.id = rp.role_id
LEFT JOIN permissions p ON rp.permission_id = p.id
WHERE u.id = 1
GROUP BY u.id, u.email, u.full_name;
```

### Get valid tokens for user

```sql
SELECT * FROM tokens
WHERE user_id = 1
  AND is_revoked = FALSE
  AND expires_at > NOW()
ORDER BY created_at DESC;
```

### Check user permissions

```sql
SELECT DISTINCT p.name
FROM users u
JOIN user_roles ur ON u.id = ur.user_id
JOIN roles r ON ur.role_id = r.id
JOIN role_permissions rp ON r.id = rp.role_id
JOIN permissions p ON rp.permission_id = p.id
WHERE u.id = 1 AND r.is_active = TRUE;
```
