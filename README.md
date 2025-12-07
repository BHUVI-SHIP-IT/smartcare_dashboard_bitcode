# SmartCare Dashboard

AI-Driven Post-Hospitalization Care Management System

## Overview

SmartCare is a modern, responsive web dashboard designed for healthcare professionals to monitor and manage post-hospitalization patient care. The application features a clean, professional interface with a soft teal color palette and provides comprehensive patient monitoring, analytics, and communication tools.

## Features

### 🔐 Authentication
- Secure login page with dummy authentication
- Protected routes requiring authentication
- Persistent login state across sessions
- User profile dropdown with logout functionality

### 📊 Dashboard
- **Patient Monitoring Overview** - Real-time statistics and metrics
- **Statistics Cards** - Total patients, at-risk cases, critical cases, and adherence rates
- **Interactive Charts** - Readmission risk trends and adherence distribution
- **Patient Table** - Comprehensive patient list with details and quick actions

### 📈 Analytics
- Advanced analytics and insights
- Patient risk assessment
- Adherence tracking

### 💬 Communication
- Secure chat functionality
- Patient messaging system

### ⚙️ Settings
- User profile management
- System configuration

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Routing**: Wouter
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts
- **State Management**: React Query (TanStack Query)
- **Backend**: Express.js
- **Build Tool**: Vite
- **Database**: PostgreSQL with Drizzle ORM

## Design System

- **Primary Color**: Soft Teal (#2BB6B3)
- **Typography**: Inter (body), Poppins (headings)
- **Design Philosophy**: Clean, minimal, human-centered
- **UI Elements**: Rounded edges, soft shadows, ample whitespace

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BHUVI-SHIP-IT/smartcare_dashboard_bitcode.git
cd smartcare_dashboard_bitcode
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
# On Windows (PowerShell)
$env:NODE_ENV="development"; npx tsx server/index.ts

# On macOS/Linux
npm run dev
```

4. Open your browser to `http://localhost:5000`

### Default Login

The application uses dummy authentication for demo purposes. You can log in with any email and password combination:

- **Email**: Any valid email format (e.g., `doctor@smartcare.com`)
- **Password**: Any non-empty password

## Project Structure

```
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── layout/   # Layout components (Header, Sidebar)
│   │   │   └── ui/       # shadcn/ui components
│   │   ├── contexts/     # React contexts (Auth)
│   │   ├── lib/          # Utilities and helpers
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # Main app component
│   │   └── index.css     # Global styles
│   └── public/           # Static assets
├── server/               # Backend application
│   ├── index.ts         # Express server
│   └── routes/          # API routes
└── shared/              # Shared types and utilities
```

## Key Features Implementation

### Authentication Flow
- Login page with form validation
- Auth context managing authentication state
- Protected routes redirecting to login when not authenticated
- Logout functionality clearing session

### Responsive Design
- Mobile-first approach
- Responsive navigation with mobile drawer
- Adaptive layouts for different screen sizes

### Data Visualization
- Area charts for trend analysis
- Pie charts for distribution metrics
- Interactive tooltips and legends

## Scripts

- `npm run dev` - Start development server (Unix/Mac)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type checking
- `npm run db:push` - Push database schema changes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a demo project. For production use, please implement proper authentication, API integration, and security measures.

## License

MIT

## Acknowledgments

- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts from [Recharts](https://recharts.org/)

---

**Note**: This application uses dummy authentication for demonstration purposes. In a production environment, implement proper authentication with secure password hashing, JWT tokens, and backend validation.
