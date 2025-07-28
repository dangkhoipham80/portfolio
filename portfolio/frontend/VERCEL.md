# 🚀 Vercel Deployment Guide

## ✅ Deploy Thành Công!

**URL Production:** https://portfolio-fthuepi8a-pham-dang-khois-projects.vercel.app

**Vercel Dashboard:** https://vercel.com/pham-dang-khois-projects/portfolio

## 📝 Cách Update Deploy

### **Phương Pháp 1: Git Integration (Khuyến nghị)**

#### **1.1 Push code lên GitHub**

```bash
# Commit changes
git add .
git commit -m "Update portfolio features"

# Push lên main branch
git push origin main
```

#### **1.2 Vercel tự động deploy**

- ✅ Vercel sẽ tự động detect changes
- ✅ Build và deploy tự động
- ✅ Preview URL cho mỗi commit

### **Phương Pháp 2: Manual Deploy**

#### **2.1 Deploy từ local**

```bash
cd frontend
vercel --prod
```

**Lưu ý:** Nếu deploy không update, dùng `vercel --prod --force` để bỏ qua cache

#### **2.2 Deploy preview**

```bash
cd frontend
vercel
```

## 🔄 Workflow Development

### **1. Development Workflow**

```bash
# 1. Tạo feature branch
git checkout -b feature/new-feature

# 2. Code và test
npm run dev

# 3. Commit changes
git add .
git commit -m "Add new feature"

# 4. Push branch
git push origin feature/new-feature

# 5. Tạo Pull Request trên GitHub
# 6. Vercel sẽ tạo preview deployment
# 7. Merge vào main khi OK
```

### **2. Production Deploy**

```bash
# Merge vào main
git checkout main
git merge feature/new-feature
git push origin main

# Vercel tự động deploy production
```

## 🌐 Environment Variables

### **Cấu hình trong Vercel Dashboard:**

1. Vào **Settings** → **Environment Variables**
2. Thêm:

```bash
VITE_API_URL=https://your-backend-url.com/api/v1
```

### **Hoặc qua CLI:**

```bash
vercel env add VITE_API_URL
```

## 📊 Monitoring & Analytics

### **Vercel Dashboard Features:**

- ✅ **Analytics**: Traffic, performance
- ✅ **Functions**: Serverless functions logs
- ✅ **Domains**: Custom domain management
- ✅ **Deployments**: History và rollback
- ✅ **Team**: Collaboration settings

## 🔧 Troubleshooting

### **Lỗi Build Failed:**

```bash
# Test build locally
npm run build

# Kiểm tra lỗi TypeScript
npm run type-check

# Fix lỗi ESLint
npm run lint
```

### **Cache Issues - Deploy Không Update:**

```bash
# Force rebuild (bỏ qua cache)
vercel --prod --force

# Clear cache hoàn toàn
vercel --prod --clear-cache

# Hoặc xóa .vercel folder và deploy lại
rm -rf .vercel
vercel --prod

# Force rebuild với environment variable
vercel --prod --build-env FORCE_REBUILD=true
```

**Nguyên nhân:** Vercel cache build để tăng tốc, đôi khi không detect được changes

### **Lỗi API Calls:**

```bash
# Kiểm tra CORS trong backend
# Kiểm tra VITE_API_URL
# Test API endpoints
```

### **Rollback Deployment:**

1. Vào Vercel Dashboard
2. **Deployments** → Chọn version cũ
3. **Redeploy** hoặc **Promote to Production**

## 🚀 Performance Optimization

### **Build Optimization:**

```bash
# Kiểm tra bundle size
npm run build
# Xem file sizes trong dist/

# Optimize images
# Sử dụng WebP format
# Lazy loading cho images
```

### **Runtime Optimization:**

- ✅ Code splitting
- ✅ Lazy loading components
- ✅ Image optimization
- ✅ Caching strategies

## 📱 Custom Domain

### **Thêm domain:**

1. Vercel Dashboard → **Settings** → **Domains**
2. Thêm domain của bạn
3. Cấu hình DNS records:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

## 🔐 Security

### **Deployment Protection:**

- ✅ **Password Protection**: Bảo vệ preview deployments
- ✅ **Vercel Authentication**: Standard protection
- ✅ **Environment Variables**: Secure storage

## 📈 Analytics Setup

### **Google Analytics:**

1. Thêm GA tracking code vào `index.html`
2. Cấu hình trong Vercel Analytics

### **Vercel Analytics:**

1. Dashboard → **Analytics**
2. Enable Web Analytics
3. Thêm tracking code

## 🎯 Best Practices

### **Development:**

- ✅ Test locally trước khi push
- ✅ Use meaningful commit messages
- ✅ Create feature branches
- ✅ Review code trước khi merge

### **Deployment:**

- ✅ Monitor build logs
- ✅ Test production URL
- ✅ Check performance
- ✅ Verify all features work

### **Maintenance:**

- ✅ Regular dependency updates
- ✅ Monitor error logs
- ✅ Performance optimization
- ✅ Security updates

## 📞 Support

### **Vercel Documentation:**

- 📖 [Vercel Docs](https://vercel.com/docs)
- 🐛 [Troubleshooting](https://vercel.com/docs/troubleshooting)
- 💬 [Community](https://github.com/vercel/vercel/discussions)

### **Useful Commands:**

```bash
# Xem project info
vercel ls

# Xem logs
vercel logs

# Remove project
vercel remove

# Link existing project
vercel link

# Force rebuild (bỏ cache)
vercel --prod --force

# Clear cache
vercel --prod --clear-cache
```

---

**🎉 Chúc mừng! Portfolio đã được deploy thành công trên Vercel!**
