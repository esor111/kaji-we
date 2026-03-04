import { Header, Footer, MobileBottomBar } from '../components/layout';
import { Container, Button, Icon } from '../components/common';
import { useTranslation } from '../hooks/useTranslation';
import styles from './Team.module.css';

const teamMembers = [
  {
    id: 1,
    name: 'राजेश श्रेष्ठ',
    nameEn: 'Rajesh Shrestha',
    role: 'Founder & CEO',
    roleNe: 'संस्थापक तथा प्रमुख कार्यकारी',
    image: '/images/team/member-1.webp',
    experience: '15+ years',
    experienceNe: '१५+ वर्ष',
  },
  {
    id: 2,
    name: 'सुनिल तामाङ',
    nameEn: 'Sunil Tamang',
    role: 'Lead Technician',
    roleNe: 'प्रमुख प्राविधिक',
    image: '/images/team/member-2.webp',
    experience: '10+ years',
    experienceNe: '१०+ वर्ष',
  },
  {
    id: 3,
    name: 'अनिता गुरुङ',
    nameEn: 'Anita Gurung',
    role: 'Project Manager',
    roleNe: 'परियोजना प्रबन्धक',
    image: '/images/team/member-3.webp',
    experience: '8+ years',
    experienceNe: '८+ वर्ष',
  },
  {
    id: 4,
    name: 'प्रकाश राई',
    nameEn: 'Prakash Rai',
    role: 'Senior Technician',
    roleNe: 'वरिष्ठ प्राविधिक',
    image: '/images/team/member-4.webp',
    experience: '12+ years',
    experienceNe: '१२+ वर्ष',
  },
];

export default function Team() {
  const { t, language } = useTranslation();

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <Container>
            <div className={styles.heroContent}>
              <span className={styles.label}>
                {language === 'ne' ? 'हाम्रो टोली' : 'Our Team'}
              </span>
              <h1>
                {language === 'ne' 
                  ? 'अनुभवी र समर्पित टोली' 
                  : 'Experienced & Dedicated Team'}
              </h1>
              <p>
                {language === 'ne'
                  ? 'हाम्रो टोलीमा उच्च दक्ष र अनुभवी प्राविधिकहरू छन् जो तपाईंको घरलाई पानीबाट जोगाउन प्रतिबद्ध छन्।'
                  : 'Our team consists of highly skilled and experienced technicians committed to protecting your home from water damage.'}
              </p>
            </div>
          </Container>
        </section>

        {/* Team Grid */}
        <section className={styles.teamSection}>
          <Container>
            <div className={styles.grid}>
              {teamMembers.map((member) => (
                <div key={member.id} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img 
                      src={member.image} 
                      alt={language === 'ne' ? member.name : member.nameEn}
                      onError={(e) => {
                        e.target.src = '/images/team/placeholder.webp';
                      }}
                    />
                  </div>
                  <div className={styles.info}>
                    <h3>{language === 'ne' ? member.name : member.nameEn}</h3>
                    <p className={styles.role}>
                      {language === 'ne' ? member.roleNe : member.role}
                    </p>
                    <p className={styles.experience}>
                      <Icon name="briefcase" size={16} />
                      {language === 'ne' ? member.experienceNe : member.experience}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <Container>
            <div className={styles.ctaContent}>
              <h2>
                {language === 'ne' 
                  ? 'हामीसँग काम गर्न चाहनुहुन्छ?' 
                  : 'Want to Work With Us?'}
              </h2>
              <p>
                {language === 'ne'
                  ? 'हामी सधैं प्रतिभाशाली र समर्पित व्यक्तिहरूको खोजीमा छौं।'
                  : 'We are always looking for talented and dedicated individuals.'}
              </p>
              <div className={styles.ctaButtons}>
                <Button 
                  href="#contact" 
                  variant="primary" 
                  size="lg"
                  icon={<Icon name="arrowRight" size={18} />}
                >
                  {language === 'ne' ? 'सम्पर्क गर्नुहोस्' : 'Contact Us'}
                </Button>
                <Button 
                  href="tel:9864488561" 
                  variant="outline" 
                  size="lg"
                  icon={<Icon name="phone" size={18} />}
                >
                  986-448-8561
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
