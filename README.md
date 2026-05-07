# 💧 Water Management — Su Yönetim Sistemi

> Spring Boot + React ile geliştirilmiş full-stack su yönetimi ve izleme uygulaması.

---

## 📋 İçindekiler

- [Proje Hakkında](#-proje-hakkında)
- [Özellikler](#-özellikler)
- [Teknoloji Yığını](#-teknoloji-yığını)
- [Proje Yapısı](#-proje-yapısı)
- [Kurulum](#-kurulum)
- [Kullanım](#-kullanım)
- [API Dokümantasyonu](#-api-dokümantasyonu)
- [Katkıda Bulunma](#-katkıda-bulunma)

---

## 🌊 Proje Hakkında

**Water Management**, su tüketimini takip etmek, yönetmek ve raporlamak amacıyla geliştirilmiş bir web uygulamasıdır. Java **Spring Boot** tabanlı RESTful bir backend ve modern **React** tabanlı bir frontend ile full-stack mimari üzerine inşa edilmiştir.

---

## ✨ Özellikler

- 📊 Su tüketim verilerinin izlenmesi ve raporlanması
- ➕ Tüketim kaydı ekleme, güncelleme ve silme
- 📈 Kullanım istatistikleri ve özet görünümler
- 🔄 REST API ile frontend-backend entegrasyonu
- 📱 Duyarlı (responsive) kullanıcı arayüzü

---

## 🛠 Teknoloji Yığını

### Backend
| Teknoloji | Açıklama |
|-----------|----------|
| Java | Ana programlama dili |
| Spring Boot | REST API framework'ü |
| Spring Data JPA | Veritabanı erişim katmanı |
| Maven | Bağımlılık ve build yönetimi |

### Frontend
| Teknoloji | Açıklama |
|-----------|----------|
| React | UI framework'ü |
| JavaScript | Ana programlama dili |
| CSS | Stil ve tasarım |
| HTML | Şablon yapısı |

---

## 📁 Proje Yapısı

```
water-management/
├── backend/                      # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── controller/   # REST endpoint'leri
│   │   │   │   └── service/      # İş mantığı
│   │   │   │   └── model/        # Entity sınıfları
│   │   │   │   └── repository/   # Veritabanı erişimi
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
└── frontend/                     # React frontend
    ├── public/
    └── src/
        ├── components/           # React bileşenleri
        ├── pages/                # Sayfa bileşenleri
        └── App.js
```

---

## 🚀 Kurulum

### Gereksinimler

- **Java 17+**
- **Node.js 18+** ve **npm**
- **Maven 3.8+**

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/EmirhanUzel/water-management.git
cd water-management
```

### 2. Backend Kurulumu

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend varsayılan olarak `http://localhost:8080` adresinde çalışır.

### 3. Frontend Kurulumu

```bash
cd ../frontend
npm install
npm start
```

Frontend varsayılan olarak `http://localhost:3000` adresinde çalışır.

---

## 💻 Kullanım

1. Tarayıcıda `http://localhost:3000` adresini açın.
2. Mevcut su tüketim kayıtlarını görüntüleyin.
3. Yeni kayıt ekleyin veya mevcut kayıtları düzenleyin.
4. İstatistik ve raporlar aracılığıyla tüketim analizini takip edin.

---

## 📡 API Dokümantasyonu

Backend, `http://localhost:8080/api` üzerinden REST endpoint'leri sunar.

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| `GET` | `/api/water` | Tüm kayıtları listele |
| `GET` | `/api/water/{id}` | Belirli bir kaydı getir |
| `POST` | `/api/water` | Yeni kayıt oluştur |
| `PUT` | `/api/water/{id}` | Kaydı güncelle |
| `DELETE` | `/api/water/{id}` | Kaydı sil |

---

## 🤝 Katkıda Bulunma

1. Bu repoyu **fork** edin
2. Yeni bir branch oluşturun: `git checkout -b feature/yeni-ozellik`
3. Değişikliklerinizi commit edin: `git commit -m 'feat: yeni özellik eklendi'`
4. Branch'inizi push edin: `git push origin feature/yeni-ozellik`
5. Bir **Pull Request** açın

---

<p align="center">
  Geliştirici: <a href="https://github.com/EmirhanUzel">EmirhanUzel</a>
</p>
