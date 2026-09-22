# دليل تثبيت ونشر موقع ولوحة تحكم SAINTRA على سيرفر VPS (SAINTRA VPS Deployment Guide)

يوفر هذا الدليل الخطوات التفصيلية لنشر موقع **SAINTRA Public Portfolio** مع **لوحة التحكم الإدارية (Admin Dashboard)** على سيرفر VPS يعمل بنظام **Ubuntu / Debian** مع Nginx و Node.js و PM2.

---

## 1. المتطلبات الأساسية للسيرفر (Server Prerequisites)

قبل البدء، تأكد من تثبيت الحزم التالية على سيرفر الـ VPS:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nginx curl

# تثبيت Node.js (الإصدار 20 أو أحدث)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# تثبيت PM2 لإدارة الخادم خلف الخلفية
sudo npm install -y -g pm2
```

---

## 2. استنسال المشروع والبناء (Clone & Build)

1. **استنسال المستودع من GitLab**:
   ```bash
   cd /var/www
   sudo git clone https://gitlab.com/syntra-group4/syntra-portofolio.git saintra
   cd saintra
   sudo chown -R $USER:$USER /var/www/saintra
   ```

2. **تثبيت المكتبات والبناء للإنتاج**:
   ```bash
   npm install
   npm run build
   ```

---

## 3. تشغيل خادم الحفظ المباشر بـ PM2 (Dynamic CMS Mode)

لتشغيل خادم الحفظ المباشر الذي يسمح للوحة التحكم بتحديث وتعديل البيانات على السيرفر مباشرة:

1. **بدء الخادم بـ PM2**:
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

2. **التحقق من حالة الخادم**:
   ```bash
   pm2 status
   ```

---

## 4. إعداد خادم Nginx وشهادة الأمان SSL

1. **إنشاء ملف إعدادات Nginx**:
   ```bash
   sudo nano /etc/nginx/sites-available/saintra
   ```

2. **إضافة الإعدادات التالية**:
   ```nginx
   server {
       listen 80;
       server_name saintra.sa www.saintra.sa; # استبدل بدومينك أو IP السيرفر

       client_max_body_size 20M;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }

       location /images/ {
           alias /var/www/saintra/dist/images/;
           expires 30d;
           add_header Cache-Control "public, no-transform";
       }
   }
   ```

3. **تفعيل الموقع وإعادة تشغيل Nginx**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/saintra /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

4. **تثبيت شهادة الأمان المجانية (Let's Encrypt SSL)**:
   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d saintra.sa -d www.saintra.sa
   ```

---

## 5. الوصول والدخول للوحة التحكم

- **رابط الموقع العام**: `https://saintra.sa`
- **رابط لوحة التحكم الإدارية**: `https://saintra.sa/admin/login`
- **كلمة المرور الافتراضية**: `admin123`

تهانينا! موقعك ولوحة التحكم يعملان الآن بكفاءة عالية على سيرفر VPS الخاص بك!
