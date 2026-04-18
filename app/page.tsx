import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  CalendarCheck,
  Car,
  Clock,
  CreditCard,
  HeartPulse,
  IndianRupee,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  ShieldCheck,
  Star,
  WalletCards
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RazorpayButton } from "@/components/razorpay-button";
import alignersImage from "../components/images/Aligners.png";
import bracesImage from "@/components/images/Braces.png";
import bridgesCrownsImage from "@/components/images/BridgesCrowns.png";
import dentalFillingsImage from "@/components/images/DentalFillings.png";
import dentalImplantsImage from "@/components/images/Dental_Implants.png";
import denturesImage from "@/components/images/Dentures.png";
import fullMetalCrownsImage from "@/components/images/FullMetalCrowns1500.png";
import kidsDentistryImage from "@/components/images/kidsDentistry.png";
import mouthUlcersImage from "@/components/images/MouthUlcers.png";
import oralThrushImage from "@/components/images/OralThrush.png";
import painlessRootCanalImage from "@/components/images/PainlessRootCanal.png";
import preventiveDentistryImage from "@/components/images/PreventiveDentistry.png";
import scalingPolishingImage from "@/components/images/Scaling&Polishing.png";
import smileMakeoversImage from "@/components/images/SmileMakeovers.png";
import teethWhiteningImage from "@/components/images/TeethWhitening.png";
import veneersImage from "@/components/images/Veneers.png";
import wisdomToothRemovalImage from "@/components/images/WisdomToothRemoval.png";

const phoneDisplay = "+91 95609 32970";
const phoneHref = "tel:+919560932970";
const appointmentHref = "https://kivihealth.com/iam/shourya.poswal.18213/bookslot";
const whatsappHref =
  "https://wa.me/919560932970?text=Hi%20The%20Tooth%20Clinic%2C%20I%20want%20to%20book%20a%20dental%20appointment.";
const mapHref = "https://maps.app.goo.gl/37HQ8sRAguJzNWSeA";
const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer"
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
    >
      <path d="M16.01 3.2c-7.06 0-12.8 5.72-12.8 12.77 0 2.42.68 4.78 1.96 6.82L3.1 30.36l7.75-2.03a12.78 12.78 0 0 0 5.16 1.08h.01c7.05 0 12.79-5.73 12.79-12.78 0-3.41-1.33-6.62-3.74-9.03a12.69 12.69 0 0 0-9.06-3.74Zm0 23.94h-.01c-1.72 0-3.41-.46-4.88-1.32l-.35-.21-4.6 1.21 1.23-4.48-.23-.36a10.53 10.53 0 0 1-1.69-5.71c0-5.81 4.73-10.53 10.55-10.53 2.82 0 5.46 1.1 7.45 3.09a10.46 10.46 0 0 1 3.09 7.44c-.01 5.81-4.74 10.54-10.56 10.54Zm5.78-7.89c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

const services = [
  {
    title: "Kids Dentistry",
    image: kidsDentistryImage,
    copy: "Gentle care for children, checkups, cavities and habit guidance."
  },
  {
    title: "Aligners",
    image: alignersImage,
    copy: "Clear removable trays planned around your bite and smile goals."
  },
  {
    title: "Dental Implants",
    image: dentalImplantsImage,
    copy: "Stable tooth replacement planned for comfort, function and long-term support."
  },
  {
    title: "Veneers",
    image: veneersImage,
    copy: "A cosmetic option for improving tooth shape, shade and smile balance."
  },
  {
    title: "Dental Fillings",
    image: dentalFillingsImage,
    copy: "Tooth-colored repairs for cavities, chips and small damaged areas."
  },
  {
    title: "Mouth Ulcers",
    image: mouthUlcersImage,
    copy: "Assessment and relief planning for recurring or painful oral ulcers."
  },
  {
    title: "Scaling & Polishing",
    image: scalingPolishingImage,
    copy: "Plaque and stain removal for fresher breath and healthier gums."
  },
  {
    title: "Bridges & Crowns",
    image: bridgesCrownsImage,
    copy: "Restorations for weak, broken or missing teeth after diagnosis."
  },
  {
    title: "Painless Root Canal",
    image: painlessRootCanalImage,
    copy: "Pain-aware treatment to remove infection and preserve the natural tooth."
  },
  {
    title: "Smile Makeovers",
    image: smileMakeoversImage,
    copy: "A planned combination of cosmetic treatments for a more confident smile."
  },
  {
    title: "Preventive Dentistry",
    image: preventiveDentistryImage,
    copy: "Checkups, cleaning and guidance to catch issues early."
  },
  {
    title: "Teeth Whitening",
    image: teethWhiteningImage,
    copy: "Cosmetic brightening after checking sensitivity, enamel and gum health."
  },
  {
    title: "Braces",
    image: bracesImage,
    copy: "Dependable smile correction for crowding, gaps and bite alignment."
  },
  {
    title: "Dentures",
    image: denturesImage,
    copy: "Removable tooth replacement options for comfort and everyday function."
  },
  {
    title: "Full Metal Crowns",
    image: fullMetalCrownsImage,
    copy: "Durable crown options often considered for back teeth."
  },
  {
    title: "Oral Thrush",
    image: oralThrushImage,
    copy: "Diagnosis and treatment guidance for fungal infections in the mouth."
  },
  {
    title: "Wisdom Tooth Removal",
    image: wisdomToothRemovalImage,
    copy: "Careful evaluation and removal planning for painful or impacted wisdom teeth."
  }
];

