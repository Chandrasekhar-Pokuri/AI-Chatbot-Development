# Restaurant Assistant

A modern restaurant management system with an AI-powered chat assistant and dynamic menu management. The project consists of a React frontend and a Spring Boot backend.

## 🚀 Features

- 💬 AI-powered chat assistant for customer interactions
- 🍽️ Dynamic menu management system
- 🔍 Real-time menu updates and specials
- 🌶️ Detailed item information (ingredients, spice levels, dietary types)
- 💫 Beautiful, responsive UI with Tailwind CSS
- 🔒 Robust backend with Spring Boot and MySQL

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite for build tooling

### Backend
- Spring Boot 3.2
- MySQL Database
- JPA/Hibernate
- Lombok for boilerplate reduction

## 📦 Prerequisites

- Node.js (v18 or higher)
- Java JDK 17 or higher
- MySQL Server
- Maven

## 🚀 Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd restaurant-backend
   ```

2. Configure MySQL database:
   - Create a database named `restaurant_assistant`
   - Update `application.properties` with your MySQL credentials

3. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
   The backend will start on `http://localhost:8080`

### Frontend Setup to run in your local machine  

1. Navigate to the frontend directory:
   ```bash
   cd ../
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will start on `http://localhost:5173`

## 🌐 API Endpoints

### Menu Endpoints
- `GET /api/menu` - Get full menu
- `GET /api/menu/categories` - Get menu categories
- `GET /api/menu/specials` - Get special items

### Chat Endpoints
- `POST /api/chat` - Send message to chat assistant

## 📱 Features Breakdown

### Menu Management
- Categorized menu items
- Special items highlighting
- Detailed item information including:
  - Ingredients
  - Dietary type (VEG/NON_VEG)
  - Spice levels
  - Prices and discounts
  - Images

### Chat Assistant
- Real-time chat interface
- Context-aware responses
- Menu-related queries handling
- Restaurant information assistance

## 🎨 UI Components

- Responsive design
- Interactive chat interface
- Dynamic menu display
- Loading states and error handling
- Beautiful transitions and animations

## 📁 Project Structure for frontend

```
src/
├── components/                 # Reusable React components
│   ├── chat/                  # Chat-related components
│   │   ├── ChatInput.tsx     # Message input component
│   │   ├── ChatMessage.tsx   # Individual message display
│   │   └── ChatBubble.tsx    # Message bubble styling
│   ├── menu/ 
    |    |__ Menu.ts           # Menu-related components
│   │   ├── MenuDisplay.tsx   # Main menu display
│   │   ├── MenuItem.tsx      # Individual menu item
│   │   └── MenuCategory.tsx  # Category section
    |___constants/ 
    |   |__ api.ts           # api related constants url
│   └── common/               # Shared components
│       ├── Button.tsx        # Reusable button
│       ├── Icons.tsx         # Icon components
│       └── Loading.tsx       # Loading states
├── services/                  # API and service layer
│   ├── api/                  # API clients
│   │   ├── menuService.ts       # Menu-related API calls
│   │   └── chatApi.ts       # Chat-related API calls
│   └── utils/                # Utility functions
│       ├── formatters.ts     # Data formatters
│       └── validators.ts     # Input validation
├── types/                     # TypeScript type definitions
│   ├── menu.ts              # Menu-related types
│   └── index.ts             # Type exports
├── hooks/                     # Custom React hooks
│   ├── useChat.ts           # Chat functionality
│   └── useMenu.ts           # Menu functionality
├── context/                   # React Context providers
│   ├── ChatContext.tsx      # Chat state management
│   └── MenuContext.tsx      # Menu state management
├── styles/                    # Style-related files
│   ├── tailwind.css         # Tailwind imports
│   └── animations.css       # Custom animations
├── constants/                 # Application constants
│   ├── api.ts               # API endpoints
│   └── config.ts            # App configuration
├── assets/                    # Static assets
│   └── icons/               # Custom icons
├── App.tsx                    # Main application component
├── main.tsx                  # Application entry point
└── vite-env.d.ts             # Vite type declarations

public/                        # Public static files
├── favicon.ico               # Site favicon
└── robots.txt                # SEO robots file

config/                       # Configuration files
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── eslint.config.js         # ESLint configuration

.vscode/                      # VS Code configuration
└── settings.json            # Editor settings
```
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Lucide React for beautiful icons
- Tailwind CSS for styling utilities
- Spring Boot for backend framework
- React community for frontend libraries