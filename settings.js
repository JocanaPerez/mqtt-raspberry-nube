module.exports = {
  // Flow file and credentials
  flowFile: "flows.json",
  credentialSecret: process.env.NODE_RED_SECRET || "MiClaveUltraSecreta2024!",
  flowFilePretty: true,

  // Security: acceso con usuario y contraseña
  adminAuth: {
    type: "credentials",
    users: [
      {
        username: "Critofer",
        password: "$2y$08$ldhRM3pW4UcO0UcwGMPf8uRhO8zY08J6sMLsHF5AQWhItgvImTZcW",
        permissions: "*",
      },
    ],
  },

  // Server Settings
  uiPort: process.env.PORT || 1880,

  // Diagnostics y estado de runtime
  diagnostics: {
    enabled: true,
    ui: true,
  },
  runtimeState: {
    enabled: false,
    ui: false,
  },

  // Logging
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false,
    },
  },

  // Editor Settings: modo oscuro
  editorTheme: {
    theme: "dark"
  },

  // Node Settings
  functionExternalModules: true,
  functionTimeout: 0,
  functionGlobalContext: {
    // Ejemplo: os:require('os'),
  },
  debugMaxLength: 1000,
  mqttReconnectTime: 15000,
  serialReconnectTime: 15000,

  exportGlobalContextKeys: false,
  externalModules: {
    // Opciones de instalación de módulos por nodos o desde el palette manager
  },
};
