
import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3/dist/web.js'

Typebot.initBubble({
  typebot: "user-onboarding-oausdld",
  previewMessage: {
    message: "I have a question for you!",
    autoShowDelay: 4000,
    avatarUrl: "https://interncify.com/assets/interncify_logo_1.png",
  },
  theme: {
    button: {
      backgroundColor: "#fff",
      customIconSrc: "https://interncify.com/assets/interncify_logo_1.png",
    },
    previewMessage: {
      closeButtonBackgroundColor: "#0d6efd",
      closeButtonIconColor: "#0d6efd",
    },
    chatWindow: { backgroundColor: "#fff" },
  },
});