const featuredServiceTitles = ["Kids Dentistry", "Painless Root Canal"];
const featuredServices = featuredServiceTitles
  .map((title) => services.find((service) => service.title === title))
  .filter((service): service is (typeof services)[number] => Boolean(service));
const remainingServices = services.filter((service) => !featuredServiceTitles.includes(service.title));

function ServiceCard({
  service,
  imageSizes
}: {
  service: (typeof services)[number];
  imageSizes: string;
}) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden border-b bg-neutral-100">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes={imageSizes}
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="flex-1">
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.copy}</CardDescription>
      </CardHeader>
    </Card>
  );
}

const faqs = [
  {
    q: "Does root canal treatment hurt?",
    a: "The tooth is numbed before treatment. Most patients feel pressure, not sharp pain, and the appointment is meant to remove the source of infection and pain."
  },
  {
    q: "How much does dental treatment cost in Sarita Vihar?",
    a: "Basic cleaning can start around Rs. 1,200, root canal treatment often starts around Rs. 3,500, and braces, aligners or implants depend on the case. The clinic can share an estimate before treatment begins."
  },
  {
    q: "How long does a root canal take?",
    a: "Many cases take one to two visits. More complex infections, back teeth or retreatment cases may need additional visits for a better result."
  },
  {
    q: "Can I pay by UPI, card or EMI?",
    a: "Yes. UPI, cards and Razorpay-supported payment options can be used. EMI can be discussed for aligners, braces, implants and larger treatment plans."
  },
  {
    q: "What care is needed after dental treatment?",
    a: "Avoid chewing hard food until the final filling or crown is placed, take prescribed medicines on schedule, brush gently and return for review if swelling or pain increases."
  }
];

const reviews = [
  {
    name: "Riya Sharma",
    initial: "R",
    time: "3 weeks ago",
    color: "bg-emerald-600",
    copy: "Very clean clinic and the doctor explained every step before starting. I felt comfortable throughout the appointment."
  },
  {
    name: "Amit Bhatia",
    initial: "A",
    time: "1 month ago",
    color: "bg-neutral-950",
    copy: "Went for tooth pain and got quick relief. Pricing was clearly discussed before treatment, which made the visit easy."
  },
  {
    name: "Priya Nair",
    initial: "P",
    time: "2 months ago",
    color: "bg-blue-600",
    copy: "Helpful for aligner consultation. The options were explained clearly and the clinic location is convenient for Sarita Vihar."
  },
  {
    name: "Sahil Mehta",
    initial: "S",
    time: "2 months ago",
    color: "bg-yellow-500",
    copy: "Good experience for cleaning and polishing. The appointment was calm, hygienic and handled with care."
  }
];

const transformations = [
  {
    title: "Aligner smile correction",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Whitening and polishing",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Cosmetic front tooth work",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
  }
];

