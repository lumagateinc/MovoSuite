/** @type {import('@tomehq/core').TomeConfig} */
export default {
  name: "MovoSuite",
  theme: {
    preset: "amber",
    mode: "auto",
    accent: "#4fa331",
    fonts: {
      body: "DM Sans",
      heading: "DM Sans",
      code: "JetBrains Mono",
    },
  },
  navigation: [
    {
      group: "Getting Started",
      pages: ["index", "faqs", "changelog"],
    },
    {
      group: "Setup",
      pages: ["setup/checklist", "setup/prereqs"],
    },
    {
      group: "Self-Service",
      pages: [
        "selfservice",
        "selfservice/request-deployment",
        "selfservice/request-app",
      ],
    },
    {
      group: "Configuration",
      pages: [
        "config",
        "config/onboarding",
        "config/general",
        "config/notifications",
        "config/integrations",
        "config/locations",
        "config/apps",
        "config/devices",
        "config/requests",
        "config/schedules",
        "config/experimental",
        "config/backend",
      ],
    },
  ],
};
