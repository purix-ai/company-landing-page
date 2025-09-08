import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin } from 'react-icons/fa';

const Founders = () => {
  const { t } = useTranslation();

  const founders = [
    {
      name: 'Bruce Chou',
      role: t('founders.bruce.role'),
      bio: t('founders.bruce.bio'),
      image: '/founder-photo/bruce.jpeg',
      linkedin: 'https://www.linkedin.com/in/brucechou1983/'
    },
    {
      name: 'Jeff Chen',
      role: t('founders.jeff.role'),
      bio: t('founders.jeff.bio'),
      image: '/founder-photo/jeff.png',
      linkedin: 'https://www.linkedin.com/in/jeffontheground/'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('founders.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('founders.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-gradient-to-r from-purple-400 to-blue-400"
                  />
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    aria-label={`${founder.name} LinkedIn profile`}
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-lg text-purple-600 font-semibold mb-4">
                  {founder.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('founders.story.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('founders.story.content')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;