const blogPosts = [
  {
    title: "Tooth Stains – Everything You Need To Know",
    excerpt: "Stains on teeth are a frequent dental issue that may affect one and all. Here's what you can do about it.",

  },
  {
    title: "6 Common Gum Disease Myths Debunked",
    excerpt: "Everyone has a chance of getting gum disease — but many myths surround it. Let’s set the record straight.",
  },
  {
    title: "Should You Brush Before or After Breakfast?",
    excerpt: "Many people brush at the same time each day — but which is the right time? The answer may surprise you.",
  }
];

const practiceStats = [
  {
    value: "10",
    suffix: "+",
    label: "Years Experience"
  },
  {
    value: "10K",
    suffix: "+",
    label: "Happy Patients"
  },
  {
    value: "4.8",
    suffix: "+",
    label: "Rating on Google"
  },
  {
    value: "",
    label: "Advanced Dental Technology"
  }
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "The Tooth Clinic",
  image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  telephone: "+919560932970",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sarita Vihar",
    addressRegion: "Delhi",
    addressCountry: "IN"
  },
  areaServed: ["Sarita Vihar", "Jasola", "Madanpur Khadar", "Okhla", "New Delhi"],
  paymentAccepted: "UPI, Cards, Razorpay, EMI",
  priceRange: "Rs. 1,200 - Rs. 80,000",
  medicalSpecialty: "Dentistry",
  url: "https://www.thetoothclinics.com"
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <header className="sticky top-0 z-40 border-b bg-white/95 shadow-sm backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="The Tooth Clinic home">
            <Image
              src="/images/theToothClinicLogo.jpg"
              alt="The Tooth Clinic"
              width={40}
              height={40}
              className="flex h-10 w-10 items-center justify-center rounded-lg"
            />
              
            <span className="leading-tight">
              <span className="block text-m font-semibold">The Tooth Clinic</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <Link href="#services" className="hover:text-foreground">Services</Link>
            <Link href="#doctor" className="hover:text-foreground">Doctor</Link>
            <Link href="#payments" className="hover:text-foreground">Payments</Link>
            <Link href="#location" className="hover:text-foreground">Location</Link>
            <Link href="#faqs" className="hover:text-foreground">FAQs</Link>
            <Link href="#blog" className="hover:text-foreground">Blog</Link>
          </nav>
          <Button asChild size="sm" variant="outline" className="shrink-0 rounded-full border-neutral-200 bg-white text-neutral-500 shadow-none hover:bg-neutral-50 hover:text-neutral-700">
            <Link href={appointmentHref} {...externalLinkProps}>
              Book an Appointment
            </Link>
          </Button>
        </div>
      </header>

      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden border-b bg-white">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=80"
          alt="Modern clean dental clinic treatment room"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/35" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="container relative flex min-h-[calc(100svh-4rem)] items-center py-12 sm:py-16">
          <div className="max-w-3xl rounded-lg bg-white/75 p-5 shadow-soft backdrop-blur-sm sm:p-8 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0">
            <Badge className="mb-5">Best Dentist in Sarita Vihar, Delhi</Badge>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-normal text-neutral-950 sm:text-5xl lg:text-7xl">
              Healthy, Confident Smiles for Your Whole Family.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg sm:leading-8">
              The Tooth Clinic by Dr. Shourya Poswal offers root canal care, braces,
              aligners, implants, cleaning and whitening with clear pricing, UPI, card
              and EMI-friendly payment options.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link 
                href={appointmentHref} 
                {...externalLinkProps} 
                className="group relative inline-flex w-full sm:w-auto items-center justify-center rounded-full p-[2px] transition duration-300 hover:scale-[1.02] active:scale-95 shadow-sm"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 via-yellow-200 to-pink-400 bg-[length:200%_auto] blur-[3px] opacity-60 transition duration-300 group-hover:animate-gradient group-hover:opacity-100 pointer-events-none"></span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 via-yellow-200 to-pink-400 bg-[length:200%_auto] transition duration-300 group-hover:animate-gradient pointer-events-none"></span>
                <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-lg font-medium text-neutral-800">
                  <Calendar className="h-5 w-5" />
                  Book an Appointment Now
                </span>
              </Link>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-neutral-700 sm:grid-cols-3">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Open today: 11 AM - 8:30 PM</span>
              <span className="flex items-center gap-2"><IndianRupee className="h-4 w-4" /> EMI for bigger plans</span>
              <Link href={mapHref} {...externalLinkProps} className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Sarita Vihar</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-white" aria-label="Clinic experience highlights">
        <div className="container grid py-6 sm:py-8 md:grid-cols-4">
          {practiceStats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-28 flex-col items-center justify-center border-b border-neutral-200 px-4 py-6 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="text-4xl font-semibold leading-none tracking-normal text-neutral-950 sm:text-5xl">
                {stat.value}
                {stat.suffix ? (
                  <span className="ml-1 align-top text-xl font-semibold leading-none text-emerald-600 sm:text-2xl">
                    {stat.suffix}
                  </span>
                ) : null}
              </p>
              <p className="mt-3 text-sm font-medium tracking-normal text-muted-foreground sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b bg-neutral-950 py-4 text-white">
        <div className="container flex flex-col gap-3 text-sm font-medium md:flex-row md:items-center md:justify-between">
          <span className="text-base font-semibold">Dental emergency, swelling or severe toothache?</span>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="secondary" size="sm">
              <Link href={phoneHref}><PhoneCall className="h-4 w-4" /> Call Now</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-neutral-950">
              <Link href={mapHref} {...externalLinkProps}><MapPin className="h-4 w-4" /> Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad bg-neutral-50">
        <div className="container">
          <div className="max-w-2xl">
            <Badge>Services we offer</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl">
              Clear treatment choices without confusing dental jargon.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Every plan starts with a diagnosis and estimate, so you know the likely
              visits, comfort level and payment options before saying yes.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                imageSizes="(min-width: 768px) 50vw, 100vw"
              />
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {remainingServices.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                imageSizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="doctor" className="section-pad border-y bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border bg-neutral-100 shadow-soft">
            <Image
              src="/images/Dr_ShouryaPoswal.jpg"
              alt="Dentist profile portrait"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Badge>Meet your Doctor</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl">
              Dr. Shourya Poswal
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              With a Master’s in Dentistry and over a decade of clinical excellence, Dr. Shourya Poswal has transformed thousands of smiles.
              Known for his gentle approach and detailed patient education, he ensures you feel confident and comfortable throughout your treatment.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Qualification", "BDS, MDS with 10+ years of experience"],
                ["Expertise", " in advanced dental treatments, including dental implants, smile designing, and painless root canal procedures."],
                ["Believes", " in providing ethical, patient-focused care with a strong emphasis on hygiene, precision, and long-term results."],
                ["Planning", " with attention to detail to ensure comfort and confidence for each patient."],

                
              ].map(([label, value]) => (
                <Card key={label} className="bg-neutral-50">
                  <CardHeader>
                    <CardTitle className="text-base">{label}</CardTitle>
                    <CardDescription>{value}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge><ShieldCheck className="mr-2 h-3.5 w-3.5" /> Sterilization-first care</Badge>
              <Badge><HeartPulse className="mr-2 h-3.5 w-3.5" /> Emergency support</Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="payments" className="section-pad bg-neutral-50">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Badge>Flexible payments</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl">
              Affordable care with payment choices that work in India.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Dental treatment should feel financially clear. Ask for staged plans,
              EMI options and digital payments for aligners, implants, braces and larger
              smile makeover work.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Card>
                <CardHeader>
                  <WalletCards className="h-6 w-6" />
                  <CardTitle className="text-base">UPI</CardTitle>
                  <CardDescription>Pay by phone using your preferred UPI app.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CreditCard className="h-6 w-6" />
                  <CardTitle className="text-base">Cards</CardTitle>
                  <CardDescription>Debit and credit card support through Razorpay.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CalendarCheck className="h-6 w-6" />
                  <CardTitle className="text-base">EMI</CardTitle>
                  <CardDescription>Useful for braces, aligners, implants and cosmetic plans.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-6 text-white shadow-soft sm:p-8">
            <p className="text-sm font-semibold text-neutral-300">Appointment advance</p>
            <p className="mt-3 text-4xl font-semibold">Rs. 500</p>
            <p className="mt-4 leading-7 text-neutral-300">
              Razorpay checkout is wired for a booking advance. Add
              <span className="font-semibold text-white"> razorpay id </span>
              to enable live checkout.
            </p>
            <div className="mt-6">
              <RazorpayButton />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-y bg-white">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Badge>Before and after gallery</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl">
                Smile transformations that build confidence.
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href={whatsappHref} {...externalLinkProps}>Share my smile concern</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {transformations.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="relative aspect-[4/3]">
                  <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    A consultation confirms what is possible, how long it may take and
                    what fits your budget.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-neutral-50">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Badge>What patients say</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl">
                Google Reviews
              </h2>
            </div>
          </div>

          

          <div className="mt-8 flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {reviews.map((review) => (
              <Card key={review.name} className="min-w-[280px] max-w-sm flex-1 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${review.color}`}>
                        {review.initial}
                      </span>
                      <div>
                        <CardTitle className="text-base">{review.name}</CardTitle>
                        <CardDescription>{review.time}</CardDescription>
                      </div>
                    </div>
                   
                  </div>
                  <div className="mt-4 flex gap-1 text-yellow-500" aria-label="5 star review">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="mt-4 text-base leading-7 text-foreground">
                    “{review.copy}”
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="section-pad border-y bg-neutral-950 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge className="border-white/20 bg-white text-neutral-950">Location and timings</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl">
              Visit The Tooth Clinic in Sarita Vihar.
            </h2>
            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-lg border border-white/15 p-5">
                <Clock className="h-6 w-6 shrink-0" />
                <div>
                  <p className="font-semibold">Clinic timings</p>
                  <p className="mt-1 text-neutral-300">Monday to Saturday, 10:00 AM - 8:00 PM</p>
                  <p className="mt-1 text-neutral-300">Sunday by appointment</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-lg border border-white/15 p-5">
                <Car className="h-6 w-6 shrink-0" />
                <div>
                  <p className="font-semibold">Parking</p>
                  <p className="mt-1 text-neutral-300">Local market and street parking may be available near the clinic. Call before visiting for the easiest route.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="secondary">
                  <Link href={mapHref} {...externalLinkProps}>
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-neutral-950">
                  <Link href={whatsappHref} {...externalLinkProps}>
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp clinic
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/15 bg-white shadow-soft lg:min-h-full">
            <iframe
              title="Google Map for The Tooth Clinic Sarita Vihar Delhi"
              src="https://www.google.com/maps?q=The%20Tooth%20Clinic%20Sarita%20Vihar%20Delhi&output=embed"
              className="block h-[360px] w-full border-0 lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="faqs" className="section-pad bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge>FAQs</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl md:text-5xl">
              Questions patients ask before booking.
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="blog" className="section-pad bg-neutral-50/50">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-sky-600">Latest</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                Dental Blog
              </h2>
            </div>
            <Button className="rounded-full bg-[#0077B6] px-8 py-6 text-white hover:bg-[#005f91]">
              VIEW ALL BLOGS
            </Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Card key={i} className="group flex flex-col overflow-hidden border-sky-100 shadow-sm transition hover:shadow-md">
                <div className="h-1.5 w-full bg-sky-500" />
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-xl font-bold leading-tight text-neutral-900 group-hover:text-sky-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-sky-100">

                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">

                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white pb-24 pt-10 sm:pb-10">
        <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="The Tooth Clinic home">
            <Image
              src="/images/theToothClinicLogo.jpg"
              alt="The Tooth Clinic"
              width={40}
              height={40}
              className="flex h-10 w-10 items-center justify-center rounded-lg"
            />
              
            <span className="leading-tight">
              <span className="block text-m font-semibold">The Tooth Clinic</span>
            </span>
          </Link>
            
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline" className="rounded-full border-neutral-200 bg-white text-neutral-500 shadow-none hover:bg-neutral-50 hover:text-neutral-700">
              <Link href={phoneHref}><Phone className="mr-2 h-4 w-4" /> {phoneDisplay}</Link>
            </Button>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-5">
        <Button asChild variant="whatsapp" size="lg" className="w-full shadow-soft sm:w-auto">
          <Link href={whatsappHref} {...externalLinkProps}>
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </Link>
        </Button>
      </div>
    </main>
  );
}
