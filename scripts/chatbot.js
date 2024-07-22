
import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3/dist/web.js'

Typebot.initBubble({
  typebot: "user-onboarding-oausdld",
  previewMessage: {
    message: "Hey, Whatsup!",
    autoShowDelay: 4000,
    avatarUrl: "https://interncify.com/assets/public/interncify_logo_white.svg",
  },
  theme: {
    button: {
      backgroundColor: "#fff",
      customIconSrc: "https://interncify.com/assets/public/interncify_logo_blue.svg",
    },
    previewMessage: {
      closeButtonBackgroundColor: "#0d6efd",
      closeButtonIconColor: "#0d6efd",
    },
    chatWindow: { backgroundColor: "#fff" },
  },
});
