'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function SomeFaq() {
    const about = [
        {
            id: 'about-1',
            question: 'What are Lead Generation Automation Tools?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'about-2',
            question: 'What is Leadseeder?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'about-3',
            question: 'An I get a demo of Leadseeder and get help with setup?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'about-4',
            question: 'What results can I expect from Leadseeder?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
        {
            id: 'about-5',
            question: 'Do I need to keep my browser and laptop open while Leadseeder is up and running?',
            answer: 'Automation tools are software designed to automate certain tasks that can streamline your social media activity. Besides saving you time, It help you run personalized campaigns and analyse data to help you create better versions of your campaigns.',
        },
    ]

   

    const faqSections = [
        { title: 'About Leadseeder', items: about },
       
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">

                <div className="mt-12 space-y-16">
                    {faqSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-left text-3xl font-bold lg:text-4xl">
                                {section.title}
                            </h3>
                            
                            <Accordion
                                type="single"
                                collapsible
                                className="mt-4 w-full"
                            >
                                {section.items.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        value={item.id}
                                        className="border-b border-dashed py-4"
                                    >
                                        <AccordionTrigger className="cursor-pointer justify-start text-left text-2xl text-bold hover:no-underline px-0 [&[data-state=open]>svg]:rotate-180">
                                            <span className="mr-2 flex-1 text-left">{item.question}</span>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-0">
                                            <p className="text-lg">{item.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}

                    <div className="mt-16">
                        <p className="text-muted-foreground">
                            Can&apos;t find what you&apos;re looking for? Contact our{' '}
                            <Link
                                href="#"
                                className="text-primary font-medium hover:underline"
                            >
                                customer support team
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}