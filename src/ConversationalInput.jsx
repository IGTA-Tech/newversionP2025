import React, { useState, useRef, useEffect } from 'react';
import { Mic, Send, Camera, Sparkles } from 'lucide-react';

const ConversationalInput = ({ onStorySubmit }) => {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      text: "Hey neighbor 👋 What's different in your town since January?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [inputMode, setInputMode] = useState('text'); // 'text', 'voice', 'photo'
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI response templates based on keywords
  const getAIResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();

    // Healthcare keywords
    if (msg.includes('health') || msg.includes('hospital') || msg.includes('insurance') ||
        msg.includes('doctor') || msg.includes('medicine') || msg.includes('insulin') ||
        msg.includes('prescription')) {
      return {
        text: "I'm tracking 2,847 similar healthcare stories in your area. This is becoming a major pattern. Can you tell me more about when these changes started affecting you?",
        context: [
          { icon: '📍', text: 'Your area: 2,847 stories' },
          { icon: '📈', text: 'Trending +340%' },
          { icon: '🎯', text: 'Medicare changes detected' }
        ]
      };
    }

    // Education keywords
    if (msg.includes('school') || msg.includes('teacher') || msg.includes('class') ||
        msg.includes('education') || msg.includes('student') || msg.includes('kids')) {
      return {
        text: "Education is the #2 concern nationwide right now. 4,721 parents are sharing similar experiences about classroom sizes and funding cuts. What specific changes have you noticed?",
        context: [
          { icon: '👥', text: '31 students/class avg' },
          { icon: '📚', text: '-$1.2M district funding' },
          { icon: '🏫', text: '127 schools affected' }
        ]
      };
    }

    // Employment keywords
    if (msg.includes('job') || msg.includes('work') || msg.includes('employ') ||
        msg.includes('laid off') || msg.includes('salary') || msg.includes('fired')) {
      return {
        text: "Employment impacts are spreading rapidly. I'm seeing patterns in manufacturing and tech sectors especially. Are you in one of the affected industries?",
        context: [
          { icon: '💼', text: '340 companies affected' },
          { icon: '📉', text: '-12% federal contracts' },
          { icon: '🏭', text: 'Manufacturing hit hardest' }
        ]
      };
    }

    // Immigration keywords
    if (msg.includes('immigration') || msg.includes('border') || msg.includes('visa') ||
        msg.includes('immigrant') || msg.includes('migrant')) {
      return {
        text: "Immigration policy changes are having widespread effects. I'm tracking 1,456 verified stories about business impacts, family separations, and labor shortages. How is this affecting your community?",
        context: [
          { icon: '🌎', text: '1,456 verified stories' },
          { icon: '🏢', text: 'Small business impacts' },
          { icon: '👨‍👩‍👧', text: 'Family reunification delays' }
        ]
      };
    }

    // Default response
    return {
      text: "That's important to document. I'm seeing similar patterns across multiple states. Can you be more specific about the timeline and how this has impacted you or your community?",
      context: [
        { icon: '🔍', text: 'Analyzing pattern' },
        { icon: '📊', text: 'Correlating data' },
        { icon: '🎯', text: 'Matching policies' }
      ]
    };
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      setIsTyping(false);

      // Get AI response
      const aiResponse = getAIResponse(inputText);
      const aiMessage = {
        type: 'ai',
        text: aiResponse.text,
        context: aiResponse.context,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleVoiceRecording = () => {
    setIsRecording(!isRecording);
    // TODO: Implement actual voice recording
    if (!isRecording) {
      // Start recording
      console.log('Started voice recording');
    } else {
      // Stop recording
      console.log('Stopped voice recording');
      // Add placeholder message
      setMessages(prev => [...prev, {
        type: 'user',
        text: '[Voice message recorded]',
        timestamp: new Date()
      }]);
    }
  };

  const handlePhotoUpload = () => {
    // TODO: Implement photo upload
    console.log('Photo upload clicked');
  };

  return (
    <div className="glass-card p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold gradient-text flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            Share Your Story
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Your experience helps us understand what's really happening
          </p>
        </div>
        <div className="live-indicator">
          LIVE
        </div>
      </div>

      {/* Input Mode Selector */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setInputMode('text')}
          className={`flex-1 py-3 px-4 rounded-xl transition-all ${
            inputMode === 'text'
              ? 'gradient-bg text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          💬 Chat
        </button>
        <button
          onClick={() => setInputMode('voice')}
          className={`flex-1 py-3 px-4 rounded-xl transition-all ${
            inputMode === 'voice'
              ? 'gradient-bg text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          🎙️ Voice
        </button>
        <button
          onClick={() => setInputMode('photo')}
          className={`flex-1 py-3 px-4 rounded-xl transition-all ${
            inputMode === 'photo'
              ? 'gradient-bg text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          📸 Photo
        </button>
      </div>

      {/* Messages Container */}
      <div className="bg-gray-900 rounded-2xl p-4 mb-4 h-96 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start gap-3 max-w-[80%] ${
                message.type === 'user' ? 'flex-row-reverse' : ''
              }`}>
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-br from-pink-500 to-orange-500'
                    : 'bg-gradient-to-br from-blue-500 to-purple-500'
                }`}>
                  {message.type === 'user' ? '👤' : '🤖'}
                </div>

                {/* Message Content */}
                <div>
                  <div className={`chat-bubble ${message.type}`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>

                  {/* Context Cards */}
                  {message.context && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {message.context.map((ctx, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-xs flex items-center gap-1.5 hover:border-blue-500 transition-colors cursor-pointer"
                        >
                          <span>{ctx.icon}</span>
                          <span>{ctx.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500">
                  🤖
                </div>
                <div className="chat-bubble ai">
                  <div className="typing-indicator">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      {inputMode === 'text' && (
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your story or question..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send
          </button>
        </div>
      )}

      {inputMode === 'voice' && (
        <div className="flex flex-col items-center justify-center py-8">
          <button
            onClick={toggleVoiceRecording}
            className={`voice-button ${isRecording ? 'recording' : ''}`}
          >
            <Mic />
          </button>
          <p className="mt-4 text-gray-400 text-sm">
            {isRecording ? 'Recording... Click to stop' : 'Click to start recording'}
          </p>
          {isRecording && (
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-500 text-sm font-semibold">00:00</span>
            </div>
          )}
        </div>
      )}

      {inputMode === 'photo' && (
        <div className="flex flex-col items-center justify-center py-8">
          <button
            onClick={handlePhotoUpload}
            className="w-32 h-32 rounded-2xl border-2 border-dashed border-gray-600 hover:border-blue-500 flex flex-col items-center justify-center gap-3 transition-all hover:bg-gray-800"
          >
            <Camera className="w-12 h-12 text-gray-400" />
            <span className="text-sm text-gray-400">Upload Photo</span>
          </button>
          <p className="mt-4 text-gray-400 text-sm text-center max-w-md">
            Upload a photo showing the impact in your community
          </p>
        </div>
      )}
    </div>
  );
};

export default ConversationalInput;
