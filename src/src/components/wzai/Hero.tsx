
"use client";

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: number;
  sessionId: string;
}

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let currentSessionId = localStorage.getItem('wzai_session_id');
    
    if (!currentSessionId) {
      currentSessionId = crypto.randomUUID();
      localStorage.setItem('wzai_session_id', currentSessionId);
    }
    
    setSessionId(currentSessionId);
  }, [mounted]);

  useEffect(() => {
    if (!sessionId || !mounted) return;

    const allMessagesStr = localStorage.getItem('wzai_all_messages');
    
    if (allMessagesStr) {
      try {
        const allMessages: Message[] = JSON.parse(allMessagesStr);
        const sessionMessages = allMessages.filter(msg => msg.sessionId === sessionId);
        setMessages(sessionMessages);
        if (sessionMessages.length > 0) {
          setShowWelcome(false);
        }
      } catch (error) {
        console.error('Erro ao carregar mensagens:', error);
        setMessages([]);
      }
    } else {
      setMessages([]);
    }
  }, [sessionId, mounted]);

  const saveMessagesToStorage = (newMessages: Message[]) => {
    if (!mounted) return;

    try {
      const allMessagesStr = localStorage.getItem('wzai_all_messages');
      let allMessages: Message[] = allMessagesStr ? JSON.parse(allMessagesStr) : [];
      
      allMessages = allMessages.filter(msg => msg.sessionId !== sessionId);
      allMessages = [...allMessages, ...newMessages];
      
      if (allMessages.length > 1000) {
        allMessages = allMessages.slice(-1000);
      }
      
      localStorage.setItem('wzai_all_messages', JSON.stringify(allMessages));
    } catch (error) {
      console.error('Erro ao salvar mensagens:', error);
    }
  };

  useEffect(() => {
    if (messages.length > 0 && sessionId && mounted) {
      saveMessagesToStorage(messages);
    }
  }, [messages, sessionId, mounted]);

  useEffect(() => {
    if (messagesContainerRef.current && mounted) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isTyping, mounted]);

  const buildContextForWebhook = () => {
    const recentMessages = messages.slice(-10);
    
    return recentMessages.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text,
    }));
  };

  const handleSendMessage = async () => {
    if (!message.trim() || isSending || !sessionId || !mounted) return;

    setShowWelcome(false);

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message.trim(),
      sender: 'user',
      timestamp: Date.now(),
      sessionId,
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setIsSending(true);
    setIsTyping(true);

    try {
      const context = buildContextForWebhook();
      
      const response = await fetch('https://webhook.lernow.com/webhook/41dc3105-2996-49ee-8b8c-2a75e4ac85de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.text,
          sessionId: sessionId,
          context: context,
          timestamp: new Date().toISOString(),
        }),
      });

      let assistantText = '';

      if (response.ok) {
        const contentType = response.headers.get('content-type');
        
        if (contentType?.includes('application/json')) {
          const data = await response.json();
          assistantText = data.message || data.response || data.text || 'Mensagem recebida!';
        } else {
          assistantText = await response.text();
        }
      } else {
        assistantText = 'Desculpe, ocorreu um erro ao processar sua mensagem.';
      }

      if (assistantText.startsWith('=')) {
        assistantText = assistantText.substring(1);
      }

      setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: assistantText,
          sender: 'assistant',
          timestamp: Date.now(),
          sessionId,
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setIsTyping(false);
      }, 800);

    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      setTimeout(() => {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Desculpe, ocorreu um erro ao enviar sua mensagem.',
          sender: 'assistant',
          timestamp: Date.now(),
          sessionId,
        };

        setMessages((prev) => [...prev, errorMessage]);
        setIsTyping(false);
      }, 800);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-20 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A3A52]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F5F5] leading-tight">
                  Deixe o trabalho repetitivo do seu escritório com a WZAI.{' '}
                  <span className="text-[#059669]">E foque no que realmente importa.</span>
                </h1>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto max-w-sm">
                <div className="relative bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
                  <div className="relative bg-[#0A0A0A] h-auto flex flex-col">
                    <div className="bg-[#1A3A52] px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F5F5F5]">
                          <span className="text-xs font-bold text-[#059669]">DR</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#F5F5F5]">Dr. Ricardo</p>
                          <p className="text-xs text-[#999999]">Direito Tributário</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 pt-4 pb-4 space-y-4 flex flex-col justify-start overflow-y-auto max-h-[400px]">
                      <div className="h-64"></div>
                    </div>
                    <div className="bg-[#1A1A1A] px-4 py-3 flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Mensagem"
                        disabled
                        className="flex-1 bg-[#0A0A0A] text-[#F5F5F5] text-sm rounded-full px-4 py-2 outline-none opacity-50"
                      />
                      <button
                        disabled
                        className="rounded-full p-2 text-white opacity-50 cursor-not-allowed"
                        style={{ backgroundColor: '#059669' }}
                        aria-label="Enviar"
                      >
                        ➤
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-20 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1A3A52]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F5F5] leading-tight"
                variants={itemVariants}
              >
                Deixe o trabalho repetitivo do seu escritório com a WZAI.{' '}
                <span className="text-[#059669]">E foque no que realmente importa.</span>
              </motion.h1>
            </div>

            <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={itemVariants}>
              <div
                className="flex justify-center sm:justify-start"
                role="status"
                aria-live="polite"
              >
                <div
                  className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl border text-[#E48E2E] border-[#E48E2E]/70 bg-[#1a1207] font-extrabold uppercase tracking-wider"
                >
                  <span className="relative inline-block w-2.5 h-2.5">
                    <span className="absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ping"></span>
                    <span className="relative block w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  </span>
                  <span>teste nosso agente ↓</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="relative" variants={itemVariants}>
            <div className="relative mx-auto max-w-sm">
              <div className="relative bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
                <div className="relative bg-[#0A0A0A] h-auto flex flex-col">
                  <div className="bg-[#1A3A52] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#F5F5F5' }}
                      >
                        <img
                          src="https://midia.metrycads.com.br/wp-content/uploads/2025/10/logo-advocacia.png"
                          alt="Símbolo de advocacia"
                          className="block object-contain pointer-events-none p-1.5"
                          width="40"
                          height="40"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            const span = document.createElement('span');
                            span.className = 'text-xs font-bold';
                            span.textContent = 'DR';
                            span.style.color = '#059669';
                            img.parentNode?.replaceChild(span, img);
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#F5F5F5]">Dr. Ricardo</p>
                        <p className="text-xs text-[#999999]">Direito Tributário</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    ref={messagesContainerRef}
                    className="chat-messages-container p-4 pt-4 pb-4 space-y-4 flex flex-col justify-start overflow-y-auto max-h-[400px]"
                  >
                    {showWelcome && messages.length === 0 && (
                      <div className="flex justify-center items-center h-full">
                        <div
                          className="italic uppercase opacity-60 bg-white/5 text-[#F5F5F5] px-3 py-2 rounded-xl max-w-[90%] text-center text-xs"
                          role="note"
                          aria-live="polite"
                        >
                          Envie uma mensagem e teste um atendimento jurídico com IA em tempo real.
                        </div>
                      </div>
                    )}

                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`${
                            msg.sender === 'user'
                              ? 'bg-[#059669] text-white rounded-2xl rounded-tr-none'
                              : 'bg-[#1A1A1A] text-[#F5F5F5] rounded-2xl rounded-tl-none'
                          } px-4 py-2 max-w-[75%] text-sm`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-[#1A1A1A] text-[#F5F5F5] rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#F5F5F5] typing-dot"></div>
                          <div className="w-2 h-2 rounded-full bg-[#F5F5F5] typing-dot"></div>
                          <div className="w-2 h-2 rounded-full bg-[#F5F5F5] typing-dot"></div>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  <div className="bg-[#1A1A1A] px-4 py-3 flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Mensagem"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      disabled={isSending}
                      className="flex-1 bg-[#0A0A0A] text-[#F5F5F5] text-sm rounded-full px-4 py-2 outline-none disabled:opacity-50"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isSending || !message.trim()}
                      className="rounded-full p-2 text-white hover:brightness-110 transition-colors focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ backgroundColor: '#059669' }}
                      aria-label="Enviar"
                    >
                      ➤
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-4 bg-gradient-to-r from-[#059669]/20 to-[#1A3A52]/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {videoOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setVideoOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-2xl aspect-video bg-[#1A1A1A] rounded-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <Play className="w-16 h-16 text-[#059669] mx-auto" />
                <p className="text-[#F5F5F5]">Seu vídeo de 2 minutos aqui</p>
                <p className="text-sm text-[#999999]">Clique fora para fechar</p>
              </div>
            </div>

            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#059669] text-[#0A0A0A] flex items-center justify-center hover:bg-[#F5F5F5] transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

      <style>{`
        .typing-dot{animation:ud 1.1s ease-in-out infinite}
        .typing-dot:nth-child(2){animation-delay:.15s}
        .typing-dot:nth-child(3){animation-delay:.3s}
        @keyframes ud{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-6px)}}
        
        .chat-messages-container {
          scroll-behavior: smooth !important;
        }
      `}</style>
    </section>
  );
}
