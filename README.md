# 💰 CatatanKu — Smart Expense Monitoring & Savings Goal App for Students

CatatanKu is a personal finance web application designed specifically for students. It helps users record daily transactions, analyze spending patterns, and plan savings goals. Equipped with AI Scan Receipt and AI Assistant features for a smarter and more practical financial management experience.

---

## ✨ Key Features

- **Multi-Wallet** — Manage multiple accounts (cash, bank, e-wallet) in one app
- **Quick Record** — Input multiple transactions at once in a single natural sentence
- **AI Scan Receipt** — Automatically scan receipts using Tesseract.js + Gemini AI
- **Financial Analysis** — Monthly trend charts, top spending categories, and saving rate
- **Savings Goals** — Create and track goal-based savings progress
- **AI Assistant** — Personal financial consultation powered by Gemini AI
- **Export History** — Download transaction records

---

## ⚙️ Environment Setup

## NOTE
- Link Hosting         : https://catatanku-app-wybi-three.vercel.app
- Link Postman Testing : https://documenter.getpostman.com/view/56932791/2sBY4WpcRK

### Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) version **18.17** or higher
- Git

### 1. Clone Repository

```bash
git clone https://github.com/Capstone-Catatanku/catatanku-app.git
cd catatanku-app
```

### 2. Install Dependencies

```bash
npm install
```

> `postinstall` will automatically run `prisma generate` after installation.

### 3. Configure Environment Variables

Copy the example environment file and fill in the values:

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in each variable:

```env
# Database (Supabase / PostgreSQL)
DATABASE_URL=""         # Prisma connection string (pooled)
DIRECT_URL=""           # Direct connection string for Prisma migrations

# Supabase
NEXT_PUBLIC_SUPABASE_URL=""       # Your Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=""  # Supabase anon/public key
SUPABASE_SERVICE_ROLE_KEY=""      # Service role key (never expose to client!)

# Google Gemini AI
GEMINI_API_KEY=""       # API key from Google AI Studio

# FastAPI Backend
FASTAPI_URL=""          # URL of the separately running FastAPI service
```

> ⚠️ Never commit `.env.local` to the repository. It is already listed in `.gitignore`.

### 4. Setup Database

```bash
npx prisma migrate dev
```

---

## 🤖 Machine Learning Model

This application uses the following AI services:

| Feature | Technology | Link |
|---------|------------|------|
| AI Scan Receipt (OCR) | Tesseract.js + Google Gemini Vision | [Tesseract.js](https://tesseract.projectnaptha.com/) · [Google AI Studio](https://aistudio.google.com/apikey) |
| AI Assistant | Google Gemini Pro | [Google AI Studio](https://aistudio.google.com/apikey) |
| ML Model (Classification & Prediction) | Trained ML Model | [Download Model](https://drive.google.com/file/d/1JQQ08x2UQO5bABtb8DIFjrgzV6hEXYhc/view?usp=drive_link) |
| ML Backend | FastAPI (separate service) | [FastAPI Service](https://yobby15-catatanku-fastapi.hf.space/) |

**How to get a Gemini API Key:**
1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Create a new API key
3. Copy it to `GEMINI_API_KEY` in your `.env.local`

**How to load the ML Model:**
1. Download the model from the link above
2. Follow the setup instructions in the [FastAPI repository](https://github.com/Capstone-Catatanku/catatanku-fastapi)
3. Set `FASTAPI_URL` in `.env.local` to point to your running FastAPI service

---

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## 📁 Project Structure

```
catatanku-app/
├── prisma/                        # Prisma schema & migrations
├── public/                        # Static assets
├── src/
│   ├── app/
│   │   ├── ai-assistant/          # AI Assistant page
│   │   ├── analisis/              # Financial Analysis page
│   │   ├── api/                   # Next.js API Routes
│   │   │   ├── chat/              # AI chat endpoint
│   │   │   ├── classify/          # Transaction classification endpoint
│   │   │   ├── export/            # Export history endpoint
│   │   │   ├── savings/           # Savings & deposit endpoints
│   │   │   ├── scan-receipt/      # AI receipt scan endpoint
│   │   │   ├── summary/           # Financial summary endpoint
│   │   │   ├── transactions/      # Transaction endpoints
│   │   │   ├── user/              # User data endpoint
│   │   │   └── wallets/           # Wallet & transfer endpoints
│   │   ├── auth/                  # Login, Register, Forgot Password pages
│   │   ├── components/            # App-specific components (Sidebar)
│   │   ├── dashboard/             # Home / Dashboard page
│   │   ├── pengaturan/            # Profile & Security Settings page
│   │   ├── tabungan/              # Savings Goal Management page
│   │   ├── transaksi/             # Transaction History & Add Transaction page
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/                # Reusable UI components (Modals, Cards)
│   ├── lib/
│   │   ├── supabase/              # Supabase client & server config
│   │   ├── auth.ts                # Auth helper
│   │   └── prisma.ts              # Prisma client instance
│   └── proxy.ts
├── .env.example
├── next.config.ts
├── package.json
├── prisma.config.ts
└── tsconfig.json
```
