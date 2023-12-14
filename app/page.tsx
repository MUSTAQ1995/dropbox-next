import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main className='' >
      <div
        className='flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800'
      >
        <div className='p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5' >
          <h1 className="text-5xl font-bold" >
            Welcome to Dropbox, <br />
            <br />
            Storing everything for you and your business needs. All in one place
          </h1>

          <p className='pb-20'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum
          </p>

          <Link href="/dashboard"
            className='flex items-center cursor-pointer bg-blue-500 p-5 w-fit '
          >
            Try id for free!
            <ArrowRight className='ml-10' />
          </Link>
        </div>
        <div className='bg-[#1E1919] dark:bg-slate-800 h-full p-10' >
          <video autoPlay loop muted className='rounded-lg' >
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type='video/mp4'
            />
            Your browser doen
          </video>
        </div>
      </div>
      <p className='text-center font-bold text-xl pt-5' >Disclaimer</p>
      <p className='text-center font-light p-2' >
        This Video is made for informational and educational purposes only. We do not own or
        affiliate with Dropbox and/or any of its subsidiaries in any form. Copyright Disclaimer
        under section 107 of the Copyright Act 1976, allowance is made for “fair use” of this
        video for education purposes.
      </p>
    </main>
  )
}
