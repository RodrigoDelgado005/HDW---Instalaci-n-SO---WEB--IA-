import React, { useState, useEffect } from 'react'; // Importa useEffect además de useState

const ChatBotScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.type = 'text/javascript';
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '66de621869870fb5788b843d' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
      });
    };
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatBotScript;