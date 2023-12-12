import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        botId: '2e7c0172-a76b-4808-af83-8b007a39e9c6',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '2e7c0172-a76b-4808-af83-8b007a39e9c6',
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot