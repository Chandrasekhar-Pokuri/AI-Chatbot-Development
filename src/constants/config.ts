export const config = {
    app: {
      name: 'Restaurant Assistant',
      description: 'AI-powered restaurant assistant for menu browsing and ordering',
      version: '1.0.0',
    },
    chat: {
      maxMessageLength: 500,
      typingDelay: 1000,
      maxHistoryLength: 50,
    },
    menu: {
      imageSize: {
        width: 400,
        height: 300,
      },
      maxSpecialItems: 5,
      currency: 'USD',
    },
    api: {
      timeout: 10000, // 10 seconds
      retryAttempts: 3,
      retryDelay: 1000,
    },
  } as const;