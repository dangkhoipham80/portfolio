# Neon Database Setup

## Overview

This project now uses Neon PostgreSQL database instead of local PostgreSQL.

## Database Connection

- **Host**: ep-restless-darkness-a1fd7jga-pooler.ap-southeast-1.aws.neon.tech
- **Database**: neondb
- **Username**: neondb_owner
- **SSL**: Required

## Environment Variables

The database connection is configured via environment variables.

### Creating .env file

Copy the template and create your `.env` file:

```bash
cd backend
cp env_template.txt .env
```

Or manually create `.env` file with:

```bash
DATABASE_URL=postgresql://neondb_owner:npg_og2vJ0BzqPks@ep-restless-darkness-a1fd7jga-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

## Setup Environment

To setup environment file:

```bash
cd backend
python setup_env.py
```

## Testing Connection

To test the database connection:

```bash
cd backend
python test_db_connection.py
```

## Initializing Database

To initialize the database with tables and sample data:

```bash
cd backend
python init-db.py
```

## Running Migrations

To run Alembic migrations:

```bash
cd backend
alembic upgrade head
```

## Docker Setup

The docker-compose.yml has been updated to use Neon database:

```bash
docker-compose up backend
```

## Benefits of Neon Database

- ✅ Serverless PostgreSQL
- ✅ Automatic scaling
- ✅ Built-in connection pooling
- ✅ Branching for development
- ✅ No local database setup required
- ✅ Automatic backups
- ✅ Global distribution

## Security Notes

- The database connection uses SSL encryption
- Credentials are stored in environment variables
- Never commit database credentials to version control
