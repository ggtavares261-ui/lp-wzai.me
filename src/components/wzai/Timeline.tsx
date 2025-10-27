
'use client';

import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle, Calendar, Zap } from 'lucide-react';

const timelineSteps = [
  {
    number: 1,
    title: 'ENTRADA DO CONTATO',
    description: 'Lead chega pelo WhatsApp do escritório e a WZAI assume o primeiro atendimento.',
    icon: MessageCircle,
  },
  {
    number: 2,
    title: 'TRIAGEM',
    description: 'A WZAI coleta informações principais e filtra quem não tem intenção real de consultar.',
    icon: CheckCircle,
  },
  {
    number: 3,
    title: 'AGENDAMENTO',
    description: 'Oferece horários disponíveis e confirma automaticamente o agendamento.',
    icon: Calendar,
  },
  {
    number: 4,
    title: 'ENTREGA AO ESCRITÓRIO',
    description: 'Você recebe apenas contatos já triados e prontos para atendimento jurídico.',
    icon: Zap,
  },
];

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  return (
    <section id="como-funciona" className="relative py-12 sm:py-16 bg-[#0A0A0A] overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1A3A52]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16 space-y-4" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5]">
            Como Funciona
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="relative"
                variants={itemVariants}
              >
                {/* Card */}
                <div className="card-noir h-full flex flex-col">
                  {/* Número e ícone */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#059669]/20 border border-[#059669]/40">
                      <Icon className="w-6 h-6 text-[#059669]" />
                    </div>
                    <span className="text-3xl font-bold text-[#059669]/30">
                      {step.number}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <h3 className="text-lg font-bold text-[#F5F5F5] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#999999] leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>

                {/* Conectores (apenas em desktop) */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-[#059669]/50 to-transparent transform -translate-y-1/2" />
                )}

                {/* Conectores mobile */}
                {index < timelineSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[#059669]/50 to-transparent" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Linha de progresso animada */}
        <motion.div
          className="mt-16 hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-1 w-full bg-[#1A1A1A] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#059669] to-[#1A3A52]"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 0.8 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
