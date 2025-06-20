import React from 'react';
// import { SectionHeading } from '@/components/SectionHeading/SectionHeading'

export default function VenuePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white">
      {/* Hero / Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Venue &amp; Logistics</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            The exact pickup point hasn’t been finalized yet, but we plan to choose a central location in Baku. After the session, we will bring everyone back to that same spot.
          </p>
        </div>
      </section>

      {/*Pick up Location */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading>Location &amp; Directions</SectionHeading>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.3613450450616!2d49.84847596155934!3d40.400845199999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5d7fa0b117%3A0x934d34ea5fb96947!2sG%C9%99nclik%20Parking!5e0!3m2!1sen!2shu!4v1747728406074!5m2!1sen!2shu"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>

            <div className="space-y-4 lg:col-span-1">
              <h3 className="text-xl font-semibold">Camp Venue Address</h3>
              <p className="text-white/90">
                [Venue Name]<br />
                123 Street <br />
                Baku, Azerbaijan
              </p>
              <a
                href="https://maps.google.com/?q=123+Training+Road+Baku"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-medium underline hover:text-white"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Venue Details */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading>Venue Details</SectionHeading>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8 text-center">
            Get a glimpse of the facilities where our camp will take place.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg h-48 bg-white/20 flex items-center justify-center text-white/50">
              Image 1 Placeholder
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-48 bg-white/20 flex items-center justify-center text-white/50">
              Image 2 Placeholder
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-48 bg-white/20 flex items-center justify-center text-white/50">
              Image 3 Placeholder
            </div>
          </div>
        </div>
      </section> */}

    </main>
  );
}