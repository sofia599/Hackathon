'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  LockOutlined,
  SafetyOutlined,
  SyncOutlined,
  UserOutlined,
  KeyOutlined,
  CloudOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Leet Code Encryption`,
      description: `Transform your passphrases into uncrackable passwords using our unique leet code cipher.`,
      icon: <LockOutlined />,
    },
    {
      heading: `Memorable Strength`,
      description: `Create strong passwords you can actually remember, combining security with ease of use.`,
      icon: <SafetyOutlined />,
    },
    {
      heading: `Secure Password Storage`,
      description: `Safely store and organize all your passwords in one centralized, encrypted location.`,
      icon: <CloudOutlined />,
    },
    {
      heading: `Multi-Account Management`,
      description: `Effortlessly manage passwords for all your accounts with custom naming and organization.`,
      icon: <UserOutlined />,
    },
    {
      heading: `Regular Security Updates`,
      description: `Stay protected with our continuously evolving security measures and updates.`,
      icon: <SyncOutlined />,
    },
    {
      heading: `One-Click Access`,
      description: `Access your passwords quickly and securely with our streamlined user interface.`,
      icon: <KeyOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Thompson`,
      designation: `IT Security Specialist`,
      content: `The Password Cypher App has revolutionized how I manage passwords for both personal and professional use. It's a game-changer in digital security.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `Software Developer`,
      content: `As someone who deals with multiple accounts daily, this app has been a lifesaver. Strong, memorable passwords for everything - it's brilliant!`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Small Business Owner`,
      content: `I used to struggle with remembering complex passwords. Now, I have fort-knox level security that I can actually recall. It's peace of mind in an app.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Okonkwo`,
      designation: `Cybersecurity Consultant`,
      content: `I recommend the Password Cypher App to all my clients. It's the perfect blend of high-security and user-friendliness.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Yamamoto`,
      designation: `Digital Marketing Manager`,
      content: `Managing passwords for multiple client accounts used to be a nightmare. This app has streamlined my workflow and boosted our overall security.`,
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      name: `Robert Greenfield`,
      designation: `Retired Teacher`,
      content: `Even for someone not tech-savvy like me, this app is easy to use. I feel much safer online now, knowing all my accounts are properly secured.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic Cypher`,
      description: `Perfect for individual users looking to enhance their personal digital security.`,
      monthly: 4.99,
      yearly: 49.99,
      features: [
        `Unlimited password generation`,
        `Secure storage for up to 50 passwords`,
        `Basic encryption`,
      ],
    },
    {
      title: `Cypher Pro`,
      description: `Ideal for professionals and small businesses requiring advanced security features.`,
      monthly: 9.99,
      yearly: 99.99,
      features: [
        `Unlimited password generation and storage`,
        `Advanced encryption`,
        `Multi-device sync`,
        `Priority customer support`,
      ],
      highlight: true,
    },
    {
      title: `Cypher Enterprise`,
      description: `Comprehensive solution for large organizations with complex security needs.`,
      monthly: 19.99,
      yearly: 199.99,
      features: [
        `All Pro features`,
        `Team management`,
        `API access`,
        `Customizable security policies`,
        `Dedicated account manager`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the leet code cipher work?`,
      answer: `The leet code cipher replaces letters with numbers or symbols that resemble them, creating a complex password from a simple phrase. For example, "password" might become "p@55w0rd".`,
    },
    {
      question: `Is it safe to store all my passwords in one place?`,
      answer: `Yes, it's safe when done correctly. We use state-of-the-art encryption to protect your stored passwords. In fact, it's often safer than using the same password across multiple sites or writing them down.`,
    },
    {
      question: `Can I use the Password Cypher App on multiple devices?`,
      answer: `Yes, our Cypher Pro and Enterprise plans support multi-device sync, allowing you to access your passwords securely from any device.`,
    },
    {
      question: `What happens if I forget my master password?`,
      answer: `For security reasons, we cannot recover your master password. However, we offer secure password reset options that don't compromise the safety of your stored passwords.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Create Your Account`,
      description: `Sign up and set a strong master password to secure your vault.`,
    },
    {
      heading: `Generate Cyphered Passwords`,
      description: `Enter a memorable phrase, and watch as it transforms into a robust, encrypted password.`,
    },
    {
      heading: `Store and Organize`,
      description: `Save your new passwords in your secure vault, organized by account or category.`,
    },
    {
      heading: `Access Anywhere, Anytime`,
      description: `Retrieve your passwords securely whenever you need them, from any device.`,
    },
  ]

  const painPoints = [
    {
      emoji: `🤯`,
      title: `Overwhelmed by countless passwords`,
    },
    {
      emoji: `😓`,
      title: `Stressed about potential security breaches`,
    },
    {
      emoji: `😰`,
      title: `Anxious about forgetting critical passwords`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Fortify Your Digital Life with Unbreakable, Unforgettable Passwords`}
        subtitle={`Transform simple phrases into fortress-like passwords. Secure your online presence without the headache of remembering complex codes.`}
        buttonText={`Secure Your Accounts Now`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/VBbkO1-cybersec-D3bl`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={10000}
            suffixText={`protected users and counting`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Trusted by Industry Leaders`} />
      <LandingPainPoints
        title={`The Password Predicament: A Modern Digital Dilemma`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Simplify Your Security in Four Easy Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Empower Your Digital Security`}
        subtitle={`Discover how the Password Cypher App revolutionizes your online safety`}
        features={features}
      />
      <LandingTestimonials
        title={`Real People, Real Security`}
        subtitle={`See how others have transformed their digital lives with the Password Cypher App`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Peace of Mind`}
        subtitle={`Choose the perfect plan to safeguard your digital world`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Your Questions, Answered`}
        subtitle={`Everything you need to know about securing your digital life with the Password Cypher App`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Take Control of Your Digital Security Today`}
        subtitle={`Don't wait for a breach to happen. Start creating unbreakable, unforgettable passwords now.`}
        buttonText={`Start Your Free Trial`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
