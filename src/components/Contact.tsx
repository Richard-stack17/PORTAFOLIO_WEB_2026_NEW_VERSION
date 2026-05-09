'use client';

import { useTranslations } from 'next-intl';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const t = useTranslations('Contact');
  const [state, handleSubmit] = useForm('mpqbyykp');

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-6xl" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-4">{t('title')}</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              {t('heading')}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              {t('description')}
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <i className="bx bx-map-pin text-xl"></i>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary">{t('location')}</h4>
                  <p className="text-foreground">{t('locationValue')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <i className="bx bx-phone text-xl"></i>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary">{t('phone')}</h4>
                  <p className="text-foreground">{t('phoneValue')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <i className="bx bx-envelope text-xl"></i>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-primary">{t('emailLabel')}</h4>
                  <p className="text-foreground">{t('emailValue')}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:richardalfaromanzano@gmail.com" className="px-6 py-3 bg-[#08232b] dark:bg-primary text-white font-medium rounded-md hover:bg-[#0a2e38] dark:hover:bg-primary-hover transition-colors shadow-sm flex items-center justify-center gap-2">
                <i className="bx bx-envelope text-lg"></i>
                {t('email')}
              </a>
              <a href="https://www.linkedin.com/in/richard-ailton-alfaro-manzano-194446357/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-background text-foreground font-medium rounded-md border border-border hover:border-primary hover:text-primary transition-colors shadow-sm flex items-center justify-center gap-2">
                <i className="bx bxl-linkedin text-lg"></i>
                {t('linkedin')}
              </a>
              <a href="https://wa.me/51907910829" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#25D366] text-white font-medium rounded-md hover:bg-[#20b858] transition-colors shadow-sm flex items-center justify-center gap-2">
                <i className="bx bxl-whatsapp text-lg"></i>
                {t('whatsapp')}
              </a>
            </div>
          </div>

          <div className="bg-background text-foreground p-8 md:p-10 rounded-2xl shadow-xl border border-border relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <i className="bx bx-send text-xl transform -rotate-45 relative right-[2px] top-[2px]"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{t('formTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('formDesc')}</p>
              </div>
            </div>

            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                  <i className="bx bx-check text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">{t('formSuccess')}</h3>
                <p className="text-muted-foreground mb-8 max-w-xs">{t('formDesc')}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors"
                >
                  {t('formSubmit')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="bx bx-user text-muted-foreground"></i>
                      </div>
                      <input 
                        id="name"
                        name="name" 
                        type="text" 
                        required 
                        placeholder={t('formName')} 
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                      />
                    </div>
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="bx bx-envelope text-muted-foreground"></i>
                      </div>
                      <input 
                        id="email"
                        name="email" 
                        type="email" 
                        required 
                        placeholder={t('formEmail')} 
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                      />
                    </div>
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="bx bx-user-circle text-muted-foreground"></i>
                    </div>
                    <input 
                      id="subject"
                      name="subject" 
                      type="text" 
                      required 
                      placeholder={t('formSubject')} 
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" 
                    />
                  </div>
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                      <i className="bx bx-message-square-detail text-muted-foreground"></i>
                    </div>
                    <textarea 
                      id="message"
                      name="message" 
                      required 
                      placeholder={t('formMessage')} 
                      rows={4} 
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                    ></textarea>
                  </div>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                {state.errors && (
                  <p className="text-sm text-red-500 text-center">{t('formError')}</p>
                )}

                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full py-4 bg-[#08232b] dark:bg-primary text-white font-bold rounded-md hover:bg-[#0a2e38] dark:hover:bg-primary-hover transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <i className="bx bx-loader-alt animate-spin text-xl"></i>
                  ) : (
                    <>
                      {t('formSubmit')} <i className="bx bx-right-arrow-alt text-xl"></i>
                    </>
                  )}
                </button>
                
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-2">
                  <i className="bx bx-lock-alt"></i>
                  <span>{t('formSecure')}</span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
