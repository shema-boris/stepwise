import React from 'react'
import Link  from 'next/link'
import { Button } from './button'
import Image from 'next/image';
const HeroSection = () => {
  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
      <div className='space-y-6 text-center'>
        <div className='space-y-6 mx-auto'>
            <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title'>Your AI Career Coach for
                <br/>
                Professional Success    
            </h1>
            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
                Advance your career with personalized guidance, interview prep, and AI-poweered tools for job success.
            </p>
        </div>

        <div>
            <Link href="/dashboard">
                <Button size="lg" className="px-8">
                    Get Started
                </Button>
            </Link>
            <Link href="http://www.youtube.com/roadsidecoder">
                <Button size="lg" className="px-8" variant='outline'>
                    Get Started
                </Button>
            </Link>
        </div>
        <div>
            <div>
                <Image
                    src={"/banner.jpeg"}
                    width={1280}
                    height={720}
                    alt="Banner Stepwise"
                    className="rounded-lg shadow-2xl border mx-auto"
                    priority
                />
            </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